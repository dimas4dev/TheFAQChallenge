const deploy = document.querySelector(".deploy");

function desplegar() {
  const visible = document.querySelector(".container__text--visible");
  const invisible = document.querySelector(".container__text--nonvisible");
  if (visible) {
    deploy.classList.remove("container__text--visible");
    deploy.classList.add("container__text--nonvisible");
  } else if (invisible) {
    deploy.classList.remove("container__text--nonvisible");
    deploy.classList.add("container__text--visible");
  } else {
    console.log("enserio la embarraste bro");
  }
}
