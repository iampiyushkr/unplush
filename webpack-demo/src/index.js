import axios from "axios"
import navbar from ".././component/navbar.js"
 

 
  
    //making network request using axios

axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log(res);
});
  
//webpack optimizing our code for the browser

document.body.innerHTML = navbar();