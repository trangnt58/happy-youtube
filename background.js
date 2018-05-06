function openYoutubeVideo(data) {
  var page = chrome.extension.getBackgroundPage();
  var linkUrl = data.linkUrl;
  var id = linkUrl.match(/watch\?v=[^&]+/)[0].replace('watch?v=', '');
  var newURL = "https://www.youtube-nocookie.com/embed/"+id;
  chrome.tabs.create({ url: newURL });
}

chrome.contextMenus.create({
 title: "Hack Youtube",
 contexts: ["link"],
 onclick: openYoutubeVideo
});

