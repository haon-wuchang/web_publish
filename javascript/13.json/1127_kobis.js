import{kobisBoxOffice,searchMoviePoster} from './1127_kobisCommons.js';

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
    `;
    
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
                        <td><img src='${poster[i]}' width='100px'></td>
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
          
        })   
        .catch();  //Promise,all end

    })
    .catch(() => {});
 
//순차적으로 비동기식 호출하기위해 getPoster 함수생성  1127
async function getPoster(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
}


} 








