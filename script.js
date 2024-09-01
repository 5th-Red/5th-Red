if (!sessionStorage.getItem("loading")){
  document.getElementById("site").style.display = "none";
  document.getElementById("loading").style.display = "block";
  document.getElementsByTagName("body")[0].className = "fade"
  loading();
  sessionStorage.setItem("loading",true);
}
function loading(){
  document.getElementById("loading").style.display = "block"
                // document.getElementById("loading").innerHTML = `<img src="./5th_Red_Logo-2-3.svg" style="display:block;width:40%;margin:auto;">`;
  setTimeout(function(){
    document.getElementById("loading").style.display = "none";
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("site").style.display = "block";
    document.getElementsByTagName("body")[0].className = ""
  },5000)
}
