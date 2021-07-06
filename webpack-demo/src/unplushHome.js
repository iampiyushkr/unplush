import axios from "axios"
import nav from ".././component/unplushNav.js"

document.body.innerHTML = nav()
var container = document.getElementById("container")


function searchButton() {
    document.getElementById("extendInput").innerHTML = null;
    var search = document.getElementById("search").value
    
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=Y-hna0IIEIGcPG2Om7je1GunuARmEvpS1hc8PHWJOKE`).then((res) => {
        console.log(res)
        var data = res.data;
        var result = data.results;
        append(result)
    });
}
document.getElementById('searchButton').addEventListener("click",searchButton)

function append(result) {
    
    container.innerHTML = null;
    result.forEach(el => {
        var forImg = el.urls
      
        var regularImg=forImg.regular
        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = regularImg;

        div.append(image)
        container.append(div)

        image.onclick = function () {
            ZoomImg();
        }
        function ZoomImg() {
        document.getElementById("zoomImg").src = regularImg
        document.getElementById("modal1").style.display = "block"


    }
            
        
    });
}
    
 window.onclick = function (event) {
          if (event.target == document.getElementById("modal1")) {
            document.getElementById("modal1").style.display = "none";
        }
}
    


var movies_div=document.getElementById("extendInput")

function searchButton1() {
    var search = document.getElementById("search").value
    
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=Y-hna0IIEIGcPG2Om7je1GunuARmEvpS1hc8PHWJOKE`).then((res) => {
        console.log(res)
        var data = res.data;
        var result = data.results;
        
        appendMovies(result)
    });
}


 function appendMovies(movies) {
        movies_div.innerHTML = null;

     movies.forEach((el) => {
            var name = el.alt_description;
            let p = document.createElement("p");
            p.setAttribute("class", "para");
        
         
            p.innerText = name;

           

         movies_div.append(p);
         p.onclick = function () {
             append1()
         }
         function append1() {
             document.getElementById("search").value = p.innerText
             searchButton();
             
         }
        });
    }

    
var timer_id;
function throttle() {
        console.log(1)
        if (timer_id) {
            return false;
        }

        timer_id = setTimeout(() => {
            searchButton1();
            timer_id = undefined;
        }, 1000);
}

document.getElementById("search").addEventListener("input", throttle)


function tech() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    arr.forEach(el => {
        
   
        var p = document.getElementById(`s${el}`)
        p.onclick = function () {
            console.log(el)
            get();

        }
        function get() {
            document.getElementById('search').value = p.innerHTML;
            searchButton();
        }
    
         });
}
tech();


    
