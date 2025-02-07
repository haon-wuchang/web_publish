import React,{useState} from 'react'; 
import Form from 'react-bootstrap/Form'; 
import axios from 'axios'; 

export default function ImageUpload({getFileName}) { 
    const [oldFile,setOldFile] = useState('');

    const formData = new FormData(); 

    const handleFileUpload = (e) => {
        // console.log(e.target.files[0]); 
        formData.append('file',e.target.files[0]); 
        formData.append('oldFile',oldFile); 
        
        axios.post('http://localhost:9000/uploads',formData,{
            headers :{ 'Content-Type':'multipart/form-data'}, 
            
            })
            .then(res => {
                // console.log('res==',res.data);
                getFileName(res.data); 
                setOldFile(res.data.oldFile); 
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



// <Form.Control accept='image/*'  //accept 는 (타입이 이미지인 애들만 가져오게) 제한하는거임

