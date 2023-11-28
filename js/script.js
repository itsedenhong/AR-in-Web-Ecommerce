const hotspot = document.getElementById('hotspot1');
hotspot.addEventListener('click', () => {
  alert('You clicked the hotspot!');
});

const chairViewer = document.querySelector('model-viewer[src="../models/chair.glb"]');
const sofaViewer = document.querySelector('model-viewer[src="../models/sofa.glb"]');
const lampViewer = document.querySelector('model-viewer[src="../models/lamp.glb"]');

chairViewer.addEventListener('click', () => {
  alert('You clicked the Chair model!');
});

sofaViewer.addEventListener('click', () => {
  alert('You clicked the Sofa model!');
});

lampViewer.addEventListener('click', () => {
  alert('You clicked the Lamp model!');
});
