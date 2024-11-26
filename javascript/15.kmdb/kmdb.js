import{kmdb} from './commons.js';

initform();

function initform(){
    let output = `
        <h1>KMDb API</h1>
        <div>
            <select id='type'>
                <option value='default'>선택</option>
                <option value='director'>영화감독</option>
                <option value='actor'>영화배우</option>
            </select>
            <input type='text' id='type_value' placeholder='감독/배우명을 입력해주세요'></input>
            <input type='text' id='title' placeholder='영화명을 입력해주세요'></input>
            <button type='button' id='search'>검색</button>
        </div>
        <div id='result'></div>
    
    `;
    document.querySelector('body').innerHTML = output;



// 버튼이벤트 추가
let btn = document
            .querySelector('#search')
            .addEventListener('click',()=>{

            //유효성체크
            let option = document.querySelector('#type');
            let typeValue = document.querySelector('#type_value');
            let title = document.querySelector('#title');

            if(option.value==='default'){
                alert('옵션을 선택해주세요');
                option.focus();
            } else if(typeValue.value==='') {
                alert('감독/배우명을 입력해주세요');
                typeValue.focus();
            }else if(title.value===''){
                alert('영화제목을 입력해주세요');
                title.focus();
            } else{
                //kmdb API 연동 후  화면실행한 결과값 출력
                searchMovieResult(option.value,typeValue.value,title.value);  //initform 안에잇는 let 으로선언한애들을밖에서도 사용하려고 파라미터로 값을 넣어줌
            }


            });  //let btn end

} //initform end

//kmdb API 연동 후  화면실행한 결과값 출력 함수 정의
function searchMovieResult(option,typeValue,title){
    kmdb(option,typeValue,title)
        .then((result) => {
            let count = result.TotalCount;  // 안나오는뎅
            let output = ``;
            // console.log(count);
            

            if(count){
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director;
                let actors = result.Data[0].Result[0].actors.actor;
                
                console.log(`영화명 ==> ${info.title}`);
                console.log(`영화영문명 ==> ${info.titleEng}`);
                console.log(`감독명 ==> ${directors[0].directorNm}`);
                console.log(`감독영문명 ==> ${directors[0].directorEnNm}`);
                console.log(`actors_length ==> ${actors.length}`);
                                
                actors.forEach((actor,index) => {
                    if(index < 10){
                        console.log(`배우명${index} ==> ${actor.actorNm}`);
                        console.log(`배우영문명${index} ==> ${actor.actorEnNm}`);
                        
                    }
                });

            } else {
                output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
            }
            document.querySelector('#result').innerHTML = output;

            
        })
        .catch((error) => console.log(error));
}










