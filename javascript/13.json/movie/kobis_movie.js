import{kobisMovieList,kobisMovieDetail} from './commons.js';
// 11/25 수업
let mList = null; // 영화리스트를 가지고있는 전역변수. movieList 의 주소를 가지고있어야한다

initform();    //함수정의보다 함수호출을 먼저했으니 호이스팅 되도록 일반함수로 만들어주기

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


//영화 상세 검색 함수 
function searchMovieList(title) {
    let movieCd = searchMovieCd(title);
    console.log(`code ==> ${movieCd}`);
    
    //movieCd를 api 에 넘겨서 상세정보 가져와서 출력하기
    kobisMovieDetail(movieCd)
        .then((result) => {
            let info = result.movieInfoResult.movieInfo;

            let display =`
                        <ul>
                            <li>
                                <label>영화코드 : </label>
                                <span>${info.movieCd}</span>
                            </li>
                            <li>
                                <label>영화명 : </label>
                                <span>${info.movieNm}</span>
                            </li>
                            <li>
                                <label>영문영화명 : </label>
                                <span>${info.movieNmEn}</span>
                            </li>
                            <li>
                                <label>감독 : </label>
                                `;

                            info.directors.forEach((director) => {
                                display += `<span>${director.peopleNm} | </span>`;
                                display += `<span>${director.peopleNmEn}</span>`;
                            });

                            display+= `<li>
                                       <label>배우명 : </label>
                                       <ul>`;

                            info.actors.forEach((actor) => {
                                display += `<li><span>${actor.peopleNm} | </span>`;
                                display += `<span>${actor.peopleNmEn}</span></li>`;   
                            });

                            display += `</ul>
                            </li>
                        </ul> `;
            document.querySelector('#result').innerHTML = display;
        })

        .catch((error) => console.log(error));

} //searchMovieList
