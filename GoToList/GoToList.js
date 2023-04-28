/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoToList extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("list", "./GoToList/costumes/list.svg", {
        x: 161.75,
        y: 2.75
      })
    ];

    this.sounds = [new Sound("pop", "./GoToList/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list pressed" },
        this.whenIReceiveListPressed
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePlayHasBeenPressed() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    yield* this.broadcastAndWait("list pressed");
  }

  *whenIReceiveListPressed() {
    this.stage.watchers.pezDispensers.visible = true;
  }
}
