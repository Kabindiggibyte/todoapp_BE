module.exports = (sequelize, Sequelize) => {
    const tb = sequelize.define("tb_data", {
    
      name: {
        type: Sequelize.DataTypes.STRING,
      },
      department:{
        type:Sequelize.DataTypes.STRING
      }     
    }, {
      createdAt: false,
      updatedAt: false
    })
    return tb;
  }