import multer from 'multer';

// 9. multer 라이브러리를 이용한 파일 업로드
// multer 라이브러리로 이미지파일을 이미지저장폴더에 저장
//  => npm 사이트에서 카피 해오기 ( 함수 밑에적으면 에러남)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')  // 9-1. 이미지 저장할 경로 설정
    },
    filename: function (req, file, cb) {
        // 9-2.파일명 중복방지를 위한 새로운 파일명 생성
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
      cb(null, uniqueSuffix + '-' + file.originalname); // => a0001_img.jpg 이케 되는거임
    }
  })
// const fupload = multer({ storage: storage }).single(맵핑하는파일이름=>append 에 쓴 이름임);
const fupload = multer({storage:storage}).single('file');  // 9-3. 파일하나만 업로드할거라 .single 한거임

// 8. 파일 업로드 => upload_files 폴더에 저장하는 작업
export const fileUpload = (req,res) => {
    //10. multer 실행결과 가져옴 => 실행결과는 fupload임
    fupload (req,res,(err) => {
        if(err) {
            console.log(err);            
        } else {
            res.json({ // 11. 이 두개 값이 ImageUpload 파일로 넘어감
                uploadImage : res.req.file.path,  // 바꾼 이미지파일이름
                orgImage : req.file.originalname,  // 원래이미지파일이름
            });
        }
    });
}

// 서버 에러나는딩 /////💥💥💢💢