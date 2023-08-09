function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TRpXI6U3D/model.jason',modelLoaded);
}


function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotResult);
}

var previous_result = '';

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}