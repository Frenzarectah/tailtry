const changePage = () =>{ 
    let page = document.getElementById("page");
    let page1 = document.getElementById("page1");
    page.classList.add("hidden");
    page1.classList.remove("hidden");
    obtainPos();
}
const resetDOM = () =>{
    let divs = document.getElementsByClassName("ut");
    for (let elem of divs) elem.innerText="";
}
//FUNCTION FOR GEOLOCATING THE DEVICE
const obtainPos =()=>navigator.geolocation.getCurrentPosition(success,error,optional);
const success=(pos)=> {
    if(navigator.geolocation){
        cord = pos.coords;
        console.log(`Latitude : ${cord.latitude}`);
        console.log(`Longitude: ${cord.longitude}`);
        console.log(`More or less ${cord.accuracy} meters.`);
        weatherByCoord(cord.latitude,cord.longitude);
    }else{
      console.log("GeoLoc not available!");
    }
  }
const error=()=>{
    alert('posizione non condivisa dal browser, puoi usare la ricerca città come alternativa!');
}
const optional = {
    enableHighAccuracy: true,
};
