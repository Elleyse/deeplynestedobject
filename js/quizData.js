// // app.js
// function displayUser() {
//     var userInfoContainer = document.getElementById('userInfo');
//     var textEditorContent = document.getElementById('textEditor').value;

//     userInfoContainer.innerHTML = '';

//     for (var key in user) {
//         if (Array.isArray(user[key])) {
//             userInfoContainer.innerHTML += `<p>${key}: ${user[key].join(', ')}</p>`;
//         } else if (typeof user[key] !== 'function') {
//             userInfoContainer.innerHTML += `<p>${key}: ${user[key]}</p>`;
//         }
//     }

//     user.displayInfo();

//     userInfoContainer.innerHTML += `<p>Text Editor Content: ${textEditorContent}</p>`;

//     saveToLocalStorage('textEditorContent', textEditorContent);


// }
function saveToLoacalStorage(key, value){
    localStorage.setItem(key, value);


}

function saveTextEditorContent() {
    var textEditorContent = document.getElementById('textEditor').value;
    saveToLocalStorage('textEditorContent', textEditorContent);
}

function loadSavedContent() {
    var savedContent = localStorage.getItem('textEditorContent');
    if (savedContent) {
        document.getElementById('textEditor').value = savedContent;
    }
}

// Call the function to load saved content when the page loads
loadSavedContent();