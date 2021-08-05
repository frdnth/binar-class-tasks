const Price = (instance, dataType) => {
    return instance.define('price', {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        room_type:{
            type: dataType.STRING(100)
        },
        price:{
            type: dataType.INTEGER
        }
    },{
        tableName: 'price',
        underscored: true,
        timestamp: false
    })
}

module.exports = Price;