// Methode pour prendre une photo
function getPhoto(){
    var option = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation:true,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 400,
        targetHeight: 400
    };

    navigator.camera.getPicture(onSuccess, onFail, option);
}
   
// Methode de retour quand la photo a été un succes
function onSuccess(imageURI) {
    document.getElementById("moodImage").src = imageURI;
    //document.getElementById("testImage").files = imageURI;
}

// Methode de retour quand la photo n'a pas pu être faite
function onFail(message) {
    alert('Failed because: ' + message);
}
