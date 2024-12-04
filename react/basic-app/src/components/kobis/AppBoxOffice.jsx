import { useEffect, useState } from "react";
import BoxOffice from "./BoxOffice.jsx";

export default function AppBoxOffice() {
    const [dailyBoxOffice, setDailyBoxOffice] = useState([]);
    useEffect(() => {
        const key = `82f82f55000c3a4465aa5bceb5a65f72`;
        const url =`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=20241203`;
        
        fetch(url)
            .then(data => data.json())
            .then((daily) => setDailyBoxOffice(daily.boxOfficeResult.dailyBoxOfficeList))
            .catch(error => console.log(error));
    });

    return(
        <>
            <h1>KOBIS 박스오피스</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>당일관객수</th>
                        <th>누적관객수</th>
                    </tr>
                </thead>
                <tbody>
                    {dailyBoxOffice.map((boxoffice) => 
                        <BoxOffice 
                            rank = {boxoffice.rank}
                            title = {boxoffice.movieNm}
                            open = {boxoffice.openDt}
                            cnt = {boxoffice.audiCnt}
                            total = {boxoffice.audiAcc}
                         ></BoxOffice>
                    )}
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    );
}