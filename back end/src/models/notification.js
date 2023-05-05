const sequelize = require("sequelize");

const notification = (sequelize,DataTypes)=>{
    const Notification = sequelize.define('notification',{
        title:DataTypes.STRING,
        subTitle:DataTypes.STRING,  ////date
        text:DataTypes.STRING,   ////hour
       
        
    
    
        
    });
    Notification.associate = models => {
        Notification.belongsTo(models.User);
    }
    return Notification;
}


export default notification;