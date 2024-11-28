import{kobisBoxOffice, searchMoviePoster} from './kobisCommons.js';


createMovieChartList();

// index에 들어가는 무비차트 리스트 생성함수
function createMovieChartList() {
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
                    rankList.forEach((movie,i) => {   //1등부터 10등까지 가져와야하니까 forEach 돌린거임
                        output += `
                            <li>   
                                <div>
                                    <img src="${poster[i]}" alt="무비차트1" width="200px">
                                </div>
                                <div>
                                    <h3>${movie.movieNm}</h3>
                                </div>
                                <div>
                                    <h5>${movie.audiAcc}</h5>
                                </div>
                            </li>
                        `;
                    });
                    output += `</ul>`;
                    document.querySelector('.content-moviechart-list').innerHTML = output;
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