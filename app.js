const api_url = "https://dog.ceo/api/breeds/image/random";

// Defining async function
async function GetApi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  const data = await response.json();
  document.getElementById("dog-img").src = data.message;
}
// Calling that async function
GetApi(api_url);

async function GetAge(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("age").innerHTML = data.age;
}

async function GetGender(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("gender").innerHTML = data.gender;
}

async function GetNationality(url) {
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById(
    "nationality"
  ).innerHTML = `${data.country[0].country_id}/ ${data.country[1].country_id}/ ${data.country[2].country_id}`;
}

function GetName() {
  let input_name = document.getElementById("name").value;
  return input_name;
}

function Predict() {
  var name = GetName();
  document.getElementById("name-display").innerHTML = name;
  var age_url = "https://api.agify.io/?name=" + name;
  GetAge(age_url);
  var gender_url = "https://api.genderize.io/?name=" + name;
  GetGender(gender_url);
  var nationality_url = "https://api.nationalize.io/?name=" + name;
  GetNationality(nationality_url);
}

document.getElementById("predict-button").addEventListener("click", Predict);

// // Function to define innerHTML for HTML table
// function show(data) {
//   let tab = `<tr>
//           <th>Name</th>
//           <th>Office</th>
//           <th>Position</th>
//           <th>Salary</th>
//          </tr>`;

//   // Loop to access all rows
//   for (let r of data.list) {
//     tab += `<tr>
//     <td>${r.name} </td>
//     <td>${r.office}</td>
//     <td>${r.position}</td>
//     <td>${r.salary}</td>
// </tr>`;
//   }
//   // Setting innerHTML as tab variable
//   document.getElementById("").innerHTML = tab;
// }
