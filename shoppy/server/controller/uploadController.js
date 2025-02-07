import multer from 'multer';
import path from 'path'; //5-4.
import fs from 'fs'; //5-4.

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
          // console.log(req.file); // 5.이미지업로드컴포넌트에서 전달된 파일->멀터를 이용한 파일업로드가 진행된다// 1-1.업로드완료후 넘어오는 객체 확인 
          //5-1. 전달된 문자 잘가져오는지 확인 => 이전에 들어온 올드파일 삭제진행해야한다
          // console.log(req.body.oldFile);
          //6. 실행 잘 되는지 확인하면 콘솔로 찍은애들 다 지워주기!!!💥 ( 콘솔에러는 지우면안댐!)
          
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

          //5-3. oldFile 존재 시 업로드 폴더에서 삭제 진행
          const oldFile = req.body.oldFile;
          if(oldFile){
            const oldFilePath = path.join('upload_files/',oldFile);
            if(fs.existsSync(oldFilePath)){
              try{
                fs.unlinkSync(oldFilePath);
                // console.log('이전파일 삭제완료',oldFilePath); 
              }catch(error){
                console.error('이전파일 삭제실패',error);
              }
            }
            // path= 삭제할 경로 ( path 임포트하기 빌트인객체임)
            //올드파일이 잇을때만 삭제해야되니까if문으로 꼭 체크!
            //fs= 파일시스템 => 삭제할경로까지 이동시켜주는 애임 ( 임포트하기 빌트인객체임)
          }




            res.json({ 
                "uploadFileName" : res.req.file.path,  
                "sourceFileName" : req.file.originalname, 
                "oldFile": res.req.file.filename // =>  1-4.'1738892169947-867116037-1.webp' 이거말하는거임
            }); // 1-5.우리는 이값을 이미지업로드컴포넌트로 보낼꺼라 앞에 res 붙인거임
        }
    });
}

