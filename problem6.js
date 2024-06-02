const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function rearrangeArray(numbers){
    let removenum = numbers.splice(0,3)
    
    return numbers.concat(removenum)
}
console.log(rearrangeArray(numbers));
