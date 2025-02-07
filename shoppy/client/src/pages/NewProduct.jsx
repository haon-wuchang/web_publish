
import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';

export default function NewProduct() {
    const [fnames,setFnames] = useState({}); 
// ㄷ.파일이 새로 바뀌면 값을 관리해야하니까 변수 선언
    const [preview, setPreview] = useState('');

    const getFileName = (filesNames) => { 
        // console.log('fileName==>',filesNames);   
        setFnames(filesNames);  
        //ㄹ. 새로운 파일이 들어오면 해당 주소로 이동되게
        setPreview(`http://localhost:9000/${filesNames.uploadFileName}`);
    }
// ㄱ. 파일 등록전 미리보기 작업 => 업로드파일 경로
 
    return (
        <div className='content'>
            <h1>상품등록페이지</h1>
            <form>
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" name='productName'/>
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text" name='productPrice'/>
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" name='productDescription'/>
                    </li>
                    <li>
                        <label>파일업로드</label>
                        <ImageUpload getFileName={getFileName}/> 
                        {/*ㄴ.파일미리보기 태그 생성*/ }
                        {/*  ㅁ. 프리뷰가 잇을때만 해당 칸 나오게  */}
                        {preview && <img src={preview} alt="파일미리보기" style={{'width':'200px'}} />}
                    </li>
                    <li>
                        <input type="text" name='uploadFile' value={fnames.uploadFileName} /> 
                        <input type="text" name='sourceFile' value={fnames.sourceFileName}/>
                    </li>
                    <li>
                        <button type='submit'>파일등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


