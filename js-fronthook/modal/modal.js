const showModal = document.querySelector(".show-modal")
const modal = document.querySelector(".modal")
const backDrop = document.querySelector(".backdrop")
const closeModal = document.querySelector(".close-modal")
const confirmModal = document.querySelector(".confirm-modal")

confirmModal.addEventListener("click", () => closeModalFun(true))

closeModal.addEventListener("click", () => closeModalFun())

backDrop.addEventListener("click", () => closeModalFun())

showModal.addEventListener("click", showModalFun)


function closeModalFun(showAllert = false) {
    modal.style.opacity = "0"
    modal.transform = "translateY(-100vh)"
    backDrop.style.display = "none"

    if (showAllert) {
        alert("success!!!")
    }
}

function showModalFun() {
    modal.style.opacity = "1"
    modal.transform = "translateY(20vh)"
    backDrop.style.display = "block"
}

