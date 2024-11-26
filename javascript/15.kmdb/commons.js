
//kmdb api 호출 함수
export async function kmdb(option,typeValue,title){
    const ServiceKey = `7B3EZC1YSIK6Q39CJ484`;
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`;
        url += `search_json2.jsp?collection=kmdb_new2&detail=Y`;  //코드너무길어서 자른거임 
        // 이거주소에 xml 어쩌구로 있으면 json으로 바꿔야댄당
        url += `&${option}=${typeValue}&title=${title}`;
        url += `&ServiceKey=${ServiceKey}`;
        // console.log(url);
        
        let api = await fetch(url);
        let jsonData = await api.json();  //json 형태로 안바꾸면 movielist.actornM() 이렇게 .써서 넘어가는거가 안됨

        return jsonData;
    }




