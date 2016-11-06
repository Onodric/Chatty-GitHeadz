"use strict";
var Cathy = (function (oldCathy) {

  oldCathy.loadMessage = function (msgJson, callbackFn) {
    $.ajax({
      url: `${msgJson}`,
      type: 'GET',
      dataType: 'json',
    })
    .done(function( data ) {
      callbackFn(data.messages);
    })
    .fail(function() {
      alert("error");
    })
    .always(function() {
      console.log("complete");
    });
  };

  return oldCathy;

})(Cathy || {});
