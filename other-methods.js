const dog_url = "https://dog.ceo/api/breeds/image/random";

function GetApi(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.message);
      document.getElementById("dog-img").src = data.message;
    })
    .catch((error) => {
      console.log(error);
    });
}

GetApi(dog_url);
