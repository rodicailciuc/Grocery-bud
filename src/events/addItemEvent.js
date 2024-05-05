import dom from '../dom.js';
import addItem from '../handlers/addItemHandler.js';

const addItemEvent = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        addItem(e);
    });
};

export default addItemEvent;
