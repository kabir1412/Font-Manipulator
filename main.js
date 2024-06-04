leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(500, 500);
canvas.position(850, 150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
console.log('Posenet is initialized.')
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("Left wrist x is " + leftWristX + "Right wrist x is " + rightWristX + "Difference is " + difference);
}
}


function draw(){
background('pink');
fill("aqua");
stroke("black");
textSize(difference);
text("Kabir",150, 250);
}