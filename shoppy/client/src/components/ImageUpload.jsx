import React,{useState} from 'react'; // 2-2.
import Form from 'react-bootstrap/Form'; 
import axios from 'axios'; 

export default function ImageUpload({getFileName}) { 
    //2-2. then에서 res.data로 받아온 oldFile 관리할 변수 선언
    const [oldFile,setOldFile] = useState('');
        // 3. 올드파일은 새로운파일이 선택됏을떄 같이 값을 보내야한다

    const formData = new FormData(); 

    const handleFileUpload = (e) => {
        // console.log(e.target.files[0]);   // 새로운파일
        formData.append('file',e.target.files[0]); 
        //3-1.
        formData.append('oldFile',oldFile); // 이전파일명 보내는내용 추가
        
        axios.post('http://localhost:9000/uploads',formData,{
            //4.formData에 문자(oldFile)도 포함해서 보낼때는 옵션을 추가해야한다
            headers :{ 'Content-Type':'multipart/form-data'}, // => 파일과 문자 등 데이터가 추가됐을때 사용하는 문법( 파일만 넘어갈때는 생략가능)
            })
            .then(res => {
                // console.log('res==',res.data);// 2-0.oldFile 잘 넘어오는지 확인
                getFileName(res.data); //2-1. 올드파일은 뉴프로덕트컴포넌트까지 갈 필요는없음
                setOldFile(res.data.oldFile); //2-3.
            })  
            .catch(error => console.log(error));
    }
    
    // console.log('oldFile==',oldFile); //2-4.잘가져오는지 확인
    

    return (
        <div>
            <Form.Control 
                type='file' onChange={(e)=>{handleFileUpload(e)}}>
            </Form.Control>                       
        </div>
    );
}



// <Form.Control accept='image/*'  //accept 는 (타입이 이미지인 애들만 가져오게) 제한하는거임

