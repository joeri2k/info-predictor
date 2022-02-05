const api_url = "https://dog.ceo/api/breeds/image/random";

function GetName() {
  let input_name = document.getElementById("name").value;
  return input_name;
}

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
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  const data = await response.json();
  document.getElementById("prediction").innerHTML = data.age;
}
function Predict() {
  var name = GetName();
  console.log(name);
  var age_url = "https://api.agify.io/?name=" + name;
  GetAge(age_url);
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
