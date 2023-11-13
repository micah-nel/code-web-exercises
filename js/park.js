document.addEventListener('DOMContentLoaded', function () {
    // Button click event
    document.getElementById('highlightButton').addEventListener('click', function () {
        // Add yellow background to the last li in each ul
        document.querySelectorAll('ul li:last-child').forEach(function (li) {
            li.style.backgroundColor = 'yellow';
        });
    });
});
document.querySelectorAll(`h3`).forEach(function (h3){
    h3.addEventListener(`click`, function (){
        let ul = h3.nextElementSibling;
        if(ul) {
         ul.querySelectorAll(`li`).forEach(function (li){
             li.style.fontWeight = 'bold';
         })
        }
    });
    document.querySelectorAll('li').forEach(function (li) {
        li.addEventListener('click', function () {
            // Set font color of the first li in the parent ul to blue using an anonymous function
            let ul = li.parentElement;
            if (ul) {
                ul.querySelector('li:first-child').style.color = 'blue';
            }
        });
    });
});