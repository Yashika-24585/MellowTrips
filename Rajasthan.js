let dropdown = document.getElementById('dropdown');
    let dropdown1 = document.getElementById('dropdown1');
    

    let dest = document.getElementById('dest');
    let dest1 = document.getElementById('dest1');
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


 shownotes();
 let addbtn = document.getElementById('addbtn');
 addbtn.addEventListener('click',func);

function func(){
    let addtext = document.getElementById('addtitle');
    let addname = document.getElementById('addname');
    let adddesignation = document.getElementById('adddesignation');
    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes)
    }
    let myobj = {
        name : addname.value,
        text : addtext.value,
        designation : adddesignation.value

    }
    notesobj.push(myobj);
    localStorage.setItem('notes' , JSON.stringify(notesobj));
    addtext.value = "";
    addname.value = "";
    adddesignation.value = "";
    shownotes();
}
function shownotes(){
    let notes = localStorage.getItem('notes');
    if (notes==null)
        notesobj = [];
    else
         notesobj = JSON.parse(notes)
 
     let html = '';
     notesobj.forEach(function(element , index){
        html+=`<div class="box">
        <p>${element.text}</p>
        <div class="user">
            <div class="info">
                <h3>${element.name}</h3>
                <span>${element.designation}</span>
            </div>
        </div>
    </div>`
    })
    let noteselem = document.getElementById('ccontainer');
    if(notesobj.length == 0)
          noteselem.innerHTML = `<p>Add your Experiences</p>`;
    else
     noteselem.innerHTML = html;
         
       
}

    