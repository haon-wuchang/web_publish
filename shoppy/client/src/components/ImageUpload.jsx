import React from 'react';
import Form from 'react-bootstrap/Form'; // 1.
import axios from 'axios'; //5.

export default function ImageUpload() {
    const formData = new FormData(); // 4-0.class로 제공되는FormData가 잇다 => FormData는 [{}] 이 형태이다

    // 3. 파일업로드 이벤트 함수 선언
    const handleFileUpload = (e) => {
        console.log(e.target.files[0]); // 3-2 콘솔로 잘 가져오는지 확인
        
        // 4-1.
        formData.append('file',e.target.files[0]); 
        for(const [key,value] of formData.entries()){
            console.log(`key -- ${JSON.stringify(key)}`);   
            console.log('value',value);
                     
        }
        
        // 5-1. 서버로전송  5-2는 노션에 잇음
        axios.post('http://localhost:9000/uploads',formData)
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
    }

    return (
        <div>
            {/*3. onChange 이벤트처리 , 3-1.브라우저에잇는 이벤트객체를받아서 이벤트함수로 이벤트객체보낼때는 콜백함수형태로 보내야한다 */}
            <Form.Control 
                type='file' onChange={(e)=>{handleFileUpload(e)}}>
            </Form.Control>
                       
        </div>
    );
}

// 2. 화면에 잘 나오는지 확인 ( 로그인파일에 테스트 해봄..)
//5-2. Form 에 이벤트가 발생하면 서버의 폴더에 저장하기위해 새 폴더 만들기 (upload_files)


// <Form.Control accept='image/*'  //타입이 이미지인 애들만 가져오게 제한하는거임

// Form 을 사용하는ㅇ이유는 데이터를 통채로 넘기기위해서 사용한댕
