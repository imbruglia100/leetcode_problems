const isPalindrome = (str) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const filtered = str.split('').filter(el => {
        return alpha.includes(el.toLowerCase())
    }).join('')

    for(let i = 0; i < Math.floor(filtered.length/2); i++){

        if(filtered[i].toLowerCase() !== filtered[filtered.length - 1 - i].toLowerCase()){
            return false
        }
    }

    if(filtered.length < 2) return false
    return true
}


console.log(isPalindrome('0P'))
