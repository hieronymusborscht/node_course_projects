// arguments object no longer bound
// this no longer bound
const add = (a, b) => {
    return a+b;
}
console.log(add(55,1));

const user = {
    name:'John',
    cities:['Vancouver', 'Montreal','Toronto'],
    printPlacesLived()  {
      
        return  this.cities.map( (city)=> this.name +' has lived in' +city +'!');
    
    }
}
console.log(user.printPlacesLived());

//challenge 
//
const multiplyer = {
    numbers : [1,2,4,6,17],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    } 
};

console.log(multiplyer.multiply());