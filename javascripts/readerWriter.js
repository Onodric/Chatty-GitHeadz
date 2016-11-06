"use strict";
var Cathy = (function (oldCathy) {
  let msgArray = [];

  oldCathy.getMsgArray = function(){
    return msgArray;
  };

  oldCathy.writeMsgArray = function(msgObject){
    msgArray.push(msgObject);
  };
  
  oldCathy.writeMsgDOM = function(elementID, msgObject, idCounter){
    let userName = msgObject.user.split(" ");
    let initials = '';
    let firstName = userName[0];
    let lastName = userName[userName.length - 1];

    if (firstName === lastName){
      initials = firstName.toUpperCase().slice(0, 1);
    } else {
      firstName = firstName.slice(0, 1);
      lastName = lastName.slice(0, 1);
      initials = (firstName + lastName).toUpperCase();
    }

// Indented to improve readability

    let $newMsg = $("<li>", {
      id: idCounter,
      class: "right clearfix",
      style: "color: " + $('#txtPicker').val() + "; background: " + $('#bgPicker').val()
    });
    $newMsg.appendTo(elementID);
      let $newAvatar = $("<span>", {
        class: "chat-img pull-left"
      });
      $newAvatar.appendTo($newMsg);
        let $newIcon = $("<img>", {
          src: "http://placehold.it/50/008844/fff&text=" + initials,
          alt: "User Initials Avatar",
          class: "img-circle"
        });
        $newIcon.appendTo($newAvatar);
      let $newEditSpan = $("<span>", {
        class: "chat-img pull-right"
      });
      $newEditSpan.appendTo($newMsg);
        let $newBtnEdit = $("<button>", {
          class: 'btn btn-default btnEdit',
          type: 'button',
          style: "color: " + $('#txtPicker').val() + "; background: " + $('#bgPicker').val()      
        });
        $newBtnEdit.html("Edit");
        $newBtnEdit.appendTo($newEditSpan);
      let $newDeleSpan = $("<span>", {class: "chat-img pull-right"});
      $newDeleSpan.appendTo($newMsg);
        let $newBtnDele = $("<button>", {
          class: 'btn btn-default btnDelete',
          type: 'button',
          style: "color: " + $('#txtPicker').val() + "; background: " + $('#bgPicker').val()      
        });
        $newBtnDele.html("Delete");
        $newBtnDele.appendTo($newDeleSpan);
      let $newMsgBlock = $("<div>", {class: "chat-body clearfix"});
      $newMsgBlock.appendTo($newMsg);
        let $newBlockHeader = $("<div>", {class: "header"});
        $newBlockHeader.appendTo($newMsgBlock);
          let $newSmallTime = $("<small>");
          $newSmallTime.appendTo($newBlockHeader);
            let $newTimeIcon = $("<span>", {class: "glyphicon glyphicon-time"});
            $newTimeIcon.appendTo($newSmallTime);
          $newSmallTime.append(msgObject.timestamp);
        let $newUser = $("<p>", {class: "pull-right primary-font"});
        $newUser.html(msgObject.user);
        $newUser.appendTo($newBlockHeader);
      let $newMsgTxt = $("<strong>", {class: "msgFinder"});
      $newMsgTxt.html(msgObject.message);
      $newMsgTxt.appendTo($newMsgBlock);

    $btnClear.removeAttr('disabled');

    if (idCounter === 19) {
console.log("im sending to delete: ", elementID.children(':first-child'));
      Cathy.removeMsg(elementID.children(':first-child'));
    }
    $("#counter").html('Number of Messages: ' + (Cathy.getMsgArray().length));
  };

  oldCathy.removeMsgArray = function(index){
    msgArray.splice(index, 1);
  };

  oldCathy.clearMsgArray = function(){
    msgArray = [];
  };

  return oldCathy;

})(Cathy || {});
