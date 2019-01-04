let state = 0 // 0=closed 1=opened

$("#ham_nav").click(function(){
  if(state == 0){
    document.getElementById("bars").classList.replace("fa-bars", "fa-close");
    document.getElementById("slide-out").style.display = "block"
    state = 1;
  } else if(state == 1){
    document.getElementById("bars").classList.replace("fa-close", "fa-bars");
    document.getElementById("slide-out").style.display = "none"
    state = 0;
  }
})
