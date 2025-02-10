import multer from 'multer';
import path from 'path';
import fs from 'fs'; 

const storage = multer.diskStorage({ // 디스크스토리지에는 파일 하나만 넣을수잇댕..
    destination: function (req, file, cb) {
      cb(null, 'upload_files/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);
      cb(null, uniqueSuffix + '-' + file.originalname); 
    }
  })
const fupload = multer({storage:storage}).array('files',5); 

// 8.
export const fileUploadMultiple = (req,res) => {
        fupload (req,res,(err) => {
            if(err) {
                console.log(err);            
            } else {
              console.log('uploadfile===',req.files);   
              
            //   const oldFile = req.body.oldFile;
            //   if(oldFile){
            //     const oldFilePath = path.join('upload_files/',oldFile);
            //     if(fs.existsSync(oldFilePath)){
            //       try{
            //         fs.unlinkSync(oldFilePath);   // 이전파일 삭제할때도 하나씩삭제해야댐
            //         // console.log('이전파일 삭제완료',oldFilePath); 
            //       }catch(error){
            //         console.error('이전파일 삭제실패',error);
            //       }
            //     }
            //   }   

                // res 객체를 이용한 전송배열객체 생성 
                let uploadFileName = [];
                let sourceFileName = [];
                let oldFile = [];

                //8-4.req.files 배열의 파일정보를 가져와서 위의 배열에 추가한다
                for(const file of req.files){
                    uploadFileName.push(file.path);
                    sourceFileName.push(file.originalname);
                    oldFile.push(file.filename);
                }

                res.json({  
                    "uploadFileName" : uploadFileName,  
                    "sourceFileName" : sourceFileName, 
                    "oldFile": oldFile
                }); 
            }
        });
}