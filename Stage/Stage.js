/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blue Sky 2 ", "./Stage/costumes/Blue Sky 2 .svg", {
        x: 240,
        y: 180
      }),
      new Costume("list", "./Stage/costumes/list.svg", { x: 290.75, y: 224.75 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "play has been pressed" },
        this.whenIReceivePlayHasBeenPressed
      ),
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "list so move out" },
        this.whenIReceiveListSoMoveOut2
      )
    ];

    this.vars.pezCandy = 0;
    this.vars.ForLeader = 218;
    this.vars.pezDispensers = [];
    this.vars.leaderBored = [
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt",
      "jesseprodigyyt"
    ];

    this.watchers.pezCandy = new Watcher({
      label: "pez candy",
      style: "normal",
      visible: true,
      value: () => this.vars.pezCandy,
      x: 245,
      y: 175
    });
    this.watchers.pezDispensers = new Watcher({
      label: "pez dispensers",
      style: "normal",
      visible: false,
      value: () => this.vars.pezDispensers,
      x: 245,
      y: 149,
      width: null,
      height: null
    });
    this.watchers.leaderBored = new Watcher({
      label: "leader bored",
      style: "normal",
      visible: true,
      value: () => this.vars.leaderBored,
      x: 243,
      y: 22,
      width: null,
      height: null
    });
  }

  *whenIReceivePlayHasBeenPressed() {
    this.costume = "Blue Sky 2 ";
  }

  *whenIReceiveListPressed() {
    this.costume = "list";
  }

  *whenIReceiveListSoMoveOut() {
    this.costume = "Blue Sky 2 ";
  }

  *whenIReceiveListSoMoveOut2() {
    this.costume = "Blue Sky 2 ";
  }
}
