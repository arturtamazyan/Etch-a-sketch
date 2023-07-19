let board_size = 50;
function fill_the_pixel(element){
    element.target.style.backgroundColor = 'dimgrey';
}

let isMouseDown = false;

function onMouseDown() {
  isMouseDown = true;
}

function onMouseUp() {
  isMouseDown = false;
}

function onMouseEnter(pixel) {
  if (isMouseDown) {
    fill_the_pixel(pixel);
  }
}

function new_display(board_size)
{
    const display = document.getElementById('display');
    display.innerHTML = '';

    for (let i = 0; i < board_size; i++)
    {
        //horizontal line
        let pixel_line = document.createElement('div');
        pixel_line.className = 'pixel-line';

        //width will be 2 x height
        for (let i = 0; i < board_size*2; i++)
        {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel_line.appendChild(pixel);  
        }
        display.appendChild(pixel_line);
    }

}


document.addEventListener('DOMContentLoaded', function() {
    new_display(board_size);
    let pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++){
    pixels[i].addEventListener('mouseover', fill_the_pixel);
    }


    document.querySelector('.press').onclick =function() {
        for (let i = 0; i < pixels.length; i++){
            pixels[i].removeEventListener('mouseover', fill_the_pixel);
            pixels[i].addEventListener('mousedown', onMouseDown);
            pixels[i].addEventListener('mouseup', onMouseUp);
        }
        for (let i = 0; i < pixels.length; i++){
            pixels[i].addEventListener('mouseenter', onMouseEnter);
            pixels[i].addEventListener('click', fill_the_pixel);
        }

        document.querySelector('.press').style.backgroundColor = "yellow";
        document.querySelector('.hover').style.backgroundColor = "#e5f757";//light yellow
        
    };

    document.querySelector('.hover').onclick =function() {
        for (let i = 0; i < pixels.length; i++){
            pixels[i].addEventListener('mouseover', fill_the_pixel);
        }
        
        document.querySelector('.hover') .style.backgroundColor = "yellow";
        document.querySelector('.press').style.backgroundColor = "#e5f757";//light yellow
    };

    document.querySelector('.low').onclick = function() {
        document.querySelector('.low') .style.backgroundColor = "yellow";
        document.querySelector('.medium') .style.backgroundColor = "#e5f757";//light yellow
        document.querySelector('.high').style.backgroundColor = "#e5f757";//light yellow
        
    }
    document.querySelector('.medium').onclick = function() {
        document.querySelector('.low') .style.backgroundColor = "#e5f757";//light yellow
        document.querySelector('.medium') .style.backgroundColor = "yellow"
        document.querySelector('.high').style.backgroundColor = "#e5f757";//light yellow
    }
    document.querySelector('.high').onclick = function() {
        document.querySelector('.low') .style.backgroundColor = "#e5f757";//light yellow
        document.querySelector('.medium') .style.backgroundColor = "#e5f757";//light yellow
        document.querySelector('.high').style.backgroundColor = "yellow";
    }




});
    
    



