const express = require('express')
const { User: userModel, Farm: farmModel, Animal: animalModel } = require('./models')

const app= express();

app.get('/', async (req,res)=> {
    userModel.hasMany(farmModel, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'farms',
    });

    farmModel.belongsTo(userModel, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'farms',
    })

    //make relation 1:M farm -> animal
    farmModel.hasMany(animalModel, {
        foreignKey: 'farmId',
        sourceKey: 'id',
        as: 'animals',
    })

    animalModel.belongsTo(farmModel, {
        foreignKey: 'farmId',
        sourceKey: 'id',
        as: 'animals',
    })

    const user = await userModel.findAll({
        include: [
            {
                model: farmModel,
                as: 'farms',
                include: [
                    {
                        model: animalModel,
                        as: 'animals',
                    },
                ],
            },
        ],
    });

    res.send({ user })
});

app.listen(3001, ()=> {
    'server is running on port 3001';
})