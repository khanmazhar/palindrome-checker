displayNone();

document.getElementById('btn').addEventListener('click', function () {
    var input = document.getElementById('text-input').value;
    const regex = /[\W_]/g;
    var orignal = input.replace(regex, "").toLowerCase();
    var reversed = orignal.split('').reverse().join('');
    if (orignal === reversed) {
        document.querySelector('.correct').style.display = 'block';
        document.querySelector('#text-input').addEventListener('keyup', displayNone);
    } else {
        document.querySelector('.wrong').style.display = 'block';
        document.querySelector('#text-input').addEventListener('keyup', displayNone);
    }
})

function displayNone() {
    document.querySelector('.correct').style.display = 'none';
    document.querySelector('.wrong').style.display = 'none';
}
