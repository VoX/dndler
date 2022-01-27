let mouseDown = 0;
window.onload = mouseWatch = () => {
    document.body.onmousedown = () => {
        mouseDown = 1;
    }
    
    document.body.onmouseup = () => {
        mouseDown = 0;
    }

    document.body.onmouseleave = () => {
        mouseDown = 0;
    }
}
   
mouseOver = (id) => {
    if(mouseDown)
    {
        document.getElementById(id).checked = 1 - document.getElementById(id).checked;
        document.getElementById(id).dispatchEvent(new Event('input'));
    }
}