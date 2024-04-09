const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
   
    static associate(models) {
      
    }
  }
  Bank.init({
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Bank',
    tableName: 'Banks',
    underscored: false,
    timestamps: false,
  });
  return Bank;
};


// module.exports = (sequelize, DataTypes) => {
//   return sequelize.define('Banks', {
//     cardNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     expiry: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     cvc: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     balance: {
//       type: DataTypes.DECIMAL,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   }, {
//     timestamps: false,
//   });
// };
