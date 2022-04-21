status = "";
game_status = "";
function preload() {

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

  video = createCapture(VIDEO);
  video.size(800,400);

  video.parent('game_console');

  poseNet = ml5.poseNet(modelLoaded);
  pose.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('MODEL LOADED');
}

function draw() {
	if(game_staus == "start"
}


function gotPoses(results){
  if(results.length>0)
    {
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
    }

    function startGame()
    {
      GameStatus = "start";
      document.getElementById("status").innerHTML + "game is loading";
    }
