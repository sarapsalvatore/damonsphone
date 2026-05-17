function scalePhone() {
    const phone = document.querySelector('.phone-wrapper');

    const scaleX = window.innerWidth / 420;
    const scaleY = window.innerHeight / 820;

    let scale = Math.min(scaleX, scaleY);

    if (scale > 1) scale = 1; // nezozväčšuj nad originál

    phone.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scalePhone);
window.addEventListener('load', scalePhone);

scalePhone();
