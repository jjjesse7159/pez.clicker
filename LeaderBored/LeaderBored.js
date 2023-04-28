/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LeaderBored extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LeaderBored/costumes/costume1.svg", {
        x: 143.75,
        y: 41.25
      })
    ];

    this.sounds = [new Sound("pop", "./LeaderBored/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "leader" },
        this.whenIReceiveLeader
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenthisspriteclicked() {
    this.stage.watchers.leaderBored.visible = true;
  }

  *whenKeySpacePressed() {
    this.stage.vars.pezCandy++;
  }

  *whenKeyLPressed() {
    this.stage.watchers.leaderBored.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.leaderBored.visible = false;
  }

  *whenIReceiveLeader() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.leaderBored.push(/* no username */ "");
  }
}
