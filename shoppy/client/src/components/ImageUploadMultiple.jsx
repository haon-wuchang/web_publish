import axios from 'axios';
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function ImageUploadMultiple() {
    //1.
    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
            // formdata 가 다른함수에도 사용되면 얘(핸들멀티플) 밖에서 선언하면댕
        const files = e.target.files;
        console.log('files==>',files); //3.
        //3-1. 파일을 5,4,3,2,1  이 순서로 선택해도 자동으로 파일명으로정렬되서 오름차순으로 찍힘
        
        //4.formData 에 append => file 개별로 append 되어야한다 통채로 불가능 (for of 나 forEach 사용)
        // 4-0. files.forEach((file)=>formData.append(file));
        for(const file of files){
            formData.append('files',file);   // 4-1.append 안에 files는 multer 로 넘어갈 key 값임
        }

        // 5. server.js 로 전송 => axios 사용
        axios.post('http://localhost:9000/uploads/multiple', formData)
                .then(res => console.log(res.data))
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

