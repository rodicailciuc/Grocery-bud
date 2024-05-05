import dom from '../dom.js';
import data from '../data.js';

const clearAll = () => {
    dom.todos.innerHTML = '';
    data.items = [];
};

export default clearAll;
