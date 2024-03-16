// pixi.js 5.3.12
import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { debounce } from 'lodash';
import { getRandomNumber } from '@/utils';

class ReceiveCoinCanvasClass {
    pixi: PIXI.Application;

    resize: () => void;

    resizeDebounce: () => void;

    textures: PIXI.Texture[];

    container: PIXI.Container;

    constructor() {
        this.pixi = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            view: document.getElementById('receiveCoinCanvas') as HTMLCanvasElement,
            transparent: true,
            forceCanvas: true
        });

        this.resize = () => {
            this.pixi.renderer.resize(window.innerWidth, window.innerHeight);
        };

        this.resizeDebounce = debounce(() => {
            this.resize();
        }, 200);

        this.textures = [];

        for (let i = 9; i >= 1; i -= 1) {
            this.textures.push(PIXI.Texture.from(`coin_${i}`));
        }

        window.addEventListener('resize', this.resizeDebounce);
        this.container = new PIXI.Container();
        this.pixi.stage.addChild(this.container);
    }

    generator() {
        const { container, textures } = this;
        const style = { startX: 0, startY: 0, easeConfig: 0, endX: 0, endY: 0, speed: 0, rotationSpeed: 0, rotationRange: 0 };
        let { startX, startY, easeConfig, endX, endY, speed, rotationSpeed, rotationRange } = style;
        // pixi.js 5.3.12
        const coin = new PIXI.AnimatedSprite(textures);
        const scaleTarget = window.innerWidth < 992 ? 0.8 : 1;

        startX = getRandomNumber(window.innerWidth * 0.45, window.innerWidth * 0.55);
        startY = window.innerWidth < 992 ? window.innerHeight * 0.35 : window.innerHeight * 0.3;
        easeConfig = getRandomNumber(1, 3);
        speed = getRandomNumber(8, 18) * 0.1;
        rotationSpeed = getRandomNumber(2, 6) * 0.1;
        rotationRange = getRandomNumber(0, 100) - 50;
        endX = getRandomNumber(0, window.innerWidth * 1.6) - window.innerWidth * 0.2;
        endY = window.innerHeight * 1.5;

        coin.anchor.set(0.5);
        coin.position.set(startX, startY);
        coin.animationSpeed = rotationSpeed;
        coin.scale.set(0.1, 0.1);
        coin.rotation = Math.PI / 180 * (getRandomNumber(0, 60) - 30);
        coin.play();

        container.addChild(coin);

        return new Promise((resolve) => {
            gsap.to(coin.scale, { x: scaleTarget, y: scaleTarget, duration: speed });
            gsap.to(coin, { y: endY, ease: `back.in(${easeConfig})`, duration: speed });
            gsap.to(coin, {
                x: endX,
                rotation: Math.PI / 180 * rotationRange,
                onComplete: () => {
                    container.removeChild(coin);
                    resolve(true);
                },
                duration: speed
            });
        });
    }

    play(callback = () => {}) {
        this.resize();
        const promises = [];
        const coinAmount = window.innerWidth < 992 ? 20 : 40;

        for (let i = 0; i < coinAmount; i += 1) {
            promises.push(this.generator());
        }

        if (callback) {
            Promise.all(promises).then(() => {
                callback();
            });
        }
    }
}

export default ReceiveCoinCanvasClass;
export { ReceiveCoinCanvasClass };
