function lonelyinteger(a) {
    const c = {}

    a.forEach(num => {
        if(c[num]){
            c[num] += 1
        }else{
            c[num] = 1
        }
    })
    console.log(c)

    const valArray = Object.values(c)
    const keyArray = Object.keys(c)

    for(let i = 0; i < valArray.length; i++){
        if(valArray[i] === 1){
            console.log(keyArray[i])
            return keyArray[i]
        }
    }
}


lonelyinteger([0, 0, 1, 2, 1])
