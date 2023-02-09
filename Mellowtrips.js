let html = "";
let booking = document.querySelectorAll('.boption');
// console.log(booking);


     booking.forEach(element => {
       
         element.addEventListener('click' , event =>{
            let details = document.getElementById('wayfield');
            console.log(element.innerHTML);
           switch(element.innerHTML){
               case "Trains" :
               html = `
            <input type = "text" placeholder = "From">
              <input type = "text" placeholder = "To">
              <input type = "date" placeholder = "Travel Date" value="2022-01-22">
            <input type = "text" placeholder = "Class">
             <button>Search Trains</button>
            `;
            break;
            case "Flights" :
               html = `
               <input type = "text" placeholder = "From">
                 <input type = "text" placeholder = "To">
                 <input type = "date" placeholder = "Departure" value="2022-01-22">
               <input type = "date" placeholder = "Arrival">
               <input type = "" placeholder = "1 Traveller Economy">
                <button>Search Flights </button>
               `;
               break;
               case "Hotels":
                html = `
                <input type = "text" placeholder = "Enter city,Location or Hotel Name">
                  <input type = "date" placeholder = "Check-in">
                  <input type = "date" placeholder = "Check-out" >
                <input type = "Number" placeholder = "Number of People">
               
                 <button>Search Hotels</button>
                `;
                break;
                case "Buses" : 
                html = `
                <input type = "text" placeholder = "From">
                  <input type = "text" placeholder = "To">
                  <input type = "date" placeholder = "Travel Date" value="2022-01-22">
                 <button>Search Buses </button>
                `;
                break;
                case "Activities":
                  html = `
                  <input id = "Activities" type = "text" placeholder = "Search" value = "Activities ,Tours or Destinations">
                  `;
                  break;
           default : 
           html = `
           <input id = "Activities" type = "text" placeholder ="Where are you going">
            <button>Search Cabs </button>
           `;
       
       }
        details.innerHTML = html;   
         });
         
     });


     let toursoptions = document.getElementById('toursoptions');
     let toursoptions1 = document.getElementById('toursoptions1')
      let right = document.getElementById("arrow1");
      let left = document.getElementById("arrow2");
  
     
     left.addEventListener('click' , event=>{
        toursoptions.style.display = "flex";
        toursoptions1.style.display = "none";
     })

     right.addEventListener('click' , event=>{
      toursoptions1.style.display = "flex";
      toursoptions.style.display = "none";
     })
     
    
     

    let dropdown = document.getElementById('dropdown');
    let dropdown1 = document.getElementById('dropdown1');
    let dropdown2 = document.getElementById('dropdown2');
    

    let dest = document.getElementById('dest');
    let dest1 = document.getElementById('dest1');
    let dest2 = document.getElementById('dest2');
    let welcome = document.getElementById('welcome');
    
    dest.addEventListener('mouseover', function(){
       dropdown.style.display = "flex"
    })
    dest.addEventListener('mouseout', function(){
      dropdown.style.display = "none"
   })
  dest1.addEventListener('mouseover' ,function(){
    dropdown1.style.display = "flex";
  })
  dest1.addEventListener('mouseout', function(){
    dropdown1.style.display = "none"
 })
 dest2.addEventListener('mouseover' ,function(){
  dropdown2.style.display = "flex";
})
dest2.addEventListener('mouseout', function(){
  dropdown2.style.display = "none"
})

   let ulistref = document.getElementById("ulist");
   class loadList{

    constructor(listref)
    {

        this.listref=listref;
        this.listitems=[];
    }

    add(newItem)
    {

        this.listitems.push(newItem);
        let li = document.createElement("li");
        li.textContent= newItem;
        this.listref.appendChild(li);
    }

    removeItem()
    {
        this.listref.removeChild(this.listref.firstChild);

    }

    removeItematIndex(index)
   {

    this.listitems.splice(index,1);
    while(this.listref.firstChild)
    {
        this.listref.removeChild(this.listref.firstChild);

    }

    for(let listitem of this.listitems)
    {
        let li = document.createElement("li");
        li.textContent= listitem;
        this.listref.appendChild(li);
    }

   }
}

ob=new loadList(ulistref);
ob.add("Rajasthan");
ob.add("Jodhpur");
ob.add("Gujarat");