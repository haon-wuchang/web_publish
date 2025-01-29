import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pasination from './Pagination.jsx'

export default function QnA() {
    /** Date **/
    let date = new Date;
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let display = `${year}. ${month}. ${day}`;

    // pagination
    const [data, setData] = useState([]); // 데이터 관리
    const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
    const itemsPerPage = 6; // 한 페이지에 보여줄 데이터 갯수
    const totalItem = data.length; // 데이터 총 갯수
    const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
    const currentPage = 1;
    const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
    // 리스트 slice 범위
    const endIdx = (page * itemsPerPage); 
    const startIdx = endIdx - itemsPerPage;

    /** Data 호출 **/ 
    useEffect(() => {
        axios.get('/data/qna.json')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error));
    }, []);

    /** sliceData 관리 :: 페이지 변경 or 리스트 변동 시 출력 데이터 재정의 **/ 
    useEffect(() => {
        setSliceData(data.slice(startIdx, endIdx));
    }, [page, data]);

    return (
        <div className='product-detail-tab-qna'>
            <div>
                <button>상품문의</button>
            </div>
            <table className='una'>
                <tbody>
                { sliceData && sliceData.map((list) => (
                        <tr>
                            <td><button type='button'>{list.state}</button></td>
                            <td>
                                <span>{list.title}</span>
                                <span>{list.email}</span>
                            </td>
                            <td>{display}</td>
                        </tr>
                )) }
                </tbody>
            </table>
            <Pasination page={page} 
                        totalPages={totalPages}
                        currentPage={currentPage} 
                        setPage={setPage}
            />
        </div> 
    );
} 