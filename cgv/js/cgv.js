import{kobisBoxOffice} from './kobisCommons.js';


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
        .then(() => {})
        .catch();

}  // createMovieChartList 끝


