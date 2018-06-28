var nameVar = 'Andrew';

console.log('nameVar', nameVar);
let nameLet ='Jen';
console.log('nameLet', nameLet);
const nameConst ='betty';

console.log('nameConst', nameConst);
function getPetName(){
    let petName = 'Hal';
    return petName;
}
getPetName();

//console.log(petName);


var fullName = "Andrew Mead";
if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);

}
console.log('firstName', firstName)