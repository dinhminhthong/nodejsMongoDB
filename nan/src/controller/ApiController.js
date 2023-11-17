import connection from "../config/connectDB";
let getAllUser = async (req, res)=>{
    const [rows, fields] = await connection.execute('SELECT name, id FROM song');
return res.status(200).json(
    rows)
}
let createData = async (req, res)=>{

    let {name,author,type} =req.body;
    if(!name||!author||!type){
        res.status(404).json({
            message: "không có dữ liệu"
        })
    }
    await connection.execute('insert into song (name, type, author) value (?,?,?)',[name,author,type])
    return res.status(200).json({
        message: "oke"
    })
}
module.exports={
    getAllUser,
    createData
}