const btn = document.querySelector('#btn')
const todo_input = document.querySelector('#todo-input')
const todo_list = document.querySelector('#todo-list')

//Add Todo List 
btn.addEventListener('click', (e) => {
    e.defaultPrevented
    const getValue = todo_input.value

    //Validation 
    const word = getValue.trim().split(/\s+/)
    if (!isNaN(getValue) || word.length > 5) {
        alert('Please enter a valid todo (not a number and not more than 5 words).');
    }

    //Create Container Div class for list
    const container = document.createElement('div')
    container.classList.add('todo-item-container')

    const li = document.createElement('li')

    //Remove Button create on runtime 
    const remove_btn = document.createElement('button')
    remove_btn.classList.add('remove_btn')
    remove_btn.id = "remove_btn"
    remove_btn.textContent = "Remove"
    console.log(remove_btn)

    remove_btn.addEventListener('click', function (e) {
        e.preventDefault
        container.remove()
    })

    //EditAble form or Input 
    function editAbleInput(value, onSave) {
        //Create Input Field
        const input = document.createElement('input')
        input.type = "text"
        input.classList.add('input')
        input.value = value

        //Create Button on the form
        const saveButton = document.createElement('button')
        saveButton.textContent = 'Save';
        saveButton.classList.add('saveButton')

        //Create Warper for button and input whole warp
        const warper = document.createElement('div')
        warper.appendChild(input)
        warper.appendChild(saveButton)

        //After edit and then save function
        saveButton.addEventListener('click', function (e) {
            e.preventDefault
            const getValue = input.value

            if (!isNaN(parseFloat(getValue))) {
                alert('Please enter a valid todo (not a number).');
                return;
            }

            const wordCount = getValue.trim().split(/\s+/).length;
            if (wordCount > 5) {
                alert('Please enter a valid todo (not more than 5 words).');
                return;
            }

            onSave(input.value)
            warper.remove();
        })

        return warper;

       
    }

     //Update function
     function updateItemList(newText) {
        const li = document.querySelector('li')
        li.textContent = newText
    }

    //Create Edit button on runtime
    const edit_btn = document.createElement('button')
    edit_btn.classList.add('edit_btn');
    edit_btn.textContent = 'Edit';

    edit_btn.addEventListener('click', function () {
        const editable = editAbleInput(li.textContent, function (newText) {
            updateItemList(newText)
        })
        li.textContent = '';
        li.appendChild(editable);
    })

    li.appendChild(document.createTextNode(getValue))
    container.appendChild(li);
    container.appendChild(remove_btn);
    container.appendChild(edit_btn);
    todo_list.appendChild(container);
    todo_input.value = ""
})

