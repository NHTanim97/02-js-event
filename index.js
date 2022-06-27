




let color = ['red', 'orenge', 'blue', 'green', 'pink'];

let i = 0;

// event
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    // text change
    let text = document.getElementById('text')
    text.innerHTML = ('My name is Tanim');


    // background color change
    let bdy = document.getElementById('bdy');
    bdy.style.background = color[i];

    if(i >= color.length){
        i = 0
    }else{
        i++
    }

});