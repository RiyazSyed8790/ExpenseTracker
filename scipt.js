'use strict:';
const useradd = document.getElementById("adduser");
const dblbal = document.getElementById("doublebal");
const richfil = document.getElementById("richfilter");
const total = document.getElementById("total");
const para = document.getElementById("para");
const para2 = document.getElementById("para2");
let data = [];
var addData = function(obj){
    data.push(obj);
    updatedom();
}

//function update DOM
 
var getrandomuser = async function(){

    let response =await fetch('https://randomuser.me/api');
    var data =  await response.json();
    const user = data.results[0];
    var newUser = {
        name :`${user.name.first} ${user.name.last}`,
        balance : Math.floor(Math.random()*100000) 
    }
    console.log(newUser);
    addData(newUser);
       
}


var updatedom = function(providedData = data){
   
    main.innerHTML = '<h2><strong>Name</strong> Balance</h2>';
  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('users');
    element.innerHTML = `<strong>${item.name}</strong>₹${item.balance}`;
    main.appendChild(element);
  });

 var doublebalance = function(){
     data = data.map(user =>{
         return{...user, balance: user.balance*2}
     })
     updatedom();
 } 

 var filterrtich = function(){
    data = data.filter((user) => user.balance > 75000 );
    updatedom();
 }
 dblbal.addEventListener('click',doublebalance);
 richfil.addEventListener('click',filterrtich )
 
   
   
   
   
   
   
    /* providedData.forEach((item) => {
   
   var element = document.createElement('p');
   var element2 = document.createElement('p'); 
   element.innerHTML= `<strong>${item.name}</strong>` ;
   element2.innerHTML = `${item.balance}`;
   
   para.appendChild(element);
   para2.appendChild(element2);
  
  });*/
   };



console.log(data);

