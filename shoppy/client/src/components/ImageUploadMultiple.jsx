import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function ImageUploadMultiple({getFileName}) {
    const [oldFile,setOldFile] = useState([]); 

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;

            for(const file of files){
                formData.append('files',file);  
            }
            formData.append('oldFiles',oldFile);  
            
        
            // server.js 로 전송
            axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData,{
                headers :{ "Content-Type":"multipart/form-data"}, 
            })                        
                    .then(res => {
                        console.log(res.data);                        
                        getFileName(res.data); 
                        setOldFile(res.data.oldFile); 
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

