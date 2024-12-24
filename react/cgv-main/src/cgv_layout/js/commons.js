// 비동기식 네트워크 연결 실행 함수

export async function fetchJson(url){
    const data = await fetch(url);
    const jsonData1 = await data.json();   //data.json();  이거는 동기식이라서 fetch(url) 은 백그라운드에들어가잇는데 data.json() 은 그냥 바로 출력이되는거임 그래서 await 순서지켜서 하라고 붙이는거임
    
    return jsonData1;

}