console.log('%c HI', 'color: firebrick')
let imgContainer = document.getElementById('dog-image-container')

document.addEventListener("DOMContentLoaded", function () {
   fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(resp => resp.message)
      .then(renderImage)
      .catch(console.error)

   function renderImage(data) {
      let dogImg = data
      dogImg.forEach(render)
   }
   function render(data) {
      let pic = document.createElement('img')
      pic.src = data
      document.getElementById('dog-image-container').append(pic)

   }
   fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
      .then(resp => resp.message)
      .then(renderBreeds)

   function renderBreeds(data) {
      console.log(data)
      //let obj = data
      let key = Object.keys(data)
      let y = select(key, document.querySelector("#breed-dropdown").value)
      //console.log(document.querySelector("#breed-dropdown").value)
      //filter function called here : line 52
      //y.forEach(renderKey)
      document.querySelectorAll("#dog-breeds > li").forEach(function (attach) {
         attach.addEventListener("click", function (event) {
            console.log(event.target.style.color = "blue")
         })


      })
      let x = document.querySelector("#breed-dropdown").addEventListener("change", (e) => {
         //e.target.value
         select(key, e.target.value)
      })


   }

   function renderKey(data) {
      let li = document.createElement("li")
      li.textContent = data
      document.getElementById("dog-breeds").appendChild(li)
      //li.textContent = ""
   }



   function select(key, letter) {
      let arr = key.filter(function (item) {
         // console.log(item)
         document.getElementById("dog-breeds").innerHTML = "" 
         return (item.startsWith(letter))


      })
      console.log(arr)
      arr.forEach(renderKey)

      return arr
   }








})

















