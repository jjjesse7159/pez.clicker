import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PlayBotton from "./PlayBotton/PlayBotton.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import GoToList from "./GoToList/GoToList.js";
import GoBackToNormal from "./GoBackToNormal/GoBackToNormal.js";
import SellCandy from "./SellCandy/SellCandy.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Shhhhh from "./Shhhhh/Shhhhh.js";
import LeaderBored from "./LeaderBored/LeaderBored.js";
import Sprite4 from "./Sprite4/Sprite4.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  PlayBotton: new PlayBotton({
    x: -6,
    y: 41,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: 9,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  GoToList: new GoToList({
    x: 382,
    y: 177,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  GoBackToNormal: new GoBackToNormal({
    x: 322,
    y: 192,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  SellCandy: new SellCandy({
    x: 83,
    y: -46,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Sprite2: new Sprite2({
    x: 184,
    y: 172,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Sprite3: new Sprite3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Shhhhh: new Shhhhh({
    x: -169,
    y: -171,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  LeaderBored: new LeaderBored({
    x: 280,
    y: 142,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Sprite4: new Sprite4({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
