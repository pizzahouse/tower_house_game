var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif"
var tower_btn_Img = document.createElement("img");
tower_btn_Img.src = "images/tower-btn.png"
var towerImg = document.createElement("img");
towerImg.src = "images/tower.png"
function draw(){
  //將背景圖片畫在canvus上的(0,0)位置
  ctx.drawImage(bgImg,0,0);
  //
  ctx.drawImage(slimeImg,slime.x,slime.y);
  //建造塔放右下角
  ctx.drawImage(tower_btn_Img,640-64,480-64,64,64);
  //
  
  }
//等待16毫秒再執行draw函式(重複畫)
setInterval(draw,16);
var slime = {
  x:0,
  y:0
};
//
$("#game-canvas").on("mousemove",function(event){
  console.log("x:" + event.offsetX + "y:" + event.offsetY);
});












