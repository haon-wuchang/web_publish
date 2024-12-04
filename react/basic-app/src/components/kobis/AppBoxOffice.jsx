import { useEffect, useState } from "react";
import BoxOffice from "./BoxOffice.jsx";
import './BoxOffice.css';

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
            <div className="title">
                <BoxOffice 
                        rank = '순위'
                        title = '제목'
                        open = '개봉일'
                        cnt = '당일관객수'
                        total = '누적관객수'
                        amount = '누적매출액'
                        type = 'title'
                ></BoxOffice>
            </div>
            <div className="content">
                {dailyBoxOffice.map((boxoffice) => 
                <div className="rank">
                    <BoxOffice 
                        rank = {boxoffice.rank}
                        title = {boxoffice.movieNm}
                        open = {boxoffice.openDt}
                        cnt = {boxoffice.audiCnt}
                        total = {boxoffice.audiAcc}
                        amount = {boxoffice.salesAmt}
                        type = 'content'
                    ></BoxOffice>
                </div>
                )}
            </div>
        </>
    );
}