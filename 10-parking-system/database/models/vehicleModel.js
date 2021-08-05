const Vehicle = (instance, dataTypes) => {
  return instance.define('vehicle', {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    plate_number: {
      type: dataTypes.STRING(100)
    },
    type: {
      type: dataTypes.STRING(100)
    },
    image: {
      type: dataTypes.STRING(100)
    },
    created_at: {
      type: dataTypes.DATE(30)
    },
    updated_at: {
      type:dataTypes.DATE(30)
    }
  }, {
    tableName: 'vehicle',
    underscored: true,
    timestamps: true,
  })
}

module.exports = Vehicle;