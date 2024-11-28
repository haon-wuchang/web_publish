import{kobisBoxOffice, searchMoviePoster} from './kobisCommons.js';



createMovieChartList(1);  

// index에 들어가는 무비차트 리스트 생성함수
function createMovieChartList(page) { 
    const date = new Date();

    const searchDate = date.getFullYear().toString().concat(date.getMonth()+1,date.getDate()-1)
    

    kobisBoxOffice('Daily',searchDate)
        .then((result) => {
            const rankList = result.boxOfficeResult.dailyBoxOfficeList;
            let posterList = [];  

            rankList.forEach((element) => {
                let movieNm = element.movieNm;
                let openDt = element.openDt.replaceAll('-','');
                posterList.push(getPoster(movieNm,openDt))
            });

            Promise.all(posterList)  
                .then((poster) => {    
                    let output = `<ul>`;  //2.class='movie-chart' 추가해줌 에로우라이트 에로우레프트
                    (page===2) ? output += `<li><span class='movie-chart' id='arrow-left'>&lt;&lt;</span></li>`: output +='';  
                    let idx = 0; 
                    (page !==1) ? idx += 5: idx = 0;   

                    rankList.forEach((movie,i) => {   
                        i += idx;  
                        if(i< page * 5) {
    
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
                        } 

                    });
                    (page===1) ? output += `<li><span class='movie-chart' id='arrow-right'>&gt;&gt;</span></li></ul>`: output +='</ul>' ; 
                    
                     document.querySelector('.content-moviechart-list').innerHTML = output;

                    //💥1. 동일한기능을하는애들은 동일한class 로묶어주고 id를 각각 다르게줘서 작업하기 movie-chart==> 이렇게사용한는거 외워
                        const arrows = document.querySelectorAll('.movie-chart'); //두개가 배열로 들어가게됨
                        arrows.forEach((arrow) => {
                            arrow.addEventListener('click',(event) => {
                                // console.log(event.target.id);  //클릭한느애가 누군지 콘솔로그로찍음
                                (event.target.id==='arrow-right')?createMovieChartList(2):createMovieChartList(1); //삼항연산자사용
                            }); //0. try ~ catch 가 너무 코드가 길어서 이렇게 줄인거임
                        });

                }) //Promise.all 
            
                .catch(error => console.log(error)); 
            }) //kobisBoxOffice then
        .catch(); //kobisBoxOffice 끝

}  // createMovieChartList 끝



async function getPoster(movieNm,openDt){
    return await searchMoviePoster(movieNm,openDt); 
}




