const addToZero = (arr) => {
    for (i = 0; i < arr.length ; i++){
        for (j = 0; j < arr.length ; j ++){
            if (arr[i] + arr [j] !== 0){
                continue
            }
            else{
                return true
            }
        }   
    }
    return false
}
//Runtime O(n(n(1+1))) = O(2n^2) = O(n^2)
//Space complexity O(1)

const hasUniqueChars = (str) => {
    newstr = str.split("")
    arr = []
    for(i = 0 ; i < newstr.length ; i++){
        if (!arr.includes(newstr[i])){
            arr.push(newstr[i])
            continue
        }
        else{
            return false
        }
    }
    return true
}
//Runtime O(1+1+n(1+1+1)) = O(3n+2) = O(n)
//Space complexity O(1)

const isPangram = (str) => {
    let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g","r","s","t","u","v","w","x","y","z"]
    let lowercase = str.toLowerCase()
    lowercaseArr = lowercase.split("")
    for (i = 0; i <alph.length ; i++){
        if (lowercaseArr.includes(alph[i])){
            continue
        }
        else{
            return false
        }

    }
    return true

}
//Runtime O(1 + 1 + 1 + n(1+1)) = O(2n+3) = O(n)
// Space complexity O(1)



const findLongestWord = (arr) => {
    lenArr = []      
    for (i = 0; i < arr.length ; i++){
        len = arr[i].length
        lenArr.push(len)   
    }
    let maxlen = Math.max(...lenArr)
    return maxlen

}
//Runtime O(1+n(1+1)+1) =  O(2 + 2n) = O(n)
// Space complexity O(1)