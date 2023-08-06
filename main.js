function camelCaseToTitleCase(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
function nhap() {
    var nhap = document.getElementById('nhap').value;
    var chuyen = camelCaseToTitleCase(nhap);
    document.getElementById('in').innerHTML = chuyen;
}