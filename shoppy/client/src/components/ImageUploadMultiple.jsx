import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ImageUploadMultiple() {

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        if(files.length < 6){            
            //formData 에 append  
            // for(let i ; i<files.length ; i++){
            //     formData.append('files',files[i]);
            // }
            for(const file of files){
                formData.append('files',file);  
            }
            // for (const [key ,value] of formData)
            // console.log(key,value); 
        
            // server.js 로 전송
            axios.post('http://localhost:9000/uploads/multiple', formData)
                    .then(res => {
                        console.log(res.data)//8-5. 배열로 잘 가져오는지 확인

                    }) 
                    .catch(error => console.log(error));
        }else{
            alert('파일업로드는 최대 5개까지 가능');
        }
    }

    return (
        <div>
            <Form.Control type='file' 
                onChange={(e)=>{handleFileUploadMultiple(e)}}   
                multiple   />
        </div>
    );
}

