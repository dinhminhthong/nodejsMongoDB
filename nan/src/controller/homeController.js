import connection from "../config/connectDB";

let getHomepage = async (req, res) => {

    const [rows, fields] = await connection.execute('SELECT name, id, author,type FROM song');
    // console.log(rows);
    return res.render('index.ejs', { dataUser: rows })
}
let getDetail = async (req, res) => {
    let id = req.params.id
    const use = await connection.execute('Select name, id from song where id=?', [id], { single: true })
    console.log(use[0]);
    return res.render('detail.ejs', { use: use[0] })
}
let createData = async (req, res) => {
    let {name,author,type} =req.body;
    // console.log(req.body);
    await connection.execute('insert into song (name, type, author) value (?,?,?)',[name,author,type])
    return res.redirect('/tin-tuc')
}
let deleteData= async(req, res) => {
    let{deleteId} = req.body;
    await connection.execute('DELETE FROM song WHERE (`id` = ?)',[deleteId]);
    return res.redirect('/tin-tuc')
}
let updateData= async( req,res) =>{
    let id= req.params.id;
    const [user] = await connection.execute('Select name,author,type, id from song where id=?',[id])
    // console.log(user);
    return res.render('update.ejs',{dataUser:user})

}
let updateNow= async (req,res) =>{
    let {name,author, type,id} = req.body;
    await connection.execute('UPDATE song SET author = ?, name = ?,type = ? WHERE id =?',[author,name,type,id]);
return res.redirect('/tin-tuc')
}
module.exports = {
    getHomepage,
    getDetail,
    createData, 
    deleteData,
    updateData,
    updateNow
}