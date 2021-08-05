const { priceModel } =  require('../database/config/index')

const priceController = {
    getPrice: async (req, res) => {
        try {
            const priceDetails = await priceModel.findAll();

            res.send({
                status: 200, 
                data: priceDetails,
                message: 'Price data is succesfully retrieved.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot get the data price.',
                error
            })
        }
    },


    postPrice: async (req, res) => {
        try {
            const {room_type,price} = req.body
            const priceDetails = await priceModel.create({
                room_type,
                price
            })



            res.send({
                status: 200,
                data: priceDetails,
                message: 'Price data has been inserted.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot insert the data price.',
                error
            })
        }

    },

    deletePrice: async (req, res) => {
        try{

            res.send({
                status: 200,
                data: [],
                message: 'Price data has been deleted.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot delete price data.',
                error
            })
        }
    }
}

module.exports = priceController