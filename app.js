/*
function descendingOrder(n){
    let arr = Array.from(String(n)); 
    let sortedArr = arr.sort().reverse();
    let result = parseInt(sortedArr.join(''))
    console.log(result)
}
*/

function createPhoneNumber(numbers){
    let area = []
    let three = []
    let four = []
    numbers.forEach((e, i) =>{
        if (i < 3){
            area.push(e)
        } else if (i < 6){
            three.push(e)
        } else {
            four.push(e)
        }
    })
    let result = `(${area.join('')}) ${three.join('')}-${four.join('')}`
    return result
}
    



createPhoneNumber([2,1,3,9,0,8,4,6,7,9])