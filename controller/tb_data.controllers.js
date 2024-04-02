const db = require("../models");

const tb_data=db.data;
const { Sequelize, Op } = require("sequelize");

exports.create = async (req, res) => {
    console.log(req.body);
    await tb_data.create(req.body).then((data)=>{
        res.send(data)
    })
}


// delete
exports.delete = async (req, res) => {
    let id = req.params.id;
    console.log(id);
    await tb_data.destroy({
        where:{id:id}
    }).then((data)=>{
        res.send(200)
    })
}

//fetching the data
exports.fetchData = async(req,res) =>{
    await tb_data.findAll().then((data)=>{
        res.send(data)
    })
}

//update
exports.updateData=async(req,res)=>{
    let id = req.params.id;
    await tb_data.update(req.body,{where:{id:id}}).then((data)=>{
        res.send(data)
    })
}