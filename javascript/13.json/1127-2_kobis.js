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
 

    document.querySelector('body').innerHTML = display;

// 기본 박스오피스 화면 출력 : 20100101
    searchBoxOffice('Daily','20100101');

//셀렉트박스에서 일별인지 주간인지 체크 후 해당하는 json 데이터 출력,유효성체크하기

    // 검색 버튼에 이벤트 주기 
    let searchButton = document.querySelector('#searchBtn');
    searchButton.addEventListener('click',() => {
        
        // 검색창의 유효성 체크 진행
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
            //일별,주간주말 박스오피스 정보를 화면에 출력하기
            searchBoxOffice(type.value, searchDate.value);
        }
    });
    
} // end of initForm

//박스오피스 정보를 화면에 출력하는 내용 작성
function searchBoxOffice(Ktype, searchDate) {
    kobisBoxOffice(Ktype, searchDate)  
    .then((result) => { 
        // const rankType = Ktype.toLowerCase();      
        const type = result.boxOfficeResult.boxofficeType;
        const range = result.boxOfficeResult.showRange;   
    //Ktype이 Daily인지 Weekly 인지 확인하여 해당하는 값에 맞춰서 rankList 를 실행
    let rankList = null;
    let posterList = [];

    if(Ktype==='Daily'){
        rankList = result.boxOfficeResult.dailyBoxOfficeList;  
    } else if(Ktype==='Weekly'){
        rankList = result.boxOfficeResult.weeklyBoxOfficeList;  
    }

    //kmdb 연동해서 포스터 가져오기 
    rankList.forEach((element) => {  
        let movieNm = element.movieNm;
        let openDt = element.openDt.replaceAll('-','');
        
        posterList.push(getPoster(movieNm,openDt)); 
    });

        Promise.all(posterList) 
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
            rankList.forEach((element, i) => { 
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

            // 이미지 클릭 이벤트 출력
           const images = document.querySelectorAll('.poster'); 
            images.forEach((image) => image.addEventListener('click',onMovieDetail)); 

          
        })    
        .catch();  //Promise.all end

    })
    .catch(() => {});
 
//이미지 이벤트 처리 함수 --정리 ㄱㄱ
function onMovieDetail(event) {  //event인자가 어떤게 클릭되고 정보가 뭔지 다 가지고있다
    // console.log(event.target.id.split(',')); //이미지를 클릭하면 이미지의 id값이 콘솔창에 나오게됨
    let [movieNm, openDt] = event.target.id.split(',');  //images 가 배열로 만들어져서 구조분해할당 진행 --??/
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
