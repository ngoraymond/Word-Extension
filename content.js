var elements = document.getElementsByTagName('*');
var trumpOn = true;
function trumpify() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (trumpOn == true && node.nodeType === 3) {
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
    .replace(/coffee/g,'covfefe')
    .replace(/Coffee/g,'Covfefe')
    .replace(/Obama/g,'"Weak on Immigration" Obama')
    .replace(/undocumented/g,'illegal')
    .replace(/Undocumented/g,'Illegal')
    .replace(/Big/g,'Bigly'); 
    /*
    .replace(/[a-zA-Z]+\./g,', believe me.')
    .replace(/Nazi |Nazism|Nazis|National Socialism|National Socialist/g,'anti Antifa ')
    .replace(/Nazi Germany/g,'Good Country')
    */
}
window.onload = trumpify();
document.addEventListener('DOMContentLoaded', function() {document.getElementById('toggler').addEventListener('click', toggle());});
function toggle()
{
    trumpOn = !trumpOn;
}