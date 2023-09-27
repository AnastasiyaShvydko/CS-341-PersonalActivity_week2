


async function apiFetch(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  


  const getAll = async () => {
    const data = await apiFetch('http://localhost:3001/all_contacts');
    data.forEach((element) => {
        displayAllData(element);
        console.log("hehe", element);
    });
}
    const getOne = async () => {
        const data = await apiFetch('http://localhost:3001/one_contact');
        //const dataArray = Array.from(data);
        //console.log(dataArray);
        
            displayOne(data);
            
        
    //displayAllData(data);

  };
  function displayOne(data){
    let parent = document.getElementById('parent1');
    let newUl = document.createElement('ul');
    let firstName = document.createElement('li');
    let lastName = document.createElement('li');
    let email = document.createElement('li');
    let favoriteColor = document.createElement('li');
    let birthday = document.createElement('li');
    firstName.innerHTML = data.firstName;
    lastName.innerHTML = data.lastName;
    email.innerHTML = data.email;
    favoriteColor.innerHTML = data.favoriteColor;
    birthday.innerHTML = data.birthday;
    newUl.appendChild(firstName);
    newUl.appendChild(lastName);
    newUl.appendChild(email);
    newUl.appendChild(favoriteColor);
    newUl.appendChild(birthday);
    parent.appendChild(newUl);}

function displayAllData(data){
    let parent = document.getElementById('parent2');
    let newUl = document.createElement('ul');
    let firstName = document.createElement('li');
    let lastName = document.createElement('li');
    let email = document.createElement('li');
    let favoriteColor = document.createElement('li');
    let birthday = document.createElement('li');
    firstName.innerHTML = data.firstName;
    lastName.innerHTML = data.lastName;
    email.innerHTML = data.email;
    favoriteColor.innerHTML = data.favoriteColor;
    birthday.innerHTML = data.birthday;
    newUl.appendChild(firstName);
    newUl.appendChild(lastName);
    newUl.appendChild(email);
    newUl.appendChild(favoriteColor);
    newUl.appendChild(birthday);
    parent.appendChild(newUl);

    // displayFirstName(data);
    // displayLastName(data);
    // displayEmail(data);
    // displayFavColor(data);
    // displayBirthDay(data);
}


// function displayFirstName(data){
//     let firstName = document.getElementById('firstName');
//     firstName.innerHTML = data.firstName;

// }

// function displayLastName(data){
//     let firstName = document.getElementById('lastName');
//     firstName.innerHTML = data.lastName;

// }

// function displayEmail(data){
//     let firstName = document.getElementById('email');
//     firstName.innerHTML = data.email;

// }
// function displayFavColor(data){
//     let firstName = document.getElementById('favorite_color');
//     firstName.innerHTML = data.favoriteColor;

// }
// function displayBirthDay(data){
//     let firstName = document.getElementById('birthday');
//     firstName.innerHTML = data.birthday;

// }



// //let myString = sendInfo();
// let button = document.getElementById('send');
//     button.addEventListener('click', () =>{
//     const data = sendInfo();
//     const options = {
//         method: 'POST',
//         body: JSON.stringify( data )  
//     };
//     fetch( 'http://localhost:3000/data', options )
//         .then( response => response.json() )
//         .then( response => {
//             // Do something with response.
//             console.log(response)
//         } );

//     });

// function toJson(string){
//     let jsonObj = JSON.parse(string);
//     console.log(jsonObj)
//     return jsonObj;
// }

// // function main(){
// //     secondButton = document.getElementById('secondButton');
// //     secondButton.addEventListener('click' ,toJson )
// // }
// //sendInfo();
// //getData();
// //const params = toJson()
// // const options = {
// //     method: 'POST',
// //     body: JSON.stringify( params )  
// // };
// // fetch( 'https://domain.com/path/', options )
// //     .then( response => response.json() )
// //     .then( response => {
// //         // Do something with response.
// //     } );



 

 getAll();
 getOne();