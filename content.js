var anchors = document.getElementsByTagName("a");
for (var i = 0; i < anchors.length; i++) {
  if (anchors[i].href.match(/watch\?v=[^&]+/)) {
    anchors[i].href = anchors[i].href.replace(/youtube\.com\/watch\?v=/, 'youtube-nocookie.com/embed/');
    anchors[i].setAttribute("target", "_blank");
  }
}