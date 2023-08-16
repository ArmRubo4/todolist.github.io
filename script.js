const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    if(!input.value.trim()) {
        return;
    }

    const li = document.createElement('li');

    const text = document.createElement('span');
    text.innerText = input.value;
    text.className = 'text';
    li.appendChild(text);

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'check';
    check.onclick = function(e) {
        text.classList.toggle('active');
        li.classList.toggle('active1');
    }
    li.appendChild(check);
    
    const close = document.createElement('span');
    close.onclick = function(e) {
        e.target.parentElement.remove();
    }
    close.className = 'times';
    close.innerHTML = '&times;';
    li.appendChild(close);

    const datetime = document.createElement('input');
    datetime.type = 'datetime-local';
    datetime.className = 'datetime'
    li.appendChild(datetime);

    ul.appendChild(li);
    input.value = '';
})