document.addEventListener('DOMContentLoaded', function () {
    const toDoForm = document.getElementById('to-do-form');
    const toDoList = document.getElementById('to-do-list');

    toDoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const toDoText = document.getElementById('to-do').value;
        const toDoItem = document.createElement('li');
        toDoItem.className = 'list-group-item';
        toDoItem.innerHTML = `
            <span>${toDoText}</span>
            <button class="btn btn-danger btn-sm float-end">Done</button>
        `;
        toDoList.appendChild(toDoItem);
        document.getElementById('to-do').value = '';
    });
    toDoList.addEventListener('click', function (event){
    })
    document.addEventListener('DOMContentLoaded', function () {
    const toDoForm = document.getElementById('to-do-form');
    const toDoList = document.getElementById('to-do-list');

    toDoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });
    document.getElementById('to-do').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTodo();
        }
    });
    function addTodo() {
        const toDoText = document.getElementById('to-do').value;
        if (toDoText.trim() !== '') {
            const toDoItem = document.createElement('li');
            toDoItem.className = 'list-group-item';
            toDoItem.innerHTML = `
                <span>${toDoText}</span>
                <button class="btn btn-danger btn-sm float-end">Done</button>
            `;
            toDoList.appendChild(toDoItem);
            document.getElementById('to-do').value = '';
        }
    }
    toDoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-danger')) {
            event.target.closest('.list-group-item').remove();
        }
    });
})});

