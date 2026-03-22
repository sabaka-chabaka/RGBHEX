const convert = document.getElementById('convert');
const r = document.getElementById('r'), g = document.getElementById('g'), b = document.getElementById('b');
const hex = document.getElementById('hex');

convert.addEventListener('click', () => hex.value = rgbToHex(r.value, g.value, b.value))

function rgbToHex(r, g, b) {
    // Clamp values between 0 and 255
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // Convert each to 2-digit hex and combine
    const hex = "#" +
        r.toString(16).padStart(2, '0') +
        g.toString(16).padStart(2, '0') +
        b.toString(16).padStart(2, '0');

    return hex.toUpperCase(); // #D43333 format
}