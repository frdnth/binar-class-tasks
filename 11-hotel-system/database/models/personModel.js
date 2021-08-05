const Person = (instance, dataType) => {
    return instance.define('person', {
        id:{
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: dataType.STRING(100)
        },
        password:{
            type: dataType.STRING(100)
        },
        name:{
            type: dataType.STRING(100)
        },
        age:{
            type: dataType.INTEGER
        },
        phone:{
            type: dataType.BIGINT
        },
    },{
        tableName: 'person',
        underscored: true,
        timestamp: true
    })
}

module.exports = Person;