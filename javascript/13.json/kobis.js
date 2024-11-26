import{kobisBoxOffice as boxOffice} from './kobisCommons.js';

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
   boxOffice(Ktype, searchDate)  //Promise 객체로 리턴됨
    .then((result) => { 
        // const rankType = Ktype.toLowerCase();      
        const type = result.boxOfficeResult.boxofficeType;
        const range = result.boxOfficeResult.showRange;   
    //Ktype이 Daily인지 Weekly 인지 확인하여 해당하는 값에 맞춰서 rankList 를 실행하라
    let rankList = null;
    if(Ktype==='Daily'){
        rankList = result.boxOfficeResult.dailyBoxOfficeList;  
    } else if(Ktype==='Weekly'){
        rankList = result.boxOfficeResult.weeklyBoxOfficeList;  //근데 이케함녀 랭크리스트는 if안에서만 살수잇음 그래서 if문밖에 let rankList=null 한거야
    }

        // '{name: 홍길동}' 이렇게 되잇는걸 json 데이터로 바꿀때는  JSON.parse 이거 사용가능
        //근데 레퍼런스한 문자열안에 ${~} 이렇게 되있는경우에는 사용을 못함 (result.boxOfficeResult.${~~}showRange)  이케가안되는거
        // rankList = JSON.parse(rankList);

        //화면에 테이블형식으로 출력할거임 
        let display = `              
                <h3>박스오피스 타입 : ${type}</h3>
                <h3>박스오피스 일자 : ${range}</h3>
                <table>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일 관객수</th>
                        <th>누적 관객수</th>                    
                    </tr>`;
                ///+=  하나만들어서 계쏙중첩으로 돌아가게 하려고 +=쓴거야
            rankList.forEach((element) => {  //rankList[index] = element
                display += `        
                    <tr>       
                        <td>${element.rank}</td>
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
    .catch(() => {});


}








