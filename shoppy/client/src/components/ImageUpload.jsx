import React from 'react';
import Form from 'react-bootstrap/Form'; 
import axios from 'axios'; 

export default function ImageUpload({getFileName}) { 
    const formData = new FormData(); 

    const handleFileUpload = (e) => {
        console.log(e.target.files[0]); 
        
        // formData.append('file',넘어오는객체);
        formData.append('file',e.target.files[0]); 
        for(const [key,value] of formData.entries()){
            console.log(`key -- ${JSON.stringify(key)}`);   
            console.log('value',value);                     
        }
        
        axios.post('http://localhost:9000/uploads',formData)
            .then(res => {
                console.log('res==',res.data);
                getFileName(res.data); 
            })  
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Form.Control 
                type='file' onChange={(e)=>{handleFileUpload(e)}}>
            </Form.Control>
                       
        </div>
    );
}



// <Form.Control accept='image/*'  //타입이 이미지인 애들만 가져오게 제한하는거임

