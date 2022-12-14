function getPhoto(){
    alert("photo");

    var option = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation:true,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 200,
        targetHeight: 350
    };

    navigator.camera.getPicture(onSuccess, onFail, option);
}
    
function onSuccess(imageURI) {
    alert("success");
    document.getElementById("testImage").src = imageURI;
    document.getElementById("testImage").files = imageURI;
}

function onFail(message) {
    alert('Failed because: ' + message);
}