const api_url = "https://dog.ceo/api/breeds/image/random";

// ----- async function that fetches a random dog picture --------
async function GetApi(url) {
  // To store response
  const response = await fetch(url);
  // Storing data in form of JSON
  const data = await response.json();
  document.getElementById("dog-img").src = data.message;
}

// ----- Get The name inserted ------
function GetName() {
  let input_name = document.getElementById("name").value;
  return input_name;
}

// ------- Get the Predicted Age --------
async function GetAge(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("age").innerHTML = data.age;
}

// ------- Get the Predicted Gender --------
async function GetGender(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("gender").innerHTML = data.gender;
}

// ------- Get the Predicted Nationality --------
async function GetNationality(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById(
    "nationality"
  ).innerHTML = `${data.country[0].country_id}, ${data.country[1].country_id} and ${data.country[2].country_id}`;
}

// -------- Prediction function on click ---------+
function Predict() {
  var name = GetName();
  var age_url = "https://api.agify.io/?name=" + name;
  var gender_url = "https://api.genderize.io/?name=" + name;
  var nationality_url = "https://api.nationalize.io/?name=" + name;
  document.getElementById("name-display").innerHTML = name;
  GetAge(age_url);
  GetGender(gender_url);
  GetNationality(nationality_url);
}

GetApi(api_url);
document.getElementById("predict-button").addEventListener("click", Predict);
