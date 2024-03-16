import * as PIXI from "pixi.js"; // 导入 pixi.js 库

// 定义 TurnTableCanvas 类
class TurnTableCanvas {
  pixi: PIXI.Application; // 定义 pixi 实例
  constructor() {
    this.pixi = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x1099bb,
    });
  }
}
export default TurnTableCanvas;
