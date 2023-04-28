/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GoBackToNormal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "go back to normal",
        "./GoBackToNormal/costumes/go back to normal.svg",
        { x: 128.75, y: -2.25 }
      )
    ];

    this.sounds = [new Sound("pop", "./GoBackToNormal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePlayHasBeenPressed() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.watchers.pezDispensers.visible = false;
  }

  *whenthisspriteclicked2() {
    this.broadcast("list so move out");
  }
}
