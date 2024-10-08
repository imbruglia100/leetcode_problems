function matchingStrings(strings, queries) {
    const res = []

    const c = {}
    strings.forEach((s) => {
        if(c[s]){
            c[s] += 1
        }else{
            c[s] = 1
        }
    })

    queries.forEach((q) => {
        if(c[q]){
            res.push(c[q])
        }else{
            res.push(0)
        }
    })

}
