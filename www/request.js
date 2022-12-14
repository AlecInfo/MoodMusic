const fileInput = document.getElementById("testImage");

fileInput.addEventListener("change", (e) => {
  getData();
});

async function getData() {
  const data = new FormData();
  data.append("image_input", fileInput.files[0]);

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
  let result = await url.text();
  result = JSON.parse(result);
  let emotion = result["analysis_result"][0]["emotion"]; 
  moodSelector(emotion);
}
