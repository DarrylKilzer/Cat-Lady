function CatController() {
  // PRIVATE PARTS
  var catService = new CatService()

  function drawCats() {
    var listOfCats = catService.getCats()
    var template = ""
    for (var i = 0; i < listOfCats.length; i++) {
      var cat = listOfCats[i]
      template += `
    <div> 
      <img id="catPic${cat.id}" src="${cat.imgUrl}" alt="meow">
      <button 
        type="button" 
        id="catButton${cat.id}" 
        onclick="app.controllers.catController.petCat(${cat.id})">
          pet 
      </button>
      <button type="button" onclick="app.controllers.catController.kittyBack(${cat.id})">Kitty! Come back!!!</button>
      <h1 id="petCount${cat.id}">${cat.petCount}</h1>
      <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
    </div>
    `
    }
    document.getElementById("cat-list").innerHTML = template
  }

  // PUBLIC PARTS (AKA USER INTERACTION)
  this.kittyBack = function kittyBack(catId) {
    var petCount = document.getElementById("petCount" + catId) //creating an alias!
    var catStatus = document.getElementById("catStatus" + catId)
    var catButton = document.getElementById("catButton" + catId)
    var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html
    var targetCat = catService.getCatById(catId)
    targetCat.petCount = 0
    petCount.innerHTML = targetCat.petCount
    catButton.disabled = false
    catStatus.innerHTML = targetCat.happyStatus
    catPic.src = targetCat.imgUrl
  }

  this.petCat = function petCat(catId) {
    // what belongs to the service?
    var targetCat = catService.getCatById(catId)

    var petCount = document.getElementById("petCount" + catId) //creating an alias!
    var catStatus = document.getElementById("catStatus" + catId)
    var catButton = document.getElementById("catButton" + catId)
    var catPic = document.getElementById("catPic" + catId) //doc.stuff ref to html

    targetCat.petCount++
    petCount.innerHTML = targetCat.petCount
    if (targetCat.petCount > 5) {
      catStatus.innerHTML = targetCat.grumpyStatus
    }
    if (targetCat.petCount == 9) {
      catStatus.innerHTML = targetCat.feralStatus
    }
    if (targetCat.petCount == 10) {
      catStatus.innerHTML = targetCat.goneStatus
      catButton.disabled = true
      catPic.src = ""
    }
  }

  drawCats()

}