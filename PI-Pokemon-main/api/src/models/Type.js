const { DataTypes } =require('sequelize');
module.exports = (sequelize) => {
const Type = sequelize.define('sequelize',{

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

})
    return Type;
}