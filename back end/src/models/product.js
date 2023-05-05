
const sequelize = require("sequelize");

const product = (sequelize,DataTypes)=>{
    const Product = sequelize.define('product',{
        name:DataTypes.STRING, //no used
        description:DataTypes.JSON, ///the user that bought genus?
        price:DataTypes.INTEGER, ///amount of tokens
        image:DataTypes.STRING, ///series name
        category:DataTypes.STRING, ///series name
        subcategory:DataTypes.STRING, ///series name

        
    });
    Product.associate = models => {
        Product.belongsTo(models.User);
    }
    return Product;
}


export default product;