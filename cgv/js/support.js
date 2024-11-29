window.addEventListener('DOMContentLoaded',(event) => {
    createNoticeList();
})


function createNoticeList(){
    fetch('../json-data/notice.json') //fetch 실행결과 result 는 문자열로 받아오게된다 그래서 json() 사용했따
        .then((result) => {   //then의 인자(result)가 해당 url 주소를 받아오게됨
            return result.json()  // 한줄이니까 {} return 생략가능
        })
        .then((jsonData) => {   //return한 result.json() 을 jsonData가 받아온다
            showNoticeList(jsonData.list);
        })
        .catch((error) => console.log(error));
} //createNoticeList end

//cgv 홈페이지에서 thead 부분의 탭메뉴를 클릭했을때 해당하는 내용만 출력되게하기 filter 사용, onChangeNoticeLst함수
function onChangeNoticeList(code){
    //1. 리스트배열에서 code 를 필터링해서 새로운 배열로반환하기 code:시스템점검 극장 등
    fetch('../json-data/notice.json')
        .then((result) => result.json())
       
        .then((jsonData)=> {   
            alert(code);
            if(code === 'total'){
                showNoticeList(jsonData.list);
            } else {
                // notice,json 파일의 list 의 { } 이 한덩이를 object라고 한거임
                let filterList = jsonData.list.filter((object) => {return object.code === code});  //filter가 실행되면 새로운 배열이 생성된다. 필터링한 (object.code === code)값을 새롭게만든 배열에 넣어주게된다
                //filterList = [{},{}] 이런식으로 나오게 될거임     // 비교하는값이 하나라서 return 이랑 {} 삭제가능
    
                //2. table 출력코드 생성 후 화면 출력
                // showNoticeList(필터링한 배열객체);
                showNoticeList(filterList);
            }

        })
        .catch((error) => console.log(error));







} //onChangeNoticeList end





// 화면 출력하는 함수만들기
function showNoticeList(list) {
    let output = `
    <thead>
        <tr>
            <th>번호</th>
            <th>구분</th>
            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
        </tr>
    </thead>
    <tbody>
    `;

    //forEach <tr>~</tr> 부분 만들어주기
    list.forEach((notice,index) => {
    output += `
        <tr>
            <td>${index+1}</td>
            <td>${notice.type}</td>
            <td><a href='#'>${notice.title}</a></td>
            <td>${notice.date}</td>
            <td>${notice.hits}</td>
        </tr>`;
    });
    output += `
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">1 2 3 4 5</td>
            </tr>
        </tfoot>
    `;              
    document.querySelector('table').innerHTML = output;        
}


