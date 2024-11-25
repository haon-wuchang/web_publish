import{kobisMovieList} from './kobisCommons.js';

let mList = null; // 영화리스트를 가지고있는 전역변수. movieList 의 주소를 가지고있어야한다

initform();    //위에 놨쓰니까 호이스팅 되도록 일반함수로 만들어주기

function createMovieLIst(){      //얘를 다른함수에서도 쓰고싶어서 전역변수로 바꿔야댕
    kobisMovieList()
        .then((list) => {
            const movieList = list.movieListResult.movieList;
            const tcount = list.movieListResult.totCnt;
                console.log(`total=${tcount}`);
                console.log(`list=${movieList.length}`);

                mList = movieList;
                // for(let movie of mList){
                //     console.log(movie.movieNm);                   
                // }
            })
        .catch((error) => console.log(error));
}


function initform() {
    //KOBIS 에서 영화리스트 가져오기
    createMovieLIst();

    let display = `
        <h1>KOBIS 영화 검색</h1>
        <div>
            <input type='text' id='search_title' placeholder='영화명을 입력해주세요'>
            <button type='button' id='search_button'>검색</button>
        </div>
        <div id='result'></div>
    
    `;
    document.querySelector('body').innerHTML = display;

    //유효성 체크
    document.querySelector('#search_button').addEventListener('click',()=>{
        let title = document.querySelector('#search_title');
        if(title.value.trim() === ''){    //trim 앞뒤 공백 삭제
            alert('영화명을 입력해주세요');
            title.focus();
        } else {
            //영화리스트 출력하는 함수 호출
            searchMovieList(title.value.trim());
        }
    });

} //initform 끝


//영화코드 검색 함수 
function searchMovieCd(title) {
    let movieCd = '';
    if(mList !== null){
        //1. 필터링    필터링결과가 배열로 리턴됨
        let filterMovie = mList.filter((movie) => movie.movieNm === title);
        // console.log(`제목 = ${filterMovie[0].movieNm}`);
        // console.log(`code = ${filterMovie[0].movieCd}`); 

        movieCd = filterMovie[0].movieCd;
    } 
    return movieCd;
}


//영화리스트 검색 함수 
function searchMovieList(title) {
    let movieCd = searchMovieCd(title);
    console.log(`code ==> ${movieCd}`);
    
} //searchMovieList
