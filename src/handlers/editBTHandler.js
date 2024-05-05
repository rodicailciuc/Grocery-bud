import dom from '../dom.js';

const edithBtn = (item) => {
    dom.submitBtn.innerText = 'Edit';
    dom.input.value = item.text;
    document.getElementById(item.id).classList.add('selected');
};

export default edithBtn;
