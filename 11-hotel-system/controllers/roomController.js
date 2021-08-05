
const { roomModel, personModel } = require('../database/config/index')

const roomController = {
    getRoom: async (req, res) => {
        try {
            const roomDetails = await roomModel.findAll()
            console.log(roomDetails)





            res.send({
                status: 200,
                data: roomDetails, 
                message: 'Room data has been retrieved.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot retrieve room data.',
                error
            })
        }
    },


    postRoom: async (req, res) => {
        try{
            const personId = req.body.id
            // const roomDetails = await roomModel.findAll()
            const {floor, type} = req.body
            const roomDetails = await roomModel.create({
                person_id: personId,
                floor, 
                room_type,
            })
            console.log(roomDetails)

            res.send({
                status: 200,
                data: roomDetails,
                message: 'Room data hase been inputted'
            })


        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot insert room data.',
                error
            })
        }
    },


    updateRoom: async (req, res) => {
        try{




            res.send({
                status: 200,
                message: 'Room data has been updated.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot update the room data.',
                errors
            })
        }
    },

    deleteRoom: async (req, res) => {
        try {

            res.send({
                status: 200,
                data: [],
                message: 'Room data has been deleted.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot delete the room data.',
                error
            })
        }
    }
}

module.exports = roomController