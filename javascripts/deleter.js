"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.removeMsg = function(myElement){
    Cathy.removeMsgArray(parseInt(myElement.id));
    myElement.remove();

    var tempArray = $('#ulMessages li');
    for (let i = parseInt(myElement.id); i < tempArray.length; i++){
      tempArray[i].setAttribute("id", i);
    }
  };

  return oldCathy;

})(Cathy || {});


