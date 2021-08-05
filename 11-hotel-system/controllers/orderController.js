const { Op } = require('sequelize')
const moment = require('moment')
const { orderModel, roomModel, personModel, priceModel } = require('../database/config/index')


const orderController = {
    getOrder: async (req, res) => {
        try{
            const orderDetails = await orderModel.findAll()
            // console.log(orderDetails)

            res.send({
                status: 200,
                data: orderDetails,
                message: 'Order data is successfully retrieved.'
            })
        } catch (erro) {
            res.send({
                status: 500,
                message: 'Cannot retrieve order data.',
                error
            })
        }
    },


    postOrder: async (req, res) => {
        try{

            const {name, age, phone, floor, room_type } =req.body
            const personDetails = await personModel.create({
                name,
                age,
                phone
            })
            const roomDetails = await roomModel.create({
                person_id: personDetails.dataValues.id,
                floor,
                room_type
            })

            const orderDetails = await orderModel.create({
                person_id: personDetails.dataValues.id,
                room_id: roomDetails.dataValues.id,
                totalPrice:0,
                discount:0,
                duration:0, 
                created_at: moment().minute(),
                updated_at: moment().minute()
            })
            

            res.send({
                status: 200,
                data: orderDetails,
                message: 'Order data is successfully inserted.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot insert order data.',
                error
            })
        }
    },


    // updateOrder: async (req, res) => {
    //     try{
    //         const personDetails = await personModel.findOne({
    //             // where: {
    //             //     [Op.and]: [
    //             //         {name: req.body.name},
    //             //         {phone: req.body.phone}
    //             //     ]
    //             // },
    //             order: [['createdAt','DESC']]
    //         })

    //         const orderDetails = await orderModel.findOne({
    //             where: {person_id: personDetails.dataValues.id},
    //             // order: [[
    //             //     'created_at',
    //             //     'DESC'
    //             // ]]
    //         })

    //         console.log(personDetails.dataValues)
    //         console.log(orderDetails)            

    //         res.send({
    //             status: 200,
    //             data: [],
    //             message: 'Order data is successfully updated.'
    //         })
    //     } catch (error) {
    //         res.send({
    //             status: 500,
    //             message: 'Cannot update order data.',
    //             error
    //         })
    //     }
    // },

     updateOrder: async (req, res) => {
        try{
            const orderId = req.body.id

            let orderDetails = await orderModel.findOne({where: {id: orderId}})
            const roomDetails = await roomModel.findOne({where: {id: orderDetails.dataValues.room_id}})
            let priceDetails = await priceModel.findOne({where: {type: roomDetails.dataValues.type} })
            priceDetails = priceDetails.dataValues
            priceDetails = priceDetails.price

            const diffDay = duration(orderDetails.created_at)
            const normal = diffDay * priceDetails

            orderDetails = orderDetails.dataValues
            orderDetails.total_price = normal - diskon(diffDay, normal)
            orderDetails.discount = diskon(diffDay, normal)
            orderDetails.duration = diffDay

            const orderdetailUp = await orderModel.update(orderDetails, {where: {id: orderId}})
            let result = await orderModel.findOne({where: {id: orderId}})

            res.send({
                status: 200,
                data: {
                    order: result
                }
            })
        }  catch(err){
            res.send({
                status: 500,
                data: [],
                message: 'failed insert',
                err
            })
        }
    },


    deleteOrder: async (req, res) => {
        try {
            const deleteOrderId = req.body.id
            let checkOrderDetails = await orderModel.findOne({where: {id: deleteOrderId}})
            let deleteOrderDetails = await orderModel.destroy({where: {id: deleteOrderId}})


            res.send({
                status: 200,
                data: {
                    checkOrderDetails,
                    deleteOrderDetails
                },
                message: 'Order data has been deleted.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot delete order data',
                error
            })
        }
    }
}



module.exports = orderController