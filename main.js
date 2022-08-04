/*
const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false,
    }


];


//For

// for(let i= 0; i<todos.length; i++){
//     console.log(todos[i].text);
// }


//foreach map 
todos.forEach(function(todo){
    console.log(todo); 
});


const todoMap = todos.map(function(todo){
    return todo.text;
});
console.log(todoMap);


const todoFilter = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoFilter);
//spoj map-filter
const todoFilter_Map = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoFilter_Map);
*/


//CONSTRUCTOR FUNCION

/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
};
*/
//klase
/*
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person ('Matko', 'grguljas', '1-1-2020');

console.log(person1);
*/

//DOM
//const ul = document.querySelector('.items');
    // ul.remove();
    //ul.lastElementChild.remove();
    //ul.firstElementChild.textContent = 'Hello!';
    //ul.children[1].textContent = 'Brad';
    //ul.lastElementChild.innerHTML = '<h1>Hello!<h1/>'g

const btn = document.querySelector('.btn');

btn.style.background = 'red';

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(e);
});