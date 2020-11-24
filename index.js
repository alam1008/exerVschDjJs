var square = document.getElementById("square")

function green (){
    square.style.backgroundColor = "green"
}
square.addEventListener('dblclick', green)
function blue (){
    square.style.backgroundColor = "blue"
}
square.addEventListener('mouseover', blue)
function orange(){
    square.style.backgroundColor = "orange"
}
square.addEventListener('mouseleave', orange)
function red(){
    square.style.backgroundColor = "red"
}
square.addEventListener('mousedown', red)
function yellow (){
    square.style.backgroundColor = "yellow"
}
square.addEventListener('mouseup', yellow)