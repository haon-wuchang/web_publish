
import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload.jsx';

export default function NewProduct() {
    const [fnames,setFnames] = useState({}); 


    const getFileName = (filesNames) => { 
        console.log('fileName==>',filesNames);   
        setFnames(filesNames);    
    }


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
                    </li>
                    <li>
                        <input type="text" name='uploadFile' value={fnames.uploadFileName} /> 
                        <input type="text" name='sourceFile' value={fnames.sourceFileName}/>
                    </li>
                    <li>
                        <button type='submit'>상품등록</button>
                        <button type='reset'>취소</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}


