let theme

function update() {
    if (document.getElementsByClassName('css-175oi2r r-1xfd6ze r-d045u9 r-13awgt0').length > 0) {// Check if user is in game
        updateTheme();
        initBoxChanges();
        setBackground();
        setChatBox();
        setDayMessages();
        setRoundButtons();

    }
}

function initBoxChanges() { // Change time box and roles box
    let divs = document.getElementsByClassName('css-175oi2r r-1xfd6ze r-d045u9 r-13awgt0');
    for (const div of divs) {
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
        div.style.borderColor = 'rgba(0, 0, 0, 0.1)';
    }
}

function setBackground() {
    let div = document.getElementsByClassName('css-175oi2r r-1niwhzg r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-1mrlafo r-17leim2')[0];
    div.style.filter = '';
    div.style.backgroundSize = '';
    div.style.backgroundImage = theme;
    div.parentNode.style.opacity = '0.5';
}

function setChatBox() {
    if (document.getElementsByClassName('css-175oi2r r-1awozwy r-18u37iz r-195d4m8 r-edyy15 r-c97pre r-105ug2t').length > 0) { // Input
        let div = document.getElementsByClassName('css-175oi2r r-1awozwy r-18u37iz r-195d4m8 r-edyy15 r-c97pre r-105ug2t')[document.getElementsByClassName('css-175oi2r r-1awozwy r-18u37iz r-195d4m8 r-edyy15 r-c97pre r-105ug2t').length - 1];
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        div.borderColor = '';
    }
    if (document.getElementsByClassName('css-175oi2r r-lrvibr r-13yce4e r-13awgt0 r-13qz1uu r-1loqt21 r-1otgn73').length > 0) {
        let div = document.getElementsByClassName('css-175oi2r r-lrvibr r-13yce4e r-13awgt0 r-13qz1uu r-1loqt21 r-1otgn73')[0];
        div.style.backgroundColor = '';
        div.style.borderColor = '';
    }
    let chatBoxDivs = document.getElementsByClassName('css-175oi2r r-1xfd6ze r-d045u9 r-13awgt0')[2].childNodes[document.getElementsByClassName('css-175oi2r r-1xfd6ze r-d045u9 r-13awgt0')[2].childNodes.length - 1].childNodes;
    if (chatBoxDivs.length > 1) {
        chatBoxDivs[0].style.opacity = '0';
        document.getElementsByClassName('css-175oi2r r-e8mqni r-13awgt0 r-eqz5dr r-13qz1uu r-136ojw6')[0].style.backgroundColor = '';
    } else {
        chatBoxDivs[0].style.opacity = '';
    }
}

function setDayMessages() {
    let divs = document.getElementsByClassName('css-175oi2r r-z2wwpe r-d045u9 r-1777fci r-5oul0u r-mvpalk r-knv0ih r-1udh08x r-qpntkw r-yongw');
    for (const div of divs) {
        div.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
        div.style.borderColor = 'rgba(0, 0, 0, 0.15)';
    }
}

function setRoundButtons() {
    let divs = document.getElementsByClassName('css-175oi2r r-lrvibr r-1j16mh1 r-1d6rzhh r-sga3zk r-1sbahrg r-7a29px');
    for (const div of divs) {
        div.style.backgroundColor = '';
        div.parentNode.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
}

function updateTheme() {
    chrome.storage.local.get("theme", function(item){
        if (item['theme'] == undefined) {
            chrome.storage.local.set({ "theme": "linear-gradient(to bottom right, #7500FF, #D900FF, #004CFF)" }, function(){  });
            theme = 'linear-gradient(to bottom right, #7500FF, #D900FF, #004CFF))'
        } else {
            theme = item['theme'];
        }
    });
}

if (localStorage.getItem('darkmodePrevent') == undefined) {
    let a = JSON.parse(localStorage.getItem('settings'));
    if (a['darkMode'] != true) {
        localStorage.setItem('darkmodePrevent', 'meow');
        if (confirm('HELLO, it seems like you dont have the darkmode enabled. My wov extension has been made for the darkmode users, the lightmode still work but thats a bit ugly. Click OK if you wanna enable the darkmode or click cancel if u wanna stay in lightmode.')) {
            let b = JSON.parse(localStorage.getItem('settings'));
            b['darkMode'] = true;
            localStorage.setItem('settings', JSON.stringify(b));
            alert('The page is going to be refreshed to apply darkmode.');
            location.reload();
        } else {
            alert('This popup wont harass u again');
        }
    }
}

let t = setInterval(update, 100);