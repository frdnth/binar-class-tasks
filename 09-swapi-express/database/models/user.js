const User = (instance, dataTypes) => instance.define('user', {
  id: {
    type: dataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: dataTypes.STRING(100)
  },
  height: {
    type: dataTypes.STRING(100)
  },
  mass: {
    type: dataTypes.STRING(100)
  },
  created_at: {
    type: dataTypes.DATE(30)
  },
  updated_at: {
    type:dataTypes.DATE(30)
  }
}, {
  tableName: 'user',
  underscored: true
}
)

module.exports = User;