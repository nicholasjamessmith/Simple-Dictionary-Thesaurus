//$.ajax("https://dummydata.netlify.app/mariones.json")
//.then((response) => {
//  console.log(response)
//  console.log(response.nes_games)
//  const games = response.nes_games
//  const div = $("#mario")
//  for (game of games) {
//    const newDiv = $("<div>").addClass("game")
//    newDiv.html(`
//          <h1>${game.name}</h1>
//          <img src=${game.img} alt=${game.name}>
//      `)
//    div.append(newDiv)
//  }
//})

//dictionary API key: 98049eee-4abe-481c-badd-b7699a99aba7

//thesaurus API key: 1edeaf7e-97b8-4aed-9093-2bf5381d0295

//Dictionary
//When logged, this API call displays the data for the word 'diet' in the console. I can edit the link and type in a different word and get a different result, but how would I use this link/API key to create a search feature, and would that be the simplest solution to create a a search/input feature.
let word = "dog"
$.ajax(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=98049eee-4abe-481c-badd-b7699a99aba7`)
  .then((data) => {
    console.log(data)
    //build HTML with jQuery within this .then
  })

//Thesaurus
//$.ajax("https://dictionaryapi.com/api/v3/references/thesaurus/json/diet?key=1edeaf7e-97b8-4aed-9093-2bf5381d0295")
//  .then((data) => {
//    console.log(data)
//  })


//// This function grabs the definition of a word in JSON format.
  //function grab_json_definition ($word, $ref, $key) {
  //$uri = "https://dictionaryapi.com/api/v3/references/" . urlencode($ref) . "/json/" . urlencode($word) . "?key=" . urlencode($key);

  //return file_get_contents($uri);
  //};

  //$jdef = grab_json_definition("test", "collegiate", "98049eee-4abe-481c-badd-b7699a99aba7");
