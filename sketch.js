let button1, button2, button3, button4;
let sprite9, sprite12, spriteAction3, spriteAction4;
let currentSprite = null;
let frameIndex = 0;
let frameDelay = 10; // 控制動畫速度
let frameCounter = 0;
let iframe; // 用於嵌入 iframe

function preload() {
  sprite9 = loadImage('9.png'); // 載入圖片精靈9.png
  sprite12 = loadImage('動作1.png'); //  載入圖片精靈動作1.png
  spriteAction3 = loadImage('動作3.png'); // 載入圖片精靈動作三.png
  spriteAction4 = loadImage('動作四.png'); // 載入圖片精靈動作四.png
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 建立第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mouseOver(() => currentSprite = { sprite: sprite9, frames: 9, width: 96, height: 105 });
  button1.mouseOut(() => currentSprite = null);
  button1.mousePressed(() => showIframe('https://stella0808.github.io/20250317/')); // 按下按鈕顯示 iframe

  // 建立第二個按鈕
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mouseOver(() => currentSprite = { sprite: sprite12, frames: 9, width: 104, height: 108 });
  button2.mouseOut(() => currentSprite = null);
  button2.mousePressed(() => showIframe('https://stella0808.github.io/20250310/')); // 按下按鈕顯示 iframe

  // 建立第三個按鈕
  button3 = createButton('筆記說明');
  button3.position(310, 50);
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.mouseOver(() => currentSprite = { sprite: spriteAction3, frames: 9, width: 83, height: 114 });
  button3.mouseOut(() => currentSprite = null);
  button3.mousePressed(() => showIframe('https://hackmd.io/@PMQvdaUjQhiyuBOw7P0pgQ/HkXHalH3ye')); // 按下按鈕顯示 iframe

  // 建立第四個按鈕
  button4 = createButton('測驗題');
  button4.position(440, 50);
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.mouseOver(() => currentSprite = { sprite: spriteAction4, frames: 9, width: 104, height: 112 });
  button4.mouseOut(() => currentSprite = null);
  button4.mousePressed(() => showIframe('https://stella0808.github.io/20250310/')); // 按下按鈕顯示 iframe
}

function draw() {
  background(220);

  // 如果有當前的圖片精靈，顯示動畫
  if (currentSprite) {
    frameCounter++;
    if (frameCounter >= frameDelay) {
      frameCounter = 0;
      frameIndex = (frameIndex + 1) % currentSprite.frames; // 循環播放動畫
    }

    let sx = frameIndex * currentSprite.width; // 計算切割的x位置
    image(
      currentSprite.sprite,
      50, 180, // 顯示位置
      currentSprite.width, currentSprite.height, // 顯示大小
      sx, 0, // 圖片來源的x, y
      currentSprite.width, currentSprite.height // 圖片來源的寬高
    );
  }
}

// 顯示 iframe 的函數
function showIframe(url) {
  // 如果已經有 iframe，先移除
  if (iframe) {
    iframe.remove();
  }

  // 建立新的 iframe
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.position(windowWidth * 0.1, windowHeight * 0.2); // 顯示在視窗中間
  iframe.size(windowWidth * 0.8, windowHeight * 0.7); // 寬為視窗的 80%，高為視窗的 60%
}
