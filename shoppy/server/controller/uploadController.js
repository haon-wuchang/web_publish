import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        // 파일명 중복방지를 위한 새로운 파일명 생성
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
      // cd(null, 커스텀한내용을가진 변수 + file.originalname);
      cb(null, uniqueSuffix + '-' + file.originalname); 
    }
  })
const fupload = multer({storage:storage}).single('file');  


export const fileUpload = (req,res) => {
    fupload (req,res,(err) => {
        if(err) {
            console.log(err);            
        } else {
            res.json({ //
                // 폴더에 저장된 이미지파일명
                "uploadFileName" : res.req.file.path,  // res => multer가 보내온 결과를 받는거임
                // 사용자가 선택한 기존의 이미지파일명
                "sourceFileName" : req.file.originalname, // req => fileUpload의 req 임
            });
        }
    });
}

