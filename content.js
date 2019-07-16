var elements = document.getElementsByTagName('*');
function trumpify() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                swap(node);
                /*
                var text = node.nodeValue;
                var replacedText = text.replace(/word/gi, ', believe me.');
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                */
                }
            }
        }
}
function swap (node) {
    node.nodeValue = node.nodeValue
    .replace(/\. |\.\n/g,', believe me. ')
    .replace(/alt right|altright|alt-right|Neo-Nazi|neo|Nazi/g,'good people')
    .replace(/North Korea|Russia/g,'Good Country')
    .replace(/big/g,'bigly')
    .replace(/coffee|coverage/g,'covfefe')
    .replace(/Coffee|coverage/g,'Covfefe')
    .replace(/Obama/g,'"Weak on Immigration" Obama')
    .replace(/undocumented/g,'illegal')
    .replace(/Undocumented/g,'Illegal')
    .replace(/Hillary Clinton|Hillary/g,'Crooked Hillary')
    .replace(/Big/g,'Bigly'); 
    /*
    .replace(/[a-zA-Z]+\./g,', believe me.')
    */
}
window.onload = chrome.storage.sync.get('state',function(data){if (data.state !== 'Off'){trumpify();}});
document.addEventListener('DOMContentLoaded', function() {document.getElementById('toggler').addEventListener('click', toggle());});
//document.getElementById("toggler").addEventListener("click", toggle());
function toggle()
{
    chrome.storage.sync.get('state', function(data) {
        if (data.state === 'On') {
          chrome.storage.sync.set({state: 'Off'});
          chrome.tabs.reload();
          document.getElementById("status").innerHTML = data.state;
          chrome.browserAction.setIcon({path:"favicon_io/android-chrome-512x512_bw.png"},()=>{console.log("Off")});
        } else {
          chrome.storage.sync.set({state: 'On'});
          chrome.tabs.reload();
          document.getElementById("status").innerHTML = data.state;
          chrome.browserAction.setIcon({path:"favicon_io/android-chrome-512x512.png"},()=>{console.log("On")});
        }
      });
}

