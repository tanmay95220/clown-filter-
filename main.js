nosex=0
nosey=0
function preload(){
    clown_image = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function draw() {
    image(video,0,0,300,300)
    image(clown_image,nosex-15,nosey-15,30,30)
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
}
function modelLoaded() {
    console.log(modelLoaded)
}
function gotposes(result) {
    console.log(result)
    if (result.length>0) {
     nosex=result[0].pose.nose.x
     nosey=result[0].pose.nose.y
    } 
}
function take_snapshot() {
    save("tanmay.png")
}

