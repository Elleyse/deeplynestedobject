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

loadSavedContent();