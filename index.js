let link = "https://api.sampleapis.com/coffee/hot";

fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
