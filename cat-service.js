function CatService() {
  // PRIVATE PARTS
  var cats = [{
    id: 247,
    name: "Mr. Fluffy",
    imgUrl: "https://acm202.files.wordpress.com/2016/09/cats-politics-tn.jpg",
    happyStatus: "Purrrrrr",
    grumpyStatus: "rawrrrrr",
    feralStatus: "hhhissssss!!",
    goneStatus: "Mr Fluffy has left for his meeting",
    petCount: 0
  }, {
    id: 1,
    name: "Whiskers",
    imgUrl: "https://unsplash.it/200/200",
    happyStatus: "meow?",
    grumpyStatus: "Grrrrrrrrrrrrrrrrrrrrrrrrr",
    feralStatus: "bark",
    goneStatus: "Whiskers is in prison for murder I hope you are happy",
    petCount: 0
  }]

  // PUBLIC PARTS
  this.getCatById = function getCatById(catId) {
    for (var i = 0; i < cats.length; i++) {
      var cat = cats[i];
      if (cat.id == catId) {
        return cat
      }
    }
  }

  this.getCats = function getCats(){
    return cats.slice(0, cats.length)
  }
  
}