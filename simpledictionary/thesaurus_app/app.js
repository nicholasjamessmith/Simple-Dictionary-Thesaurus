//API Call using the fetch method
$('#searchBtn').click(function () {
  let query = $('#query').val()
  const thesaurusKey = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${query}?key=1edeaf7e-97b8-4aed-9093-2bf5381d0295`

  fetch(thesaurusKey)
    .then(dataResponse => dataResponse.json())
    .then(data => {
      //Add a space at index[0] of each array item, then toString()
      // Spit -> Join
      //const newData = data[0].meta.syns;
      //for (let n = 0; n <= newData.length; n++) {
      //  console.log(newData[n].join(", "))
      //};
      //console.log(newData)
      //console.log(newData.join(", "))
      //console.log(newData.toString())
      //console.log(newData)

      //console.log(newData[0])
      //console.log(data[0].meta.syns)
      $('#word').html(data[0].hwi.hw);
      for (let i = 0; i <= data.length; i++) {
        $('#syns').html(data[0].meta.syns);
        //$('#syns').html(data[i].meta.syns)
        //console.log(data[i].meta.syns);
        //for (let j = 0; i <= data[j].length; i++) {
        //  console.log(data[j])
      };
      //console.log(data[i].meta.syns)
      //}
      //console.log(data[i]);
    })
  //.catch(error => console.error("Error:", error))
})

//Response is an array of objects
//I want to display a list of each word returned (map or for loop)