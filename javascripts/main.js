"use strict";

const $ulMessages = $("#ulMessages");
const $txtInput = $("#txtInput");
const $btnClear = $("#btnClear");
const $btnLargeText = $("#btnLargeText");
const $btnColor = $("#btnColor");
const $bgPicker = $("#bgPicker");
const $txtPicker = $("#txtPicker");
const $footerMain = $("#footerMain");
const $userName = $("#userName");
let $editMessage;
let editToggle = false;

function initMsg(arrayOfMsgs){
  for(let i = 0; i < arrayOfMsgs.length; i++){
    Cathy.writeMsgArray(arrayOfMsgs[i]);
    Cathy.writeMsgDOM($ulMessages, arrayOfMsgs[i], (Cathy.getMsgArray().length - 1));
  }
  $('.btnDelete').click(function(){
    if ($(this).html() === 'Delete'){
      Cathy.removeMsg($(this).closest('li'));
      $("#counter").html('Number of Messages: ' + Cathy.getMsgArray().length);
    } 
  });  

  $('.btnEdit').click(function () {
    if ($(this).html() === "Edit"){
      editToggle = true;
      $txtInput.focus();
      $txtInput.val('');
      $editMessage = $(this).closest('li').children('msgFinder');
      //editMessage = event.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling;
    }
  });
}

function writeMsgNow(event){
  if (!editToggle){
    if (event.which === 13){
      if($txtInput.val() === ''){
        alert("Type Something....");
      } else {
      let indexNum = Cathy.getMsgArray().length;
      let $user = $userName.val();
      if($user === ''){$user = 'Guest';}
      let $msgObject = $({
        "user": $user,
        "timestamp": new Date(Date.now()),
        "message": $txtInput.val()});
      Cathy.writeMsgArray($msgObject[0]);
      Cathy.writeMsgDOM($ulMessages, $msgObject[0], indexNum);
      $txtInput.val('');
      }
    }
  } else {
    if (event.which === 13){
      if($txtInput.val() === ''){
        alert("Type Something....");
      } else {
        $editMessage.html($txtInput.val());
        editToggle = false;
        $txtInput.val('');
      }
    }
  }
}

$txtInput.keyup(function(event){
  writeMsgNow(event);
});

$userName.keyup(function(event){
  writeMsgNow(event);
});

$btnClear.click(function () {
  $btnClear.attr('disabled', 'true');
  $ulMessages.html('');
  $footerMain.html('<span class="pull-left">&copy; gitHeadz 2016.</span><span class="pull-right" id="counter">No Messages</span>');
  Cathy.clearMsgArray();
});

$btnLargeText.click(function(){
  $("body").toggleClass("embiggin");
  $("input").toggleClass("btn-embiggin");
});

$btnColor.click(function(){
  $("#myModal .modal-content, #messages, #ulmessages, button, li").attr({style: "color: " + $('#txtPicker').val() + "; background: " + $('#bgPicker').val()});
  $("#navMain, #footerMain").attr({style: "color: " + $('#bgPicker').val() + "; background: " + $('#txtPicker').val()});
  $("body").attr({style: "background-color: " + $('#txtPicker').val()});
});

$.each(["data/message1.json", "data/message2.json", "data/message3.json", "data/message4.json", "data/message5.json"], function (index, value) {
  Cathy.loadMessage(value, initMsg);
});

