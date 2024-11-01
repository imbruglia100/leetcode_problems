// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

    const encode = (strs) => {
        if (strs.length){
           return strs.join('#b')
        }
        return null
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    const decode = (str) => {
        if(str){
            return str.split('#b')
        }

        if(str === null){
            return []
        }

        return [str]
    }
