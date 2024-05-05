import edithBtn from '../handlers/editBTHandler.js';
import deleteBtn from '../handlers/deleteBTHandler.js';
import dom from '../dom.js';

const createItem = (item) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = item.id;

    // title
    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = item.text;

    // buttons container
    const containerBtn = document.createElement('div');
    containerBtn.classList.add('btn-container');

    // edit btn
    const btnEdit = document.createElement('button');
    btnEdit.innerHTML = '<i class = "fas fa-edit"></i>';
    btnEdit.classList.add('edit-btn');

    btnEdit.addEventListener('click', () => {
        dom.submitBtn.innerText = 'Edit';
        container.classList.add('selected');
        edithBtn(item);
    });

    // delete btn
    const btnDelete = document.createElement('button');
    btnDelete.innerHTML = '<i class = "fas fa-trash"></i>';
    btnDelete.classList.add('delete-btn');

    btnDelete.addEventListener('click', () => {
        deleteBtn(item.id);
    });

    containerBtn.append(btnEdit, btnDelete);
    container.append(title, containerBtn);

    return container;
};

export default createItem;
