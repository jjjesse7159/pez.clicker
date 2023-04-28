/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SellCandy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("sell pez candy", "./SellCandy/costumes/sell pez candy.svg", {
        x: 124.5,
        y: 22.5
      }),
      new Costume(
        "sell pez candy 2",
        "./SellCandy/costumes/sell pez candy 2.svg",
        { x: 111.03393665158384, y: 16.916742081448007 }
      )
    ];

    this.sounds = [new Sound("pop", "./SellCandy/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list pressed" },
        this.whenIReceiveListPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list so move out" },
        this.whenIReceiveListSoMoveOut
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveListPressed() {
    this.visible = true;
  }

  *whenIReceiveListSoMoveOut() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.compare(this.stage.vars.pezCandy, 1) > 0) {
      this.stage.vars.pezCandy--;
      this.stage.vars.pezDispensers.push("pez dispenser");
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.pezDispensers = [];
  }

  *whenthisspriteclicked2() {
    if (this.compare(this.stage.vars.pezCandy, 1) > 0) {
      this.costume = "sell pez candy 2";
      yield* this.wait(0.05);
      this.costume = "sell pez candy";
    }
  }

  *whenGreenFlagClicked3() {
    this.costume = "sell pez candy";
  }
}
