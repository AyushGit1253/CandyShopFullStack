const Sequelize=require('sequelize')
const sequelize=new Sequelize('candyshopfullstack','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize