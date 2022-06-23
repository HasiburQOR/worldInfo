function getData(){
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    
    .then(data => displayData(data))
} 
getData();

function displayData(data){
    let name = document.getElementById('name');
    let population = document.getElementById('population');
    let flag = document.getElementById('flag');
    
    for(let allData of data){
        let li1 = document.createElement('li');
        li1.innerHTML = allData.name.common;
        name.appendChild(li1);
        let li2 = document.createElement('li');
        li2.innerHTML = allData.population;
        population.appendChild(li2);
        let li3 = document.createElement('li');
        li3.innerHTML = allData.flag;
        flag.appendChild(li3);
    }
}


// function loadUsers(){
//     fetch(`https://restcountries.com/v3.1/all`)
//     .then(res => res.json())
//     .then(users => displayUser(users))
// }
// loadUsers();

// function displayUser(users){
//     let ul = document.getElementById("users");
//     for( let user of users){
//         let li = document.createElement('li');
//         li.innerHTML = user.common;
//         ul.appendChild(li);

//     }
// }