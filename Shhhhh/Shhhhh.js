/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shhhhh extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Shhhhh/costumes/button3-a.svg", {
        x: -113.18067141116217,
        y: 145.53667485849058
      })
    ];

    this.sounds = [new Sound("pop", "./Shhhhh/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    this.stage.vars.pezCandy += 6.3478957777777774e69;
  }
}
