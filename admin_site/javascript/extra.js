


// Document ready function... es gibt 2 dokumente
// versuche es mit jquery

// this function will be executed twice because there are 2 documents
// the outer document (navigation bar on top and left side on the screen)
// and the inner document, the content
$(document).ready(function () {
    // check if current document is an iframe.. then we know, that we have the inner document
    if (window.location !== window.parent.location) {
        addTitleToCodeTag();
    }
});

// this function adds
function addTitleToCodeTag() {
    var codeElementList = document.getElementsByTagName("CODE");
    for (var i = 0; i < codeElementList.length; i++) {
        var codeEl = codeElementList[i];
        if (typeof codeEl.innerText !== 'undefined') {
            if (codeEl.innerText.includes("etc/")) {
                codeEl.title = "'etc' represents the configuration directory of Opencast. This is often located at '/etc/opencast'.";
            }
        }
    }
}
