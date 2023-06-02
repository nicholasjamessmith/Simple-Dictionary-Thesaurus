//click event function for search button, dependent upon query value
$('#searchBtn').click(function () {
  //creates variable 'query' and attributes its value to the value of whatever is typed into the query search bar
  let query = $('#query').val();

  //makes the API call using jQuery Ajax request
  $.ajax(`https://dictionaryapi.com/api/v3/references/collegiate/json/${query}?key=98049eee-4abe-481c-badd-b7699a99aba7`)
    .then((data) => {
      //intial console log in order to see the data in the browser console
      //console.log(data)
      //console logs for specific data within the API dataset
      //console.log(data[0].hwi.hw, data[0].fl, data[0].shortdef)
      //displays requested data content in HTML form, in this case a word
      $('#word').html(data[0].hwi.hw)
      //displays part of speech in HTML format
      $('#pos').html(data[0].fl)
      //displays the short definition in HTML format
      $('#def').html(data[0].shortdef)
    })

})