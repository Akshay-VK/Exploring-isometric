var canvas = document.getElementById('can');
const width = canvas.clientWidth;
const height = canvas.clientHeight
var ctx = can.getContext('2d');
let off=100;

function draw(){
  ctx.fillStyle="black";
  ctx.fillRect(0,0,width,height);
  ctx.save();
  ctx.translate(0,height/8);
  for(let i = 0; i < 300; i+=10){
    for(let j = 0; j < 300; j+=10){
      let [a,b]=[i-150,j-150];
      let z = Math.sin(Math.sqrt(a*a+b*b)/25.0+off)*50;
      
      let [x,y]=transform(i,j,z,width);
      let [x1,y1]=transform(i+10,j,z,width);
      let [x2,y2]=transform(i+10,j+10,z,width);
      let [x3,y3]=transform(i,j+10,z,width);
      
      //ctx.fillStyle=`rgb(255,0,255)`;
      //ctx.fillStyle=`#d1d1d1`;
      ctx.fillStyle=`#5daec9`;
      //ctx.fillRect(x,y+100,2,2);
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x1,y1);
      ctx.lineTo(x2,y2);
      ctx.lineTo(x3,y3);
      ctx.fill();

      //ctx.fillStyle=`rgb(0,255,0)`;#534987
      //ctx.fillStyle=`#999999`;
      ctx.fillStyle=`#4a4373`;
      //ctx.fillRect(x,y+100,2,2);
      ctx.beginPath();
      ctx.moveTo(x3,y3);
      ctx.lineTo(x2,y2);
      ctx.lineTo(x2,y2+10+(z+60)*2);
      ctx.lineTo(x3,y3+10+(z+60)*2);
      ctx.fill();

      //ctx.fillStyle=`rgb(255,0,0)`;
      //ctx.fillStyle=`#303030`;
      ctx.fillStyle=`#fff196`;
      //ctx.fillRect(x,y+100,2,2);
      ctx.beginPath();
      ctx.moveTo(x2,y2);
      ctx.lineTo(x1,y1);
      ctx.lineTo(x1,y1+10+(z+60)*2);
      ctx.lineTo(x2,y2+10+(z+60)*2);
      ctx.fill();
    }
  }
  ctx.restore();
  off=(off-0.05)%100;
  requestAnimationFrame(draw);
}
function transform(x,y,z,w){
  return [x-y+w/2,0.5*(x+y)-z];
}
requestAnimationFrame(draw);
