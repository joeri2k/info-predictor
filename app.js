const api_url = "https://dog.ceo/api/breeds/image/random";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  const data = await response.json();
  document.getElementById("dog-img").src = data.message;
}
// Calling that async function
getapi(api_url);

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
//   document.getElementById("prediction").innerHTML = tab;
// }
