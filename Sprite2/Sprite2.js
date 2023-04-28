/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite2/costumes/costume2.svg", {
        x: 21,
        y: 9.243749999999949
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      )
    ];
  }

  *whenthisspriteclicked() {
    yield* this.askAndWait("What would you like");
    if (this.answer === "5 click") {
      if (this.compare(this.stage.vars.pezCandy, 75) > 0) {
        this.stage.vars.pezCandy -= 75;
        while (true) {
          this.stage.vars.pezCandy += 5;
          yield* this.wait(0.5);
          yield;
        }
      }
    } else {
      yield* this.thinkAndWait("sorry that did not work", 2);
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePlayHasBeenPressed() {
    this.visible = true;
  }
}
