function grabLinks() {
    'use strict';
    var links = document.querySelectorAll('a');

    return links;
}

function disableLinks(links) {
    'use strict';
    var i;
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
        });
    }
}

function initialize() {
    'use strict';
    var links = grabLinks();
    disableLinks(links);
}

initialize();
