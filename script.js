function myAlert(){
    alert("Loading weather report...");
}

// makeCel(){

// }

function changeUnits(){
    var selectOption = document.getElementById("degrees");
    var selectedValue = degrees.options[degrees.selectedIndex].value;
    let ids = [1,2,3,4,5,6,7,8];
    if(selectedValue == "f"){
            for (var i=0;i<ids.length;i++){
            let temps = document.querySelector(`#temp_${ids[i]}`);
            temps.innerHTML = (parseInt(temps.innerHTML) * 9/5) + 32;
            }
    }
    else if(selectedValue == "c"){
            for (var i=0;i<ids.length;i++){
            let temps = document.querySelector(`#temp_${ids[i]}`);
            temps.innerHTML = Math.round((parseInt(temps.innerHTML)-32) * 5/9);
            }
    }
}

function hide(){
    let cookies = document.querySelector("#cookie_box");
    cookies.remove();
}

