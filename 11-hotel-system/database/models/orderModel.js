const Order = (instance, dataType) => {
    return instance.define('order', {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        person_id:{
            type: dataType.INTEGER
        },
        room_id:{
            type: dataType.INTEGER
        },
        total_price:{
            type: dataType.BIGINT
        },
        discount:{
            type: dataType.INTEGER
        },
        duration:{
            type: dataType.INTEGER
        },
        created_at:{
            type: dataType.DATE(30)
        },
        updated_at:{
            type: dataType.DATE(30)
        },
    },{
        tableName: 'order',
        underscored: true,
        timestamp: true
    })
}

module.exports = Order;