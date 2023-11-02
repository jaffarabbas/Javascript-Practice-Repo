const menu = [
    {
        id: 0,
        name: 'index',
        url: 'index.html'
    },
    {
        id: 1,
        name: 'a1',
        url: 'a1.html'
    },
    {
        id: 2,
        name: 'a2',
        url: 'a2.html'
    },
    {
        id: 3,
        name: 'm1',
        url: 'modules/m1/src/m1.html'
    }
];

// Define a root-level base URL
const baseUrl = '/dynamic_anchors/';

function generateMenu() {
    let currentLocation = window.location.pathname;
    let menuHTML = '<ul>';
    menu.forEach(item => {
        let relativeUrl = getRelativeUrl(currentLocation, baseUrl + item.url);
        menuHTML += `<li><a href="${relativeUrl}">${item.name}</a></li>`;
    });
    menuHTML += '</ul>';
    document.getElementById('menu').innerHTML = menuHTML;
}

function getRelativeUrl(currentLocation, targetUrl) {
    const currentParts = currentLocation.split('/').filter(part => part !== '');
    const targetParts = targetUrl.split('/').filter(part => part !== '');

    let commonLevels = 0;
    while (commonLevels < currentParts.length && commonLevels < targetParts.length && currentParts[commonLevels] === targetParts[commonLevels]) {
        commonLevels++;
    }

    let relativeUrl = '';

    for (let i = commonLevels; i < currentParts.length - 1; i++) {
        relativeUrl += '../';
    }

    relativeUrl += targetParts.slice(commonLevels).join('/');

    return relativeUrl;
}

generateMenu();
