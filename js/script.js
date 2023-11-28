document.addEventListener("DOMContentLoaded", function() {
    const chairViewer = document.getElementById('chair_model');
    const sofaViewer = document.getElementById('sofa_model');
    const lampButton = document.getElementById('lamp');
  
    chairViewer.addEventListener('click', () => {
      alert('You clicked the Chair model!');
    });
  
    sofaViewer.addEventListener('click', () => {
      alert('You clicked the Sofa model!');
    });
  
    lampButton.addEventListener('click', () => {
      alert('You clicked the Lamp model!');
    });
  });
  