const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="edit"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main"></div>
    <textarea ></textarea>`
}