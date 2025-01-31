export const getAll = (req,res) => {
    console.log('getall');
    res.send('getAll');
    res.end();
}

export const getPname = (req,res) => {
    res.send(req.params.pname);
    res.end();
}