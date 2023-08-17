const circleEl = document.querySelector('.circle');
const bodyEl = document.querySelector('body');


bodyEl.addEventListener('mousemove', function (event) {
    const centerX_bodyEl = bodyEl.offsetWidth / 2;
    const centerY_bodyEl = bodyEl.offsetHeight / 2;
    const mouseX_bodyEl = event.clientX;
    const mouseY_bodyEl = event.clientY;
    const deltaX_bodyEl = mouseX_bodyEl - centerX_bodyEl;
    const deltaY_bodyEl = mouseY_bodyEl - centerY_bodyEl;
    const angleRad = Math.atan2(deltaY_bodyEl, deltaX_bodyEl);
    const angleDeg = angleRad * (180 / Math.PI);
    circleEl.style.transform = 'rotate(' + angleDeg + 'deg)'
});