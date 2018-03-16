var aereiDescr = {
                    "numAereo" : ["AZ890", "LO452", "PP326" , "XD987"],
                    "lat" : [19.890, 18.980, 16.120 , 17.115],
                    "long" : [11.250, 17.555, 13.986, 18.464],
                    "carbu" : [10, 1200, 1100, 1150],
                    "km1kg" : [10, 150, 125, 200]
                  };
var listaAeroporti ={
                      "nomeAeroporto" : ["Pisa", "Bergen", "Madrid"],
                      "lat" : [18.890, 17.222, 15.325],
                      "long" : [20.365, 14.356, 16.458]
                    }

//Determino la lunghezza degli array contenuti negli oggetti
var lengthOfLatAereiDescr = Object.keys(aereiDescr.lat).length;
var lengthOfLatAereoporti = Object.keys(listaAeroporti.lat).length;
var distanza = []; //creo un array per contenere le distanze degli aerei

//adesso creo un ciclo for per calcolare la distanza che ogni aereo ha rispetto ad ogni aeroporto
for (var i = 0; i < lengthOfLatAereiDescr; i++) {
  for (var x = 0; x < lengthOfLatAereoporti; x++) {
    distanza = distance(aereiDescr.lat[i], aereiDescr.long[i], listaAeroporti.lat[x], listaAeroporti.long[x]);
    if(distanza > (aereiDescr.carbu[i] * aereiDescr.km1kg[i])){
      alert("L'aereo " + aereiDescr.numAereo[i] + " non arriverà a: " + listaAeroporti.nomeAeroporto[x] + " non ha abbastanza carburante! Morirete tutti!!!");
    }
    else{
      alert("Il carburante dell'aereo: " + aereiDescr.numAereo[i] + " è più che sufficiente! Dormite tranquilli")
    }
  }
}

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
