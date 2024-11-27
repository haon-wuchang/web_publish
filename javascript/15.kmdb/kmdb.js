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
        document
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
    //검색결과 promise 객체를 이용해서 화면출력
    kmdb(option,typeValue,title)
        .then((result) => {
            let count = result.TotalCount; 
            let output = ``;
            let actorFive = [];  //밑에 더보기, 접기에서도 사용하기위해 if 블럭 밖에 사용
            let actorAll = [];



            if(count){
                let info = result.Data[0].Result[0];
                let directors = result.Data[0].Result[0].directors.director;
                let actors = result.Data[0].Result[0].actors.actor;
                let posterArray = result.Data[0].Result[0].posters.split('|');
                let stillArray = result.Data[0].Result[0].stlls.split('|');
                //포스터랑 스틸컷 링크를 보면 | 이거로 구분되어있고 문자열이긲때문에 split으로 구분해서 나눠준거임 다 붙여놓으면 존나길고 내용가져오기 힘들어서
                let staffs = result.Data[0].Result[0].staffs.staff;
                let title = info.title.replaceAll('!HS','').replaceAll('!HE','');
                
                actors.forEach((actor,index) => {
                    if(index < 5) actorFive.push(actor.actorNm);
                });
                actors.forEach((actor) => {
                    actorAll.push(actor.actorNm);
                });

                
              
                output += `
                <div class="container">
                    <div class="container-content">
                        <h2>${title}</h2>
                        <h5>${info.titleEng} - ${info.prodYear}년</h5>
                        <hr>
                        <p>${info.type} ◾ ${info.rating} ◾ ${info.nation} ◾ ${info.runtime}분 ◾ ${info.repRlsDate}(개봉)</p>
                        <p><span>제작사 : </span><span>${info.company}</span></p>
                        <p><span>감독 : </span><span>${staffs[0].staffNm}</span></p>
                        <p>
                            <span>출연진 : </span><span id='actors'>${actorFive.join()}</span>
                            <button type='button' id='more_actors'>더보기</button>
                            <button type='button' id='close_actors' style='display:none'>접기</button>
                        </p>
                    </div>
                    <div class="container-img">
                        <img src="${posterArray[0]}" alt="">
                    </div>
                </div>
                <div class='container-stills'>
                `;
                
                stillArray.forEach((still) => {
                    output += `<img src='${still}'>`;
                });
                output += `</div>`;

               

            } else {
                output += `<h5>검색하신 데이터가 존재하지 않습니다.</h5>`;
            }
            document.querySelector('#result').innerHTML = output;
            
            //이벤트는 보여주는 작업이 끝난후에 진행해야한다
            //더보기버튼 이벤트 진행
            document
            .querySelector('#more_actors')
            .addEventListener('click',() => {
                document.querySelector('#actors').textContent = actorAll.join();
                document.querySelector('#more_actors').style.display = 'none';
                document.querySelector('#close_actors').style.display = 'inline-block';
            });

            //접기버튼 이벤트 진행
            document
            .querySelector('#close_actors')
            .addEventListener('click',() => {
                document.querySelector('#actors').textContent = actorFive.join();
                document.querySelector('#more_actors').style.display = 'inline-block';
                document.querySelector('#close_actors').style.display = 'none';
            });


        })
        .catch((error) => console.log(error));

   

}  //searchMovieResult end









