import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from "react-paginate";

export default function Qna() {
    // Date
    let date = new Date;
    let year = date.getFullYear().toString();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let display = `${year}. ${month}. ${day}`;

    // pagination
    const [data, setData] = useState([]); // 데이터 관리
    const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
    const itemsPerPage = 6; // 한 페이지에 보여줄 게시글 갯수
    const totalItem = data.length;
    const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
    const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
    // 리스트 slice 범위
    const endIdx = (page * itemsPerPage); 
    const startIdx = endIdx - itemsPerPage;

    // Data
    useEffect(() => {
        axios.get('/data/qna.json')
            .then((res) => {setData(res.data)})
            .catch((error) => console.log(error));
    }, []);
    
    // 페이지 핸들러 함수
    const handlePageChange = (page) => {
        setPage(page);
    }
    // 페이지 변경 or 리스트 변동 시 pageList 재정의
    useEffect(() => {
        setSliceData(data.slice(startIdx, endIdx));
    }, [page, data]);
    
    console.log('page --> ', page);
    console.log('sliceData --> ', sliceData);

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
            <div>
                <ReactPaginate 
                    previousLabel={'<'} // 이전 페이지 텍스트
                    nextLabel={'>'} // 다음 페이지 텍스트

                    forcePage={page +1} // 현재 페이지
                    pageCount={totalPages} // 총 페이지 수
                    onPageChange={handlePageChange} // 페이지 변경 핸들링 함수

                    containerClassName='pagination' //ul태그
                    pageLinkClassName='pagination-link'
                    activeClassName='pagination-active'
                />
            </div>
        </div>
    );
}