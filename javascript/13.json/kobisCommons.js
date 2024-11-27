
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


/////////////////////////////////////////////////////////////////////////////////////////////

