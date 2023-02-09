// let dest = document.getElementById('dest');
//     let dest1 = document.getElementById('dest1');
//     let dest2 = document.getElementById('dest2');
//     let welcome = document.getElementById('welcome');
    
//     dest.addEventListener('mouseover', function(){
//        dropdown.style.display = "flex"
//     })
//     dest.addEventListener('mouseout', function(){
//       dropdown.style.display = "none"
//    })
//   dest1.addEventListener('mouseover' ,function(){
//     dropdown1.style.display = "flex";
//   })
//   dest1.addEventListener('mouseout', function(){
//     dropdown1.style.display = "none"
//  })
//  dest2.addEventListener('mouseover' ,function(){
//   dropdown2.style.display = "flex";
// })
// dest2.addEventListener('mouseout', function(){
//   dropdown2.style.display = "none"
// })


fetch("weather.json")
.then((response)=>response.json())
.then((json)=>{
    // console.log(json)
    let btn = document.getElementById('btn');
     let states = document.getElementById('destination');
     let season = document.getElementById('season');
     let a = season.value;
     let temp = document.getElementById('temp');
     let month = document.getElementById('idealmonth');
     let textarea = document.getElementById('ses');
       btn.addEventListener('click' , function(){
        //    console.log("hello")
           json.forEach(element => {
            //    console.log(element)
            if(states.value==element.name){
                // console.log(states.value)
                // console.log(element.name);
                temp.value = element.CurrentTemperature;
                month.value = element.Idealmonthtovisit;
                textarea.value = season.value;
                
                
            }
           });
        
       })
        
});

