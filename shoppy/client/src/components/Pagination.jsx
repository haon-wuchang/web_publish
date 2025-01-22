import React from 'react';

export default function Pagination({page, totalPages, currentPage, setPage}) {
    const handleFirst = () => {
        setPage(1);
    }
    const handlePrev = () => {
        if (page > 1) {
            setPage(page-1);
        } else {
            setPage(1);
        }
    }
    const handlePageNum = (num) => {
        setPage(num);
        console.log('num --> ', num);
    }
    const handleNext = () => {
        if (page+1 > totalPages) {
            setPage(page);
        } else {
            setPage(page+1)
        }
    }
    const handleLast = () => {
        setPage(totalPages);
    }

    return (
        <>
        <ul className='una-paginate-ul'>
            <li onClick={handleFirst}>&lt;&lt;</li>
            <li onClick={handlePrev}>&lt;</li>
            { [...Array(totalPages)].map((a, i) =>
                <>
                    {currentPage + i <= totalPages && (
                        <li className={ currentPage+i === page ? 'qna-paginate-li-border' : ''} 
                            onClick={() => {handlePageNum(currentPage+i)}}>
                            {currentPage+i}
                        </li>
                    )}
                </>
            )}
            <li onClick={handleNext}>&gt;</li>
            <li onClick={handleLast}>&gt;&gt;</li>
        </ul>
        </>
    );
}

/******
 * 주의
    1. 호출 페이지에서 아래 로직 필요 
        const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
        const itemsPerPage = Num; // Num = 한 페이지에 보여줄 데이터 갯수
        const totalItem = data.length; // 데이터 총 갯수
        const totalPages = Math.ceil(totalItem / itemsPerPage); // 총 페이지 갯수 계산
        const currentPage = 1;
        const [sliceData, setSliceData] = useState([]); // 현재 페이지에서 보여줄 리스트(slice)
        // 리스트 slice 범위
        const endIdx = (page * itemsPerPage); // 반드시 endIdx가 startIdx보다 먼저 선언되어야 함
        const startIdx = endIdx - itemsPerPage;
    2. 호출 페이지에서 넘겨 받을 Props
        page, totalPages, currentPage, setPage
    3. 추가 수정 있을 예정입니다~
******/