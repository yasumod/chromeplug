/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var workUrlList = [];
var urlList = [];
var nowUrl = location.href;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // フィックス
    if(request.action == "fix"){
        // フィックスさせてワーク領域を解放
        urlList[request.url] = workUrlList[request.url];
        workUrlList = [];
    }
    // 現状取得
    if(request.action == "now"){
        sendResponse({data: urlList[nowUrl]});
        return;
    }

    // レスポンス返却
    sendResponse({data: urlList[request.url]});
});

// 通信終了時の退避
chrome.webRequest.onCompleted.addListener(
  function delay_onCompleted (details) {
    workUrlList[details.url] = details;
    return;
  },
  { urls: [ "*://*/*" ] },
  [ "responseHeaders" ]
);
chrome.tabs.onUpdated.addListener(function(tabid, inf){
  if (inf.status === 'complete') {
      console.log(inf);
    chrome.pageAction.show(tabid);
    chrome.pageAction.setIcon({tabId:tabid, path:'icon.png'});
  }
});