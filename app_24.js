// app_24

const container = document.querySelector('body #container');
container.onmousemove = function(e){
    const mousePosition = container.querySelector('.mousePosition');
    mousePosition.children[0].textContent = `X: ${e.layerX}px - `;
    mousePosition.children[1].textContent = `Y: ${e.layerY}px`;
    console.clear();
    console.log(e);
}; 
container.onmouseout = function(){
    const mousePosition = container.querySelector('.mousePosition');
    mousePosition.children[0].textContent = `X: ${0}px - `;
    mousePosition.children[1].textContent = `Y: ${0}px`;
};