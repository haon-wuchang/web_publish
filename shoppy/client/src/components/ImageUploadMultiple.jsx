import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function ImageUploadMultiple({getFileName}) {
    const [oldFile,setOldFile] = useState([]);  //10-3.

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

            for(const file of files){
                formData.append('files',file);  
            }
                formData.append('oldFiles',oldFile);   //17. 
            
        
            // server.js 로 전송
            axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData,{
                headers :{ "Content-Type":"multipart/form-data"},  // a. 올드파일 지우기위한 작업=>업로드멀티컴포넌트이동
            })                        
                    .then(res => {
                        console.log(res.data);                        
                        getFileName(res.data); //10-1.
                        setOldFile(res.data.oldFile); // 10-4.
                    }) 
                    .catch(error => console.log(error));
                    }

    return (
        <div>
            <Form.Control type='file' 
                onChange={(e)=>{handleFileUploadMultiple(e)}}   
                multiple   />
        </div>
    );
}

