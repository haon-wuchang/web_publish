
//3-2. KOBIS API 박스오피스 정보 호출하는 함수
export async function  kobisBoxOffice(type, searchDate) {
    console.log(searchDate);
    
    const key = `82f82f55000c3a4465aa5bceb5a65f72`;
    const url =`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDate}`;
    // console.log(url); 
    
    let kobis = await fetch(url);
    let jsonData = await kobis.json();

    return jsonData;
} 


// kobis 영화리스트 가져오는 호출 함수
export async function kobisMovieList(){
    const key = `82f82f55000c3a4465aa5bceb5a65f72`;    //rest api 가져오기= 저 url 에 rest 잇자나 그거를 json으로 가져오는걸 rest api 라고 한느거같은뎅,,,흠
    const curPage = 1;
    const itemPerPage = 100;
    const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;

    const movieList = await fetch(url);   //비동기인데 순서지켜서 실행하라고 await 씀
    const jsonData = await movieList.json();  //여기서 json 함수를주는 이유는 fetch 라는함수는 가지고오는ㄹ데이터가 json타입인데 문자열로 가져와서 json()으로 json 화시킨다
    return jsonData;  // 지역변수임 jsonData
}


// kobis 영화 상세정보 호출 함수
export async function kobisMovieDetail(movieCd){
    const key = `82f82f55000c3a4465aa5bceb5a65f72`;    
    const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;

    const movie = await fetch(url);
    const jsonData = await movie.json();  
    return jsonData; 
}
///////////////////////////////////////////////////////////////////
//💨 kmdb 연동해서 포스터 가져오기 함수
export async function searchMoviePoster(movieNm,openDt) {
    const ServiceKey = `7B3EZC1YSIK6Q39CJ484`;
    const url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${ServiceKey}`;
    
    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData.Data[0].Result[0].posters.split('|')[0];
    
    
}

//////////////////////////////////////////////////////////////////
//kmdb 영화상세정보가져오기 1127-오후수업
export async function kmdbMovieDetail(movieNm, openDt) {
    const ServiceKey = `7B3EZC1YSIK6Q39CJ484`;
    const url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${ServiceKey}`;
    
    const result = await fetch(url);
    const jsonData = await result.json();
    return jsonData;
}