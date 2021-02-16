
const fetchData = {
  retriveListings(type, limit) {
    return fetch(`https://realtor.p.rapidapi.com/properties/v2/list-for-${type}?city=Boulder&limit=${limit}&offset=0&state_code=CO&sort=relevance`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "afb46f1ebfmshf5a87452ff654c7p116ab6jsna0f25af55c2e",
        "x-rapidapi-host": "realtor.p.rapidapi.com"
      }
    })
      .then(response => response.json())
      .then(data => {
        return data.properties
      })
      .catch(err => {
        console.error(err);
      });
    }
}

export default fetchData
