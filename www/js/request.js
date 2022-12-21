// Methode qui va faire appel a l'api pour récupérer l'humeur d'une personne selon une image donné en post
async function getData(image) {
  const data = new FormData();
  data.append("image_input", dataURLtoFile(image, "image.jpeg"));

  const options = {
    method: "POST",
    headers: {
      "X-RapidAPI-Key": "ea58db9b6fmsh3e47da843100169p1ecea7jsn326582c65784",
      "X-RapidAPI-Host": "face-detection-and-analysis.p.rapidapi.com",
    },
    body: data,
  };

  let url = await fetch(
    "https://face-detection-and-analysis.p.rapidapi.com/face_analysis",
    options
  );
  // Récupération des données
  let result = await url.text();
  result = JSON.parse(result);
  let emotion = result["analysis_result"][0]["emotion"]; 
  // Envoi des données pour faire la détéction
  moodSelector(emotion);
}

// Methode qui converti le data_url fourni par la photo en jpeg
function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type:mime});
}
