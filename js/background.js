/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var i = 0;
chrome.webRequest.onCompleted.addListener(
  function delay_onCompleted (details) {
    console.log(details);
    chrome.runtime.sendMessage({url: details.url,name: "test"}, function(response) {});
    return;
  },
  { urls: [ "*://*/*" ] },
  [ "responseHeaders" ]
);
