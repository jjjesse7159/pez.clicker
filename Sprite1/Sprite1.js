/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pez1", "./Sprite1/costumes/pez1.svg", {
        x: 67.35599590541352,
        y: 28.405646760180957
      }),
      new Costume("pez2", "./Sprite1/costumes/pez2.svg", {
        x: 47.5,
        y: 20.79948416221859
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list so move out" },
        this.whenIReceiveListSoMoveOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list pressed" },
        this.whenIReceiveListPressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "list so move out" },
        this.whenIReceiveListSoMoveOut2
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked3)
    ];
  }

  *whenIReceivePlayHasBeenPressed() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.pezCandy = 0;
  }

  *whenthisspriteclicked() {
    this.stage.vars.pezCandy++;
  }

  *whenGreenFlagClicked3() {
    this.stage.watchers.pezCandy.visible = false;
  }

  *whenIReceivePlayHasBeenPressed2() {
    this.stage.watchers.pezCandy.visible = true;
  }

  *whenGreenFlagClicked4() {
    this.stage.watchers.pezDispensers.visible = false;
  }

  *whenIReceiveListSoMoveOut() {
    this.visible = false;
  }

  *whenIReceiveListPressed() {
    this.visible = false;
  }

  *whenIReceiveListSoMoveOut2() {
    this.visible = true;
  }

  *whenthisspriteclicked2() {
    this.costume = "pez2";
    yield* this.wait(0.05);
    this.costume = "pez1";
  }

  *whenthisspriteclicked3() {
    this.stage.vars.leaderBored.push(/* no username */ "");
  }
}
