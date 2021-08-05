
const { personModel } = require('../database/config/index')


const personController = {
    getPerson: async (req, res) => {
        try{
            let personDetails = await personModel.findAll();
            //personDetail = personDetails.dataValues
            console.log(personDetails)
            //console.log(await personModel.findAll())
            



            res.send({
                status: 200,
                data: personDetails,
                message: 'Person data has been retrieved.'
            })

        } catch (error) {
            res.send({
                status: 500, 
                message: 'Cannot show the person data.',
                error
            })
        }
    },

    postPerson: async (req, res) => {
        try {
            const { name, age, phone} = req.body
            const personDetails = await personModel.create({
                name,
                age,
                phone
            })


            res.send({
                status: 200,
                data: personDetails,
                message: 'Person data is succesfully inserted.'
            })


        } catch (error) {
            res.send({
                status: 500,
                message: 'Cannot input person data to the database.',
                error
            })
        }
    },
    deletePerson: async (req,res) => {
        try{
            
            const deletePersonId = req.body.id
            let checkPersonDetails = await personModel.findOne({where: {id: deletePersonId}})
            console.log(checkPersonDetails)
            let deletePersonDetails = await personModel.destroy({where: {id: deletePersonId}})


            res.send({
                status: 200,
                data: {
                    checkPersonDetails,
                    deletePersonDetails
                },
                message: 'Succesfully delete the data.'
            })
        } catch (error) {
            res.send({
                status: 500,
                message: 'Unsuccesfully delete the data.',
                error
            })
        }
    }
}



module.exports = personController