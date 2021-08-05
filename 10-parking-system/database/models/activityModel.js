const Activity = (instance, dataType) => {
  return instance.define('activity', {
      id:{
          type: dataType.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      vehicle_id: {
          type: dataType.STRING(100)
      },
      status:{
          type: dataType.STRING(100)
      },
      duration:{
          type: dataType.STRING(100)
      },
      price:{
          type: dataType.STRING(100)
      },
      created_at:{
          type: dataType.DATE(30)
      },
      updated_at:{
          type: dataType.DATE(30)
      }
  },{
      tableName: 'activity',
      underscored: true,
      timestamps: true,
  })
}

module.exports = Activity;