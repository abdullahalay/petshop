console.log("tapatap")

const loadCategory=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategory(data.categories));
    //.catch((error)=>console.log(error));
}




//load the card
const loadVedios=()=>{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displayVedios(data.pets));
    //.catch((error)=>console.log(error));
}

//button clicked function
const loadCategoryVideos=(category)=>{
    
    alert(category);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res)=>res.json())
    .then((data)=>displayVedios(data.data));
}



const displayCategory=(data)=>{
   const final= document.getElementById('add-button');

    for(item of data){
        //console.log(item);
        //const button=document.createElement("button");
        //button.innerText=item.category;
        //button.innerText=item.category_icon;
        
        //button.classList="btn mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg text-lg hover:bg-teal-700 ";
        //button.innerHTML=`
       //<div class="flex justify-center items-center gap-2 py-2 h-10 ">
        //<div>
        //<img class="w-[50px]" src="${item.category_icon}" alt="">
       // </div>
        //<div>
        //<h1>${item.category}</h1>
        //</div>
       //</div>
        
       // `
       const buttonContainer=document.createElement("div");
       buttonContainer.innerHTML=`
            <button onclick="loadCategoryVideos('${item.category}')" class="btn mt-6 px-6 py-1 bg-teal-600 text-white rounded-lg text-lg hover:bg-teal-700">
              <div>
                <img class="w-[50px]" src="${item.category_icon}" alt="">
              </div>

        <div>
          <h1>${item.category}</h1>
        </div>
            


            </button>
       
       `;





        final.appendChild(buttonContainer);
        
    }
}

const displayDetails=(petId)=>{
    
  
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  //console.log(petId);
  .then((res)=>res.json())
  .then((data)=>display(data.petData));
}

const display=(show)=>{
  //console.log(show);
  const modalContainer=document.getElementById('modal-data');
  modalContainer.innerHTML=`
    <div class="flex justify-center items-center">
           <div class="p-4">
            <img class="w-full mb-10" src="${show.image}" alt="">
    <p>${show.pet_details}</p>
    <h1>🐶bread:${show.breed}</h1>
    <h2>category:${show.category}</h2>
    <h3>📅date-of-birth:${show.date_of_birth}</h3>
    <h4>♀️♂️Gender:${show.gender}</h4>
    <p>💵vaccinated_status:${show.vaccinated_status}</p>
    <p>Pet name:${show.pet_name}</p>
  <p class="py-4">Press ESC key or click the button below to close</p>
           </div>
    </div>
  <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  
  `
  document.getElementById('modal-id').click();


}

const likedPetsDisplay = (petImage) => {
  console.log(petImage);
  
  const d2=document.getElementById('get-images');
  const d1=document.createElement('div');
  d1.classList=""
 
  d1.innerHTML=`
  

  <div class="p-3 border flex  justify-center items-center">
  <img class="h-full rounded-lg w-full  object-cover" src=${petImage} alt="Liked Pet Image">
  </div>
  
  `
  d2.appendChild(d1);
  
	
};




const displayVedios=(data)=>{
    const card=document.getElementById('get-card');
    card.innerHTML="";
    //console.log(data);
    for(item of data){
        const create =document.createElement("div");
        create.classList="card bg-base-100 w-96 shadow-xl"
        create.innerHTML=`
         <figure class="px-10 pt-10">
    <img
      src="${item.image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body ">
    <h2 class="card-title">${item.pet_name}</h2>
    <p> 🐶Breed:${item.breed} </p>
    <p>📅 Birth:${item.date_of_birth} </p>
    <p>♀️♂️Gender:${item.gender} </p>
    <p>💵Price:${item.price}$ </p>
    <hr>

    <div class="card-actions flex justify-between">
      <button  onClick="likedPetsDisplay('${item.image}')"class="btn ">👍</button>
      <button class="btn  text-teal-600 ">Adopt</button>
      <button onclick="displayDetails(${item.petId})"  class="btn  text-teal-600">Details</button>
    </div>
  </div>
        
        `
        card.append(create);
       
    }

}


loadCategory();
loadVedios();