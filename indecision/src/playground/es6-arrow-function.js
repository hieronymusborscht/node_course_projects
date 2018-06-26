const square = function (x){
    return x * x;
}

// const square_arrow = (x)  =>{ 
//     return x * x 
// };

const squareArrow = (x) => x * x; 
const arrow_fname   = (name)=> { 
    return name.split(' ')[0];
}
console.log(arrow_fname('Fred Saberhagen'));

const arrow_fname_inline = (name) => name.split(' ')[0];

console.log(arrow_fname_inline('Bruce Dickinson'));