/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//メッセージリスナー
console.log("regist listern");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    alert(request.url);
     var response = {data: "ツェペリの魂！！"};
    sendResponse(response);
});