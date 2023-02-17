function cangeTema() {
  htmlElement = document.documentElement
  imgProfile = document.querySelector("#img-profile")

  htmlElement.classList.toggle("light")

  htmlElement.classList.contains("light")
    ? imgProfile.setAttribute("src", "./assets/avatar-light.png")
    : imgProfile.setAttribute("src", "./assets/avatar.png")
}
