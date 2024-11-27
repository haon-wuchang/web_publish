import{kobisBoxOffice, searchMoviePoster, kmdbMovieDetail} from './1127_kobisCommons.js';

initForm();

function initForm() {
    const display = `
        <h1>일별 박스 오피스</h1>
        <div id='search'> 
            <select id='type'>
                <option value='Default'>검색일자 선택</option>
                <option value='Daily'>일별</option>
                <option value='Weekly'>주간/주말</option>
            </select>
            <input type='text' id='searchDt' placeholder='예) 20241101'></input>
            <button type='button' id='searchBtn'>검색</button>
        </div>
        <div id='result'></div>

        <div id='imageModal' class='modal'>
            <div class='modal-content'>
                <span id='closeModal' class='close'>&times;</span>
                <img src='' id='modalImage' alt='Modal Image' style='width=100%'>
            </div>
        </div>
    `;
    //div imageModal 이부분 추가함 1127 오후수업 modal 창은 기본적으로는 안보이고 포스터를 눌러야만 보이게하기위해 우선 디스플레이 넌 해논거임

    document.querySelector('body').innerHTML = display;

// 4. 기본 박스오피스 화면 출력 : 20100101
    searchBoxOffice('Daily','20100101');

//5. 셀렉트박스에서 일별인지 주간인지 체크 후 해당하는 json 데이터 출력- 5-1 유효성체크하기

    // 1. 검색 버튼에 이벤트 주기 (display 실행 한 후에 줘야함) 
    let searchButton = document.querySelector('#searchBtn');
    searchButton.addEventListener('click',() => {
        
        //2. 검색창의 유효성 체크 진행   //5-1박스오피스타입 유효성 검사
        let type = document.querySelector('#type');
        let searchDate = document.querySelector('#searchDt');

        if(type.value==='default') {
            alert('박스오피스 타입을 선택해 주세요');
            type.focus();
        }
        else if(searchDate.value==='') {  
            alert('검색일자를 입력해주세요');
            searchDate.focus();
        } else {
            //3. 5-2. 일별,주간주말 박스오피스 정보를 화면에 출력하기
            searchBoxOffice(type.value, searchDate.value);
        }
    });
    
} // end of initForm

//3-1. 박스오피스 정보를 화면에 출력하는 내용 작성
function searchBoxOffice(Ktype, searchDate) {
    kobisBoxOffice(Ktype, searchDate)  //Promise 객체로 리턴됨
    .then((result) => { 
        // const rankType = Ktype.toLowerCase();      
        const type = result.boxOfficeResult.boxofficeType;
        const range = result.boxOfficeResult.showRange;   
    //Ktype이 Daily인지 Weekly 인지 확인하여 해당하는 값에 맞춰서 rankList 를 실행하라
    let rankList = null;
    let posterList = [];

    if(Ktype==='Daily'){
        rankList = result.boxOfficeResult.dailyBoxOfficeList;  
    } else if(Ktype==='Weekly'){
        rankList = result.boxOfficeResult.weeklyBoxOfficeList;  
    }

    //kmdb 연동해서 포스터 가져오기 1127
    // 영화제목이랑 개봉일을 가지고 와서 포스터 찾는거임
    rankList.forEach((element) => {  //여기에 forEach 썻으니 우선 순회는 하는거임 
        let movieNm = element.movieNm;
        let openDt = element.openDt.replaceAll('-','');
        
        // posterList.push(searchMoviePoster(movieNm,openDt));  //이렇게만하면 백그라운드에가서 순서를 보장하지않고 걍찍음(이미지순서가 랜덤하게나오게됨)->비동기처리때매그럼
    //그래서 await로 순서를 지켜서 나오게해야하는데 awit는 함수잇는데에다가 적어야해서 별도로의 함수로 만들어야한다getPoster
        posterList.push(getPoster(movieNm,openDt)); 
    });
        //1127 Promise.all 추가
        Promise.all(posterList) //비동기식처리는 모두 종료가 되도록 실행해야한다. 10개중에 1개만작업하고 끝내는 이런 건 절대안됨 
        .then((poster) => {

        //화면에 테이블형식으로 출력
        let display = `              
                <h3>박스오피스 타입 : ${type}</h3>
                <h3>박스오피스 일자 : ${range}</h3>
                <table>
                    <tr>
                        <th>순위</th>
                        <th>포스터</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일 관객수</th>
                        <th>누적 관객수</th>                    
                    </tr>`;
            rankList.forEach((element, i) => {  //1127 i 추가
                display += `        
                    <tr>       
                        <td>${element.rank}</td>
                        <td>
                            <img src='${poster[i]}' width='100px' class='poster' 
                                id='${element.movieNm},${element.openDt.replaceAll('-','')}'>
                        </td>
                        <td>${element.movieNm}</td>
                        <td>${element.openDt}</td>
                        <td>${element.audiCnt}</td>
                        <td>${element.audiAcc}</td>
                    </tr>
                `;
            });

            display += `</table>`;

            // 테이블 화면 출력하기
            document.querySelector('#result').innerHTML = display;

            // 이미지 클릭 이벤트 출력  1127-오후수업  <img 에 class 추가함 id 는 하나만 적용할수잇어서 나는 이미지10개라 class로 한거임)그리고 얘네를 for문으로 구분해서 출력하는거임
           const images = document.querySelectorAll('.poster'); //이케 모여진 images는 배열로 만들어짐
            images.forEach((image) => image.addEventListener('click',onMovieDetail)); //익명함수대신 일반함수명을 넣어줌 함수()  괄호를 주면 함수실행하고 리턴해서 다시 여기로 오라는거고, 괄호안주면 그 함수주소로 가서 실행하는거임 다시여기로안옴

          
        })    //Promise.all.then() end
        .catch();  //Promise.all end

    })
    .catch(() => {});
 
//이미지 이벤트 처리 함수 1127-오후수업
function onMovieDetail(event) {  //event 에 어떤애꺼가 클릭되고 정보가 뭔지 얘가 다 가지고잇음
    // console.log(event.target.id.split(',')); //이미지를 클릭하면 이미지의 id값이 콘솔창에 나오게됨
    let [movieNm, openDt] = event.target.id.split(',');  //images 가 배열로 만들어져서 구조분해할당 진행
    // console.log(`movieNm=>${movieNm}`); //영화명이랑 날짜 잘 찍히는지 확인
    // console.log(`openDt=>${openDt}`);
    //kmdb 가서 상세정보 가져오기-kmdbMovieDetail 이 promise 객체로 리턴되서 넘어오니까 then catch 사용

    //getElementById = querySelector 같은거임
    const modal = document.getElementById('imageModal');  //<div> id 값을 가져옴
    const modalImage = document.querySelector('#modalImage');  //<img> 의 id 값을 가져옴
    const closeModalBtn = document.getElementById('closeModal'); //<spna>의 id 값을 가져옴

    kmdbMovieDetail(movieNm, openDt)
        .then((result) => {
            const imageSrc = event.target.src;  // 클릭한 이미지의 src를 가져옴
            modalImage.src = imageSrc; //모달창에 이미지 넣기
            modal.style.display = 'block'; //모당창을 표시
            
            //모달 닫기버튼클릭시 모달 닫기
            closeModalBtn.addEventListener('click',() => {
                modal.style.display = 'none'; 
            })
            
            //모달 바깥쪽 클릭 시 모달 닫기
            window.addEventListener('click',(event) => {
                if(event.target === modal) modal.style.display = 'none'})
                    

        }) // kmdbMovieDetail.then end
        .catch((error)=> console.log(error));

    
}  //onMovieDetail end




async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}


} 








// 많이 사용하는 함수들 잘 익혀 split replaceAll join push 등