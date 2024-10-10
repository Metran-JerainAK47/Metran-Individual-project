function toggleContainer(containerId) {
var containers = ['homeContainer','myselfContainer','galleryContainer','audioContainer'];
containers.forEach(function (container) {
var element = document.getElementById(container);

if (container === containerId) {

    element.style.display = 'block' ;
}else {

    element.style.display = 'none' ;
}


}
);

}


function openModal() { //open modal
    document.getElementById("modal").style.display = "block";
}

function closeModal() { // close modal
    document.getElementById("modal").style.display = "none";
}




