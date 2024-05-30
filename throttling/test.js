const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', throttle(clickLog, 1000));
}

const clickLog = () => console.log('clicked');

document.addEventListener('DOMContentLoaded', initApp);

const throttle = (fn, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    }
}
