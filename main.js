function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uQcrouNS5/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);

    
}
        Dog = 0;
        Cat = 0;
        Lion = 0;
        Cat = 0;

function gotResults(error, results){
    if(error) {
        console.error(error);
    } else {
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+ (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if(results[0].label == "Barking"){
            image.src = 'Dog.jpeg';
        }
        else if(results[0].label == "Meowing"){
            image.src = 'Cat.jpeg';
        }      
        else if(results[0].label == "Roaring"){
            image.src = 'Lion.jpeg';
        }     
         else {
            image.src = 'Cow.jpeg';
        }
    }

}
