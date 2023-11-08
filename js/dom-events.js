//MAIN
(()=>{
//     const dropdownParent = document.querySelector('.dropdown-parent')
//     const dropdownToggle = document.querySelector('.dropdown-toggle')
//     const dropdownMenu = document.querySelector('.dropdown-menu')
//     const dropdownArrow = document.querySelector('img')
//
//     dropdownToggle.addEventListener('click',(event)=>{
//         dropdownParent.classList.toggle("open");
//     } )


    const sayHelloBtns = document.querySelector('.hello');
    for(let sayHelloBtn of sayHelloBtns){
        sayHelloBtn.addEventListener("click", (event) =>{
            const thisBtn = event.target;
            const name = event.target.getAttribute("data-name")
            alert(`hello, ${name}!`);
        })
    }
   document.body.addEventListener(`keydown`, e=>{
       if(e.key === "."){
           alert("you pressed a button")
       }
   });
})();

















