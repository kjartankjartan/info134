//konstruktøren fungerer, men ikke getNames-metoden, ser på dette mer i påsken
//ressurs hvordan jobbe med JSON: https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript
function befolkning(url, data){
  var datasett;
  var xhr = new XMLHttpRequest();
  xhr.open("GET",url, true );
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      data.datasett = JSON.parse(xhr.responseText);

    }
  };

xhr.send();

}

function Grensesnitt(url) {
  this.url = url;
  this.getNames = function() {
    for(elem in this.datasett.elementer) {
      console.log(elem);
    }
  };

  this.getIDs = function() {
    console.log(datasett);
    for(elem in this.vdatasett.elementer) {
          console.log(datasett[elem].kommunenummer);
    }
  };
  this.load = function() {
    befolkning(this.url, this);
  }

}

var befolkningen = new Grensesnitt("http://wildboy.uib.no/~tpe056/folk/104857.json")



//window.onload = test.load();
