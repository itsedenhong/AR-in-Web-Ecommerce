document.addEventListener("DOMContentLoaded", function() {
    const hotspot = document.querySelector('.Hotspot');
    if (hotspot) {
        hotspot.addEventListener('click', () => {
            alert('You clicked the hotspot!');
        });
    } else {
        console.error("Hotspot element not found!");
    }

    const chairViewer = document.getElementById('chair_model');
    const sofaViewer = document.getElementById('sofa_model');
    const lampViewer = document.getElementById('lamp_model');

    if (chairViewer) {
        chairViewer.addEventListener('click', () => {
            alert('You clicked the Chair model!');
        });
    } else {
        console.error("Chair viewer element not found!");
    }

    if (sofaViewer) {
        sofaViewer.addEventListener('click', () => {
            alert('You clicked the Sofa model!');
        });
    } else {
        console.error("Sofa viewer element not found!");
    }

    if (lampViewer) {
        lampViewer.addEventListener('click', () => {
            alert('You clicked the Lamp model!');
        });
    } else {
        console.error("Lamp viewer element not found!");
    }
});
