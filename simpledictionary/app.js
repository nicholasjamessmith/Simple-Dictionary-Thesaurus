//dictionary API key: 98049eee-4abe-481c-badd-b7699a99aba7

$('#searchBtn').click(function () {
  let query = $('#query').val();

  //makes the API call using jQuery Ajax request
  $.ajax(`https://dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=98049eee-4abe-481c-badd-b7699a99aba7`)
    .then((data) => {
      //intial console log in order to see the data in the browser console
      console.log(data)
      //console logs for specific data within the API dataset
      console.log(data[0].hwi.hw, data[0].fl, data[0].shortdef)
      //returns requested data content in HTML form, in this case a word
      $('#word').html(data[0].hwi.hw)
      //returns part of speach in HTML form
      $('#pos').html(data[0].fl)
      //returns the short definition in HTML form
      $('#def').html(data[0].shortdef)
    })

})











//let word = "cat"
//$.ajax(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=98049eee-4abe-481c-badd-b7699a99aba7`)
//  .then((data) => {
//    //console.log(data)
//    //console.log(data[0])
//    //console.log(data[0].fl)
//    //console.log(data[0].shortdef)
//    //build HTML with jQuery within this .then
//    const displayResults = (word) => {
//      const result = document.createElement("div")
//      result.classList.add("result")
//      result.innerHTML = `<h2>${word}</h2>`
//      const container = document.querySelector(".output")
//      container.append(result)
//    }
//    displayResults(data[0].hwi.hw)
//    displayResults(data[0].fl)
//    displayResults(data[0].shortdef)
//  })