class App {
    constructor() {
        this.controlsList();
    };

    controlsList() {
        const videoVK = document.querySelector('.vv_inline_video');
        videoVK ? videoVK.removeAttribute('controlslist') : false;
    };
};

const app = new App(),
    html = document.documentElement,
    AppObserver = new MutationObserver(mutations => mutations.forEach(mutation => app.controlsList()));

AppObserver.observe(html, {
    childList: true,
    subtree: true
});