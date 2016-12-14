alert("Hello");

var thing = function(){
};

prompt('saise de texe');
confirm('confirmation');
alert('message d\'alerte');

var questionUnique = function(texte) {
  do {
    var reponse = parseFloat(prompt('Donnez un ' + texte + ' nombre'));
  } while (isNaN(reponse))
  return reponse;
};

var question = function() {
  alert(questionUnique('premier') + questionUnique('second'));
};
