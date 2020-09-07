let searchButton = document.querySelector("#search")
let inputValue = document.querySelector("input").value.toString()


//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
function sendApiRequest(){
 //let API_Key = "AkY4ScDMplu0vDdqnmiSO85LcgmNGCXgPofnjITB"
 inputValue=document.querySelector("input").value.toString();
 fetch(`https://api.nasa.gov/planetary/apod?api_key=FxKA8vtb5XoWnL9Yd8X9FbeYNhPOmYf0OnhBn4To&date=${inputValue}`)
    .then(response => response.json())
    .then(data =>
      {useApiData(data);console.log(inputValue)
      console.log(data)})

  console.log(inputValue)

}


//function that does something with the data received from the API.
function useApiData(data){

  document.querySelector("p").innerHTML = data.explanation
  //let imgOrVideo=data.url;
  if(data.media_type=="video"){
    document.querySelector("img").style.display="none"
    document.querySelector("iframe").style.display="block"
    document.querySelector('iframe').src = data.url;

  }
  else{
    document.querySelector("iframe").style.display="none"
    document.querySelector("img").style.display="block"
    document.querySelector("img").src = data.url;



    //clear iframe src
  }
console.log(data.url)
}
