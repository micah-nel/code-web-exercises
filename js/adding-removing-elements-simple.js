(() => {
    const addBtn= document.querySelector(`#addBox`)
    const boxContainer = document.querySelector(`#boxes`);
    // THE CORRECT WAY
    addBtn.addEventListener(`click`, (e)=> {
        const box= document.createElement(`div`);
        box.classList.add(`box`);
        box.innerHTML = `
        <span>${document.querySelector(".box").length + 1}</span>
        `;
        box.addEventListener(`click`, e =>{
            box.remove();
        });
        boxContainer.appendChild(box)
    });
})();