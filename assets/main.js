// const form = () => {
//     const inputText = document.querySelector("input");
//     const nameText = document.querySelector("label");
  
//     inputText.addEventListener("focusin", (e) => {
//       nameText.classList.add("active");
//     });
  
//     inputText.addEventListener("focusout", (e) => { 
//         nameText.classList.remove("active");
//     });
//   };
  

  const labels = document.querySelectorAll('.form-control label')  
  labels.forEach(label => {  
    label.innerHTML = label.innerText  
      .split('')  
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)  
      .join('')  
  })  