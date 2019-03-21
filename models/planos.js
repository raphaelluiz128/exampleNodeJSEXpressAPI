module.exports = (sequelize, DataTypes) => {
    const planos = sequelize.define('planos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement:true
      },
  name: DataTypes.STRING,
  time: DataTypes.DECIMAL,
  percent: DataTypes.DECIMAL,
  createdAt:DataTypes.DATE,
  updatedAt:DataTypes.DATE
    }, 
    {
      timestamps:false
    });
  
    planos.associate = function(models) {
     //planos.hasOne(models.usersximages, { foreignKey : 'idimages'});
  
    };
    return planos;
  };