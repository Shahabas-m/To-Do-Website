const ul_head = document.getElementById('List-container');
const input_box = document.getElementById('Input-Box');

function Added() {

    if(input_box.value == '') {
        alert('You Must Be Type Anything')
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = input_box.value;
        ul_head.appendChild(li);  
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }

    input_box.value = '';

}


ul_head.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }

    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
}, false)