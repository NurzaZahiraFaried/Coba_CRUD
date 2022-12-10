const Content = require('../models/contentModels');

module.exports ={
    index: (req, res) => {
        Content.fetchData(req.db, (err, rows) => {
            if (err){
                req.flash('error', '$(error.message)')
                res.render('content/index', { data: ''});
            } else {
                res.render('content/index', {data : rows})
            }
        })
    },
    store: (req, res) =>{
        const {nim, nama, jurusan} = req.body;
        var form_data ={
            nim, 
            nama, 
            jurusan,
        }
    
    
    
        Content.insertData(req.db, form_data, (err, result) =>{
            if (err) {
                req.flash('error', `${error.message}`);
                res.redirect('/content');
            
            } else {
            req.flash('success', `Data berhasil dimasukkan ke database`);
            res.redirect('/content');
            }
        })
    },
    update: (req, res) => {
        const { id, nim, nama, jurusan } = req.body;
        var form_data ={
            nim,
            nama,
            jurusan
        }
        Content.updateData(req.db, id, form_data, (err, result) => {
            if (err) {
                req.flash('error', `${error.message}`)
                res.redirect('/content');
            } else {
                req.flash('success', 'Data berhasil diupdate');
                res.redirect('/content');
            }
        })
    },
    delete: (req, res) => {
        const { id } = req.params;
        Content.deleteData(req.db, id, (err) => {
            if (err) {
                req.flash('error', `${error.message}`);
                res.redirect('/content')
            } else {
                req.flash('success', 'Data berhasil dihapus');
                res.redirect('/content');
            }
        })
    }
}