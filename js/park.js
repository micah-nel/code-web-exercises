document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('highlightButton').addEventListener('click', function () {
        document.querySelectorAll('ul li:last-child').forEach(function (li) {
            li.style.backgroundColor = 'yellow';
        });
    });
});
document.querySelectorAll(`h3`).forEach(function (h3){
    h3.addEventListener(`click`, function (){
        const ul = h3.parentElement.querySelector(`ul`);
        if(ul) {
         ul.querySelectorAll(`li`).forEach(function (li){
             li.style.fontWeight = 'bold';
         })
        }
    });
    document.querySelectorAll('li').forEach(function (li) {
        li.addEventListener('click', function () {
            // Set font color of the first li in the parent ul to blue using a function
            const ul = li.parentElement;
            if (ul) {
                ul.querySelector('li:first-child').style.color = 'blue';
            }
        });
    });
});