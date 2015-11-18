var image=document.getElementById('picture'); 
console.log(image);
var Rotation = 0;
        
var turnImage=function() {
    console.log("click registered");
    Rotation = Rotation + 90;
    image.style.transform = 'rotate('+Rotation+'deg)';
    }
        
        
var guess=function() { 
    console.log("second button works");
    if (Rotation % 360 === 0) {
        window.alert("You're right! :)");
    }
    else {
        window.alert("Oops! Try again!");
    }
    }




var url = "http://www.europeana.eu/api/v2/search.json?wskey=hsKupTFqF&query=carl+simon+amerika+building&start=1&rows=24&profile=standard";


var myRequest = new XMLHttpRequest();
//  var query = "carl simon amerika building";
    var method = "GET";
    var url = "http://www.europeana.eu/api/v2/search.json?wskey=hsKupTFqF&query=carl+simon+amerika+building&start=1&rows=24&profile=standard"; 
            
        myRequest.open(method, url);
        myRequest.send();

console.log(document);

var imgArray = [];

var dataParsed;
var i = 0;

//var edmPreview;

myRequest.onreadystatechange = function () {
    //console.log(myRequest.readyState);
    if (myRequest.readyState === 4 ) {
        //console.log(myRequest.responseText);
        var data = myRequest.response;
        dataParsed = JSON.parse(data);
        
        for (i = 0; i < dataParsed.items.length; i++){
            imgArray.push(dataParsed.items[i].edmPreview[0]);
            console.log(dataParsed.items[i].edmPreview[0]);
        }
    }
   
    else {
        console.log("it doesnt work");
        }
    }

var showNextImage = 0;   

    
var nextImage= function() { 
    document.getElementById("picture").src = imgArray[showNextImage];
    console.log("third button works");
    console.log(imgArray[showNextImage]);
    
    if (showNextImage < (imgArray.length - 1)) {
        console.log("true");
    showNextImage = showNextImage + 1; 
    console.log(showNextImage);
    }
    else {
        console.log("false");
        console.log(showNextImage);
        showNextImage = 0;
    }
    document.getElementById('picture');
}    

