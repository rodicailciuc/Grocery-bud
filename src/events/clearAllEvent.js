import dom from '../dom.js';
import clearAll from '../handlers/clearALLhandler.js';

const clearAllEvent = () => {
    dom.clearBtn.addEventListener('click', clearAll);
};

export default clearAllEvent;
