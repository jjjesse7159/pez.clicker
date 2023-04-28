/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayBotton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("play", "./PlayBotton/costumes/play.svg", {
        x: 75.5,
        y: 3.5
      }),
      new Costume("play small", "./PlayBotton/costumes/play small.svg", {
        x: 76.5,
        y: -3.476344680390042
      })
    ];

    this.sounds = [new Sound("pop", "./PlayBotton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "play small";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (!this.touching("mouse")) {
        this.costume = "play";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("play has been pressed");
  }

  *whenGreenFlagClicked3() {
    this.visible = true;
  }

  *whenIReceivePlayHasBeenPressed() {
    this.visible = false;
  }

  *whenthisspriteclicked2() {
    this.broadcast("leader");
  }
}
