noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/x8HkVG37/ss.png ');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 200, 200);
}

function take_snapshot() {
    save('cow_boy(0)(0)');
}

function modelLoaded() {
    console.log('posenet is initialised');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.leftEar.x -150;
        noseY = results[0].pose.leftEar.y -200;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}