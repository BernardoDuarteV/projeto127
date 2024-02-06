music2 = "";
music1 = "";

function preload()
{
    music2 = loadSound("music2.mp3");
    music1 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 500);
}