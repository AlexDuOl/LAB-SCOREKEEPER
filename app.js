var scores = {}; //llevara el registro de los jugadores
console.log(scores);
function creatPlayer(object, name){
  object[name.toLowerCase()] = 0;
  console.log(object);
}
function addPoint(name, points){
  scores[name.toLowerCase()] += points;
  console.log(object);
}
function printAllPoints(){
  var arrayPlayers = Object.keys(scores);
  var resultados = "";
  for(i = 0; i < arrayPlayers.length; i++){
    resultados += arrayPlayers[i] +"; " + scores[arrayPlayers[i]] + ", ";
    if (i == arrayPlayers.length -1 ){//se verifica que estemos en el ultimo index
      resultados += arrayPlayers[i] +"; " + scores[arrayPlayers[i]];
    }else {
      resultados += arrayPlayers[i] +"; " + scores[arrayPlayers[i]] + ", ";
    }
  }
  return resultados;
}

creatPlayer(scores, "Ana");
addPoint("Ana", 20);
creatPlayer(scores, "Silvana");
addPoint("silvana", 50);
console.log(printAllPoints());
