import{kobisBoxOffice, searchMoviePoster} from './kobisCommons.js';

// 해설 숫자다음에 ㄱㄴㄷ 임
createMovieChartList(1);  //💨 9. 1이 기본화면이고 버튼을 누르면 2페이지로 넘어가게 만들것이다

// index에 들어가는 무비차트 리스트 생성함수
function createMovieChartList(page) { //💨3. 1page는 영화포스터이미지 1~5 나오게 2페이지면 6~10의 포스터이미지가 나오게 하려고 이렇게 적은거임
    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth()+1;
    // const day = date.getDate()-1;

 //date.getFullYear(); 이거는 숫자니까 concat 함수를 쓸수없음 그래서 얘를 문자열로바꾸는 toString함수를 사용함
    const searchDate = date.getFullYear().toString().concat(date.getMonth()+1,date.getDate()-1)
    

    kobisBoxOffice('Daily',searchDate)
        .then((result) => {
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = [];  //Promise 객체 타입으로 10개의 포스터이미지가 저장됨

            //랭크리스트로 이름 개봉일  가져와서 포스터가져오는함수에서 이름개봉일넣어서 포스터가져오기
            rankList.forEach((element) => {
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-','');
                posterList.push(getPoster(movieNm,openDt))
            });

            Promise.all(posterList)  //비동기식 처리를 묶어서 한번에 실행 및 관리=>posterList이 promise로 저장되니까  프로미스올이 10개를 자동으로진행한다
                .then((poster) => {    
                    let output = `<ul>`;   //index.html의 content-moviechart-list 이부분 내용이 만들어지는거임
                    (page===2) ? output += `<li><span id='arrow-left'>&lt;&lt;</span></li>`: output +='';  //💨 13. 다시 1페이지로 돌아가는 버튼을 만듬
                    let idx = 0; //💨 6. i값을 바꿀 변수를 하나만든다
                    (page !==1) ? idx += 5: idx = 0;   //💨7. 삼항연산자로 i 값의 변동사항을 만든다

                    rankList.forEach((movie,i) => {   //1등부터 10등까지 가져와야하니까 forEach 돌린거임
                        i += idx;  //💨 8. i =idx 가 안되는이유는 이케하면 0값만 들어가기때문임
                        if(i< page * 5) {
                        //💨1. if 로 체크를 안하면 10개가 다 무비차트에 떠버리기때문에 기본적으로5개만뜨게 설정한다
                        //💨2. 근데 이케 5로 값고정하면 나머지 애들은 출력을 못하자나 그래서 5말고 변수로 값을 가져오게해야ㅐ대
                        //💨4. page*5=> 해당페이지의 5개의 이미지를 보여준다
                        //💨 5. 2페이지를 하고싶으면 if의 i값도 바꿔줘야한다 1페이지면 i=0부터 시작하게 만든다
                        output += `
                            <li>   
                                <div>
                                    <img src="${poster[i]}" alt="무비차트1" width="200px">
                                </div>
                                <div>
                                    <h3>${rankList[i].movieNm}</h3>  
                                </div>
                                <div>
                                    <h5>누적관객수 ${rankList[i].audiAcc}</h5>
                                </div>
                            </li>
                        `;
                        } //💨16.<h3>rankList[i].movieNm  <h5>rankList[i].audiAcc  이렇게 추가함
                        //💨 17.ranklist[i] 추가한이유는 forEach라 2페이지로 넘어가도 얘는 인덱스0번지부터 새로고침해서 출력하기때문에 저렇게 i 값을 줘야만 2페이지로 갔을때 영화명도 변경이된다

                    });
                    (page===1) ? output += `<li><span id='arrow-right'>&gt;&gt;</span></li></ul>`: output +='</ul>' ; //ㄷ.
                     //💨 10. 이미지 넘어가는 버튼을 하나 만든다<li><<span id='arrow-right'>이부분임 이거누르면 2페이지의 포스터가나오게
                    
                     document.querySelector('.content-moviechart-list').innerHTML = output;

                    //💨11. 이벤트 추가
                    try { //ㄹ. try catch 넣은 이유는 arrow-right랑 arrow-left가 교차진행이 안되서 이렇게 넣었다
                        //💨12. 2페이지를 출력하는 함수인 createMovieChartList의 파라미터를 2로변경해서넣기
                        document.querySelector('#arrow-right').addEventListener('click',() => {
                            createMovieChartList(2)})
                    } catch (error) {
                    }
                    try {
                        //💨14. 1페이지로 돌아가게 만듬
                        document.querySelector('#arrow-left').addEventListener('click',() => {
                            createMovieChartList(1)})       
                    } catch (error) {
                    }
                    //💨15. 그런데 이케만 하면 영화포스터는 바뀌지만 제목이 안바뀌게 된다

                    // 💨ㄱ.왼쪽버튼은 1페이지일때는 안보이고 2페이지를 가야보이게 해야하고
                    // 💨ㄴ.오른쪽버튼은 1페이지에서는 보이다가 2페이지로가면 안보이게 해야함
                  
                })

                .catch(error => console.log(error));  //error 하나만 받으니까 error에 괄호 안해도됨
        })
        .catch(() => {}); //kobisBoxOffice 끝

}  // createMovieChartList 끝


// kobis.commons.js 파일의 searchMoviePoster라는 비동기식함수를 순서대로 호출하는 함수를 getPoster이름으로 정의
//겟포스터함수안에 비동기함수인 서치무비포스터함수를 포함하고있어서 실행하는데 시간이 걸리니까 async 사용함
async function getPoster(movieNm,openDt){
    return await searchMoviePoster(movieNm,openDt); 
}