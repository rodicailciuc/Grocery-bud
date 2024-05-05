import data from '../data.js';

const deleteBtn = (id) => {
    const item = document.getElementById(id);
    if (item) {
        item.remove();
    }

    data.items = data.items.filter((item) => item.id !== id);
};

export default deleteBtn;
