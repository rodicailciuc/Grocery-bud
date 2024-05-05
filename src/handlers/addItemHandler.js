import dom from '../dom.js';
import data from '../data.js';

import createItem from '../components/createItem.js';

const addItem = (e) => {
    e.preventDefault();
    const value = dom.input.value.trim();
    const btnType = dom.submitBtn.innerText;

    if (btnType === 'Submit') {
        if (!value) {
            dom.error.innerText = 'Please enter a value';
            dom.error.classList.add('error1');
            setTimeout(() => {
                dom.error.innerText = '';
                dom.error.classList.remove('error1');
            }, 2000);
        } else {
            const newItem = {
                id: data.items.length + 1,
                text: value,
            };
            const itemDom = createItem(newItem);
            dom.todos.prepend(itemDom);
            data.items.push(newItem);
            dom.input.value = '';
        }
    } else {
        const selectedItem = document.querySelector('.selected');
        selectedItem.querySelector('.title').innerText = value;
        const id = Number(selectedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;
        dom.input.value = '';
        dom.submitBtn.innerText = 'Submit';
        selectedItem.classList.remove('selected');
    }
};

export default addItem;
