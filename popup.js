
function setup() {
    chrome.storage.local.get("theme", function (item) {
        let css = item['theme'];
        if (css == undefined) {
            chrome.storage.local.set({ "theme": "linear-gradient(to bottom right, #7500FF, #D900FF, #004CFF)" }, function () { });
            css = 'linear-gradient(to bottom right, #7500FF, #D900FF, #004CFF)'
        }
        let lst = []
        for (let index = 0; index < css.length; index++) {
            if (css[index] == '#') {
                let str = css.slice(index + 1, index + 7);
                lst.push(str);
            }
        }
        let button = document.createElement('button');
        button.textContent = 'Remove';
        button.onclick = function () {
            if (document.getElementsByClassName('colorInput').length != 2) {
                document.getElementsByClassName('colorInput')[document.getElementsByClassName('colorInput').length - 1].remove();
            }
        }
        let button2 = document.createElement('button');
        button2.textContent = 'Add';
        button2.onclick = function () {
            if (document.getElementsByClassName('colorInput').length != 7) {
                let input = document.createElement('input');
                input.className = 'colorInput';
                input.value = '000000';
                input.maxLength = '6';
                input.pattern = '[0-9A-Fa-f]+$'
                input.type = 'text';
                document.getElementById('input').appendChild(input)
            }
        }
        document.getElementById('buttons').appendChild(button)
        document.getElementById('buttons').appendChild(button2)
        for (const element of lst) {
            let input = document.createElement('input');
            input.className = 'colorInput';
            input.value = element;
            input.maxLength = '6';
            input.pattern = '[0-9A-Fa-f]+$'
            input.type = 'text';
            document.getElementById('input').appendChild(input)
        }
        let saveButton = document.createElement('button');
        saveButton.className = 'saveButton';
        saveButton.onclick = function () {
            chrome.storage.local.set({ "theme": returnNewCssStr() }, function(){  });
            window.close();
        }
        saveButton.textContent = 'Save'
        document.querySelector('body').appendChild(saveButton)
        let resetButton = document.createElement('button');
        resetButton.onclick = function () {
            chrome.storage.local.set({ "theme": "linear-gradient(to bottom right, #7500FF, #D900FF, #004CFF)" }, function(){  });
            window.close();
        }
        resetButton.textContent = 'Set default theme (purple-pink-blue)'
        document.querySelector('body').appendChild(resetButton);
    });
}

function returnNewCssStr() {
    let colors = document.getElementsByClassName('colorInput');
    let str = 'linear-gradient(to bottom right';
    for (const element of colors) {
        str += ', #' + element.value;
    }
    str += ')';
    return str;
}

window.onload = setup;