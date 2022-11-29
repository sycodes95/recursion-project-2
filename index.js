function mergeSort(n){
    if (n.length < 2){
        return n
    } 
    let low = 0;
    let mid = Math.floor(n.length / 2);
    let high = n.length;
    
    let firstHalf = n.slice(low, mid)
    let secondHalf = n.slice(mid, high)

    console.log('split:', firstHalf, secondHalf)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

console.log(mergeSort([5,3,7,10,4,1,5]))

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length >= 1 && secondHalf.length >= 1){
        if(firstHalf[0] <= secondHalf[0]){
            sorted.push(firstHalf.shift())
        } else {
            sorted.push(secondHalf.shift())   
        }
    }
    console.log('result: ', [...sorted, ...firstHalf, ...secondHalf])
    return [...sorted, ...firstHalf, ...secondHalf]

}

    
    
    



    

    
    
    
    

    


    



