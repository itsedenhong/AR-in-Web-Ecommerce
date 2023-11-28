document.addEventListener("DOMContentLoaded", function() {
    const chairModel = document.getElementById('chair_model');
    const sofaModel = document.getElementById('sofa_model');
    const lampModel = document.getElementById('lamp_model');
  
    chairModel.addEventListener('click', () => {
      alert('You clicked the Leather Chair model!');
      // 추가적인 동작이 필요한 경우 여기에 작성합니다.
    });
  
    sofaModel.addEventListener('click', () => {
      alert('You clicked the Modern Sofa model!');
      // 추가적인 동작이 필요한 경우 여기에 작성합니다.
    });
  
    lampModel.addEventListener('click', () => {
      alert('You clicked the Basic Lamp model!');
      // 추가적인 동작이 필요한 경우 여기에 작성합니다.
    });
  });
  