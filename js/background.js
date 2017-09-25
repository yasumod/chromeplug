/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
alert("test");
var i = 0;
chrome.webRequest.onCompleted.addListener(
  function delay_onCompleted (details) {
      if(i>0){
          return;
      }
      alert(details.url);
      i++;
    console.log("onComplete");
    return;
  },
  { urls: [ "*://*/*" ] },
  [ "responseHeaders" ]
);