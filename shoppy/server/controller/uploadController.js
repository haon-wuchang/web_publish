import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
      cb(null, uniqueSuffix + '-' + file.originalname); 
    }
  })
const fupload = multer({storage:storage}).single('file');  


export const fileUpload = (req,res) => {
    fupload (req,res,(err) => {
        if(err) {
            console.log(err);            
        } else {
          console.log(req.file); // 1-1.업로드완료후 넘어오는 객체 확인 
          //1-2.업로드 완료된 파일 정보 서버에서 확인하기
          // { 서버 결과값
          //   fieldname: 'file',
          //   originalname: '1.webp',
          //   encoding: '7bit',
          //   mimetype: 'image/webp',
          //   destination: 'upload_files/',
          //   filename: '1738892169947-867116037-1.webp',
          //   path: 'upload_files\\1738892169947-867116037-1.webp',
          //   size: 45842
          // } 1-3.여기 filename앞에 파일저장되는폴더명이 없음  그래서 json보낼때는 filename 으로 보내면된다

            res.json({ 
                "uploadFileName" : res.req.file.path,  
                "sourceFileName" : req.file.originalname, 
                "oldFile": res.req.file.filename // =>  1-4.'1738892169947-867116037-1.webp' 이거말하는거임
            }); // 1-5.우리는 이값을 이미지업로드컴포넌트로 보낼꺼라 앞에 res 붙인거임
        }
    });
}

