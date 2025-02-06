import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React from 'react';

export default function ImageUploadCopy() {
    const formData = new FormData();

    const handleFile = (e) => {
        formData.append('file',e.target.files[0]);
        // 서버전송작업
        axios.post('http://localhost:9000/uploads2',formData)
            .then(res => console.log('res===',res.data))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <Form.Control
                type='file'
                onChange={(e)=>{handleFile(e)}} />
        </div>
    );
}

