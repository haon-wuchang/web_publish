import React from 'react';
import Form from 'react-bootstrap/Form'; // 1.

export default function ImageUpload() {
    return (
        <div>
            <Form.Control type='file' /> {/*onChange 이벤트처리 */}
        </div>
    );
}

// 2. 화면에 잘 나오는지 확인
//3. Form 에 이벤트처리하기 
