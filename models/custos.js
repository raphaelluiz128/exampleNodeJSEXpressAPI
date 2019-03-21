module.exports = (sequelize, DataTypes) => {
  const custos = sequelize.define('custos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true
    },
    value: DataTypes.NUMBER,
    origin: DataTypes.INTEGER,
    destiny: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
    {
      timestamps: false
    });

  custos.associate = function (models) {
 

  };
  return custos;
};