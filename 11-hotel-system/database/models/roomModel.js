const Room = (instance, dataType) => {
    return instance.define('room', {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        person_id:{
            type: dataType.INTEGER
        },
        floor:{
            type: dataType.STRING(100)
        },
        room_type:{
            type: dataType.STRING(100)
        }
    },{
        tableName: 'room',
        underscored: true,
        timestamp: false
    })
}

module.exports = Room;