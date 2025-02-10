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
// 8.
export const fileUploadMultiple = (req,res) => {
     
  const maxFiles = parseInt(req.query.maxFiles);
  const fupload = multer({storage:storage}).array('files',maxFiles); 

        fupload (req,res,(err) => {
            if(err) {
                console.log(err);            
            } else {
              // console.log('uploadfile===',req.files);   
              console.log('업로드삭제파일 올드파일',req.body.oldFiles);  //b. 
              const oldFileArray = req.body.oldFiles.split(",");
              console.log('oldFileArray==>',oldFileArray);
              
              
            // 올드파일(이전파일) 존재 시 삭제로직 16.
              // const oldFile = req.body.oldFile;
              for(const oldFile of oldFileArray){   // c.
                if(oldFile){
                  const oldFilePath = path.join('upload_files/',oldFile);
                  if(fs.existsSync(oldFilePath)){
                    try{
                      fs.unlinkSync(oldFilePath);   // 이전파일 삭제할때도 하나씩삭제해야댐
                      console.log('이전파일 삭제완료',oldFilePath); 
                    }catch(error){
                      console.error('이전파일 삭제실패',error);
                    }
                  }
                } // if문 end
              }  //for 문 end

                // res 객체를 이용한 전송배열객체 생성 
                let uploadFileName = [];
                let sourceFileName = [];
                let oldFile = [];

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