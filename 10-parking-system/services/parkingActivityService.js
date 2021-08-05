function duration(x) {
    const dateIn = x;
    const dateOut = new Date();
    const parkingDuration = (dateOut.getTime() - dateIn.getTime())/3600000;
    return parkingDuration;
}

module.exports = duration;




























// const moment = require('moment')

// function parking(vehicleOutAt) {
//     const dateIn = moment(vehicleOutAt)
//     const dateOut = moment()
//     var diffTime = parseInt(moment.duration(dateOut.diff(dateIn)).asHours())

//     var fee = diffTime*2000
//     var status = 'out'
// }

// const parkingUpdate = {
//     duration: diffTime,
//     status,
//     fee
// }


// module.exports = {
//     parking,
//     parkingUpdate
// }