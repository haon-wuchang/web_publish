import multer from 'multer';

// multer 라이브러리로 이미지파일을 이미지저장폴더에 저장
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload_files/') // 이미지파일 저장할경로
  },
  filename: function (req, file, cb) { // 저장되는 이미지파일명 맘대로 커스텀해도댐 
    // cb(null, file.fieldname + '-' + Date.now())
    // cb(null, 맵핑하는파일이름.fieldname + 변경할파일명 커스텀)
    cb(null, file.originalname); 
  }
})

// const upload = multer({ storage: storage }).single(맵핑하는파일이름=>append 에 쓴 이름임);
const upload = multer({ storage: storage }).single('file');

export const fileUpload2 = (req,res) => {
  upload(req,res , (err)=>{
    if(err){
      console.log(err);
    }else {
      res.json({
        test:'파일업로드성공'
      });
    }
  });
}