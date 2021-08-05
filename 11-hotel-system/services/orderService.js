

// const duration = coDate-ciDate // in day

function duration (x){
    const dateIn = x
    const dateOut = new Date()
    const diffDay = (dateOut.getDate() - dateIn.getDate());
    return diffDay
}

function diskon (diff, nor){
    if(diff > 2) {
        const dis = nor * 0.1
        return dis
    } else {
        const dis = nor * 0
        return dis
    }
}

module.exports = {duration, diskon};
