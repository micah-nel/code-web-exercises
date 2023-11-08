const profilePic = document.querySelector("img")
setTimeout(()=>{
    profilePic.setAttribute("src", "./img/backGround1.jpeg")
}, 2000)

const profileName = document.querySelector("h2")
setTimeout(()=>{
    profileName.innerHTML = "Micah Nelthropp"
},4000)

const profileDesc = document.querySelector("#profile-desc")
setTimeout(()=>{
    profileDesc.style.color = "red";
},6000)

const profileCard = document.querySelector("#profile-card")
setInterval(()=>{
    profileCard.classList.toggle("background-color")
},2000)

