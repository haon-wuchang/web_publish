
import React, { useState ,useRef} from 'react';
import ImageUpload from '../components/ImageUpload.jsx';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function NewProduct() {
    const navigate = useNavigate();
    const [fnames,setFnames] = useState({}); 
    let [formData, setFormData] = useState({});

    const [preview, setPreview] = useState('');

        const getFileName = (filesNames) => { 
            // console.log('fileName==>',filesNames);   
            setFnames(filesNames);  
            setPreview(`http://localhost:9000/${filesNames.uploadFileName}`);
        }


    // b.폼 입력시 값을 formData에 추가하는 이벤트 처리 진행
    const handleChange = (e) => {
        const {name, value } = e.target;
        console.log(name,value);
        setFormData({...formData, [name]:value });
    }
    //c-1.
    const productNameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        //c. 벨리데이션체크
        if(productNameRef.current.value === ''){
            alert('상품명 입력해');
            productNameRef.current.focus();
            return false;
        } else {            
            // d.업로드파일 정보를 formData에 추가하기 => 이제 이 정보를 서버로 전송함, 콘솔로 정보 전부 가져오는지 확인
            formData = ({...formData, 'upload_file':fnames.uploadFileName,
                'source_file':fnames.sourceFileName});                
                // console.log(formData); // price 는 폼에서 숫자로 입력햇지만 데이터가 넘어갈때는 문자열로넘어감    
            
                //e. 서버 전송 작업 => 서버가 받아서 mvc 진행
            axios.post('http://localhost:9000/product/new', formData)
                .then(res =>{ 
                    // g.
                    if(res.data.result_rows === 1){
                        alert('상품등록 완료');
                        navigate('/all');
                    }else{
                        alert('상품등록 실패');
                    }
                    console.log('res===',res.data);
                })
                .catch(error => {
                    alert('상품등록 실패');
                    console.log(error);
                });
        }
    }


    return (
        <div className='content'>
            <h1>상품등록페이지</h1>
            <form onSubmit={handleSubmit} >
                <ul>
                    <li>
                        <label>상품명</label>
                        <input type="text" name='productName' 
                            // b. 값 관리할애들한테 함수 넣기
                            // 상품명은 비어잇으면 안되니까 유효성체크진행
                             onChange={handleChange}
                             ref = {productNameRef}
                            //  (e) => {handleChange(e)} 이케 안받는 이유는 input 태그일때는 자체적으로 e 받아옴
                        />
                    </li>
                    <li>
                        <label>가격</label>
                        <input type="text" name='productPrice'
                                onChange={handleChange}/>
                    </li>
                    <li>
                        <label>상품정보</label>
                        <input type="text" name='productDescription'
                                onChange={handleChange}/>
                    </li>
                    <li>
                        <label>파일업로드</label>
                        <ImageUpload getFileName={getFileName}/> 
                        {preview && <img src={preview} alt="파일미리보기" style={{'width':'200px'}} />}
                    </li>
                    <li>
                        <input type="text"/* 나중에 hidden 으로 변경 */ name='uploadFile' 
                                value={fnames.uploadFileName}
                                 /> 
                        <input type="text" name='sourceFile' value={fnames.sourceFileName}
                                />
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


