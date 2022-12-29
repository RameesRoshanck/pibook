const multer = require("multer");



var fileStorageEngin = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './public/post-images');    
    }, 
    filename: function (req, file, cb) { 
       cb(null,Date.now()+"--"+file.originalname);   
    }
 });

 module.exports=multer({Storage:fileStorageEngin})