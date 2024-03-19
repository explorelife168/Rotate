import * as PIXI from "pixi.js";

class TurnTableCanvas {
  pixi: PIXI.Application;
  sprites: PIXI.Sprite;
  // textures: PIXI.Texture;

  constructor() {
    this.pixi = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      view: document.getElementById(
        "turntableCenterCanvas"
      ) as HTMLCanvasElement,

      transparent: true,
      forceCanvas: true,
    });

    const textures = PIXI.Texture.from(
      `${require("@/assets/turntable_center.png")}`
    );

    // Update the path to the correct location of the image file
    this.sprites = new PIXI.Sprite(textures); //創建精靈
    this.sprites.anchor.set(0.5); // 设置锚点在精灵对象的中心
    this.sprites.x = this.pixi.renderer.width / 2.06;
    this.sprites.y = this.pixi.renderer.height / 2.07;
    this.sprites.scale.set(1.05);
    this.pixi.stage.addChild(this.sprites); //添加精靈到舞台
  }
  // play() {
  //   this.pixi.ticker.add(() => {
  //     this.sprites.rotation += 0.05; // 每一帧旋转的角度
  //   });
  // }
}
export default TurnTableCanvas;
export { TurnTableCanvas };
