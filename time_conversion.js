function timeConversion(s) {

    const timeArr = s.split(':')
    const dayOrNight = timeArr[timeArr.length-1][2]
    timeArr[timeArr.length-1] = timeArr[timeArr.length-1][0]+timeArr[timeArr.length-1][1]
    if(dayOrNight === "P"){
        if( timeArr[0] === "12"){
            console.log(timeArr.join(':'))
            return timeArr.join(':')
        }
        timeArr[0] = 12 + Number(timeArr[0])
        console.log(timeArr.join(':'))
        return timeArr.join(':')
    }else{
        if( timeArr[0] === "12"){
            timeArr[0] = "00"
            console.log(timeArr.join(':'))
            return
        }
        console.log(timeArr.join(':'))
        return
    }
}

timeConversion('12:45:54PM')
