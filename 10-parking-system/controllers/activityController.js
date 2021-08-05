const moment = require('moment')

const duration = require('../services/parkingActivityService')

const { vehicleModel, activityModel } = require('../database/config')
// ! import model, karena kita melakukan operasi CRUD / database di dalam controller


const activityController = {
  createActivity: async (req, res) => {
    try {
      const vehicleDetails = await vehicleModel.create(req.body)
      //console.log(vehicleDetails);
      const orderDetails = await activityModel.create({
        vehicle_id: vehicleDetails.dataValues.id,
        status: 'in',
        duration: null,
        price: 0
      })

      res.send({
        status: 200,
        data: {
          vehicle: vehicleDetails.dataValues,
          activity: orderDetails.dataValues
        }
      })
    } catch (error) {
      res.send({
        status: 500,
        data: [],
        message: 'failed insert',
        error
      })
    }
  },

  updateActivity: async (req, res) => {
    try {
      const activityId = req.body.id;

      let getActivityDetail = await activityModel.findOne({where: {id:activityId}})
      getActivityDetail = getActivityDetail.dataValues;
      //console.log(getActivityDetail);

      // const dateIn = moment(getActivityDetail.created_at)
      // const dateOut = moment()
      // const diffTime = parseInt(moment.duration(dateOut.diff(dateIn)).asHours())


      // getActivityDetail.duration = diffTime;
      // getActivityDetail.status = 'out'
      // getActivityDetail.price = diffTime*2000
      // console.log(getActivityDetail);

      // const result = await activityModel.findOne({where: {id:activityId}})
      
      // const activityDetails = await activityModel.update(getActivityDetail, {where: {id: activityId}})

      //masalah ada di .update yang kadang jalan kadang nggak


      // res.send({
      //   status: 200,
      //   previous_data: result,
      //   updated_data: activityDetails,
      //   message: 'Data has been updated'
      // })

      const parkingDuration = duration(getActivityDetail.created_at);
      getActivityDetail.status = 'out',
      getActivityDetail.duration = parkingDuration;
      getActivityDetail.price = parkingDuration * 2000;

      const activityDetails = await activityModel.update(getActivityDetail, { where: {id: activityId}})
      const vehicleDetails = await vehicleModel.findOne({where: {id: activityId}})
      const activityResult = await activityModel.findOne({where: {id: activityId}})
      
      res.send({
        status: 200,
        data: {
          vehicle: vehicleDetails,
          activity: activityResult
        },
        message: 'Data has been updated'
      })

    } catch (error) {
      res.send({
        status: 500,
        data: [],
        message: 'Cannot update the data',
        //error
      })
    }
  },

  getActivity: async (req, res) => {
      try{
        const vehicleInfo = await vehicleModel.findAll();
        const activityInfo = await activityModel.findAll();
        console.log(vehicleInfo)

        res.send({
          status: 200,
          data: {
            vehicle: vehicleInfo,
            activity: activityInfo
          }
        })
      } catch (error) {
        res.send({
          status: 500, 
          data: [],
          message: 'Cannot retrieve the data',
          error
        })
      }
  },
  
  deleteActivity: async (req, res) => {
    try {
      const activityDeleteId = req.body.id;
      let vehicleDeleteId = await activityModel.findOne({where: {id: activityDeleteId}})
      vehicleDeleteId = vehicleDeleteId.dataValues.vehicle_id
      console.log(vehicleDeleteId)

      // let getActivityDetail = await activityModel.findOne()
      let deleteActivity = await activityModel.destroy({where: {id: activityDeleteId}})
      let deleteVehicle = await vehicleModel.destroy({where: {id: vehicleDeleteId}})
      console.log(deleteVehicle)

      res.send({
        status: 200, 
        data: deleteActivity,
        message: 'Successfully delete the data'
      })
    } catch (error) {
      res.send({
        status: 500,
        data: [],
        message: 'Cannot delete the data',
        error
      })
    }
  }
};

module.exports = activityController;


