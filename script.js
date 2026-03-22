const convert = document.getElementById('convert');
const r = document.getElementById('r'), g = document.getElementById('g'), b = document.getElementById('b');
const hex = document.getElementById('hex');

convert.addEventListener('click', () => hex.value = rgbToHex(r.value, g.value, b.value))

function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");
}