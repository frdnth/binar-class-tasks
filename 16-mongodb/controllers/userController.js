const express = require('express');
const { reset } = require('nodemon');
const userModel = require('../models/userModel')


const userController = {
    getAllUser: async (req,res) => {
        try {
            const userDetails = await userModel.find()
            console.log(userDetails)

            res.send({
                status: 200,
                message: 'Data is successfully retirved.',
                data: userDetails
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot retrieve users data.',
                error
            })
                console.log("🚀 ~ file: userController.js ~ line 21 ~ getAllUser: ~ error", error)
        }
    },


    getUser: async (req,res) => {
        try {
            const userDetails = await userModel.findOne({_id: req.body._id})
            console.log(userDetails)

            res.send({
                status: 200,
                message: 'The data is successfully retrieved.',
                data: userDetails
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot retrieve user data.',
                error
            })
                console.log("🚀 ~ file: userController.js ~ line 35 ~ getUser: ~ error", error)
        }
    },

    createUser: async (req,res) =>{
        try {
            const { username, password, name, address } = req.body
            const newUser = new userModel({
                username,
                password,
                name,
                address
            })
            const userDetails = await newUser.save();
            console.log(newUser);


            res.send({
                status: 200,
                message: 'Data is successfully saved.',
                data: userDetails
            })

        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot save the user data.',
                error
            })
                console.log("🚀 ~ file: userController.js ~ line 34 ~ createUser: ~ error", error)
        }
    },

    updateUser: async (req,res) => {
        try {
            const { username, password, name, address } = req.body;
            const filter = { username };
            const update = { username, password, name, address };
            console.log(filter, update)

            let userDetails = await userModel.findOneAndUpdate(filter,update, { new: true })


            res.send({
                status: 200,
                message: 'Data is successfully updated.',
                data: userDetails
            })

        } catch(error) {
            res.send({
                status: 500,
                message: 'Cannot update the user data.',
                error
            })
                console.log("🚀 ~ file: userController.js ~ line 82 ~ updateUser: ~ error", error)
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { username, password } =req.body;
            const userDetails = await userModel.deleteOne({username})
            console.log(userDetails);


            res.send({
                status: 200,
                message: 'Data is successfully deleted.',
                data: userDetails
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot delete the data.',
                error
            })
                console.log("🚀 ~ file: userController.js ~ line 114 ~ deleteUser: ~ error", error)
        }
    }
}


module.exports = userController