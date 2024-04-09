const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
   
    static associate(models) {

      Rating.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
      Rating.belongsTo(models.Offer, { foreignKey: 'offerId', targetKey: 'id' });

    }
  }
  Rating.init({
    offerId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    mark: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
  }, {
    sequelize,
    modelName: 'Rating',
    tableName: 'Ratings',
    underscored: false,
    timestamps: false
  });
  return Rating;
};

// module.exports = (sequelize, DataTypes) => {
//   const Rating = sequelize.define('Ratings', {
//     offerId: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     mark: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//       defaultValue: 0,
//       validate: {
//         min: 0,
//         max: 5,
//       },
//     },
//   },
//   {
//     timestamps: false,
//   });

//   return Rating;
// };
