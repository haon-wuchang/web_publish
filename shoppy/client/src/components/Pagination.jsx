import React from 'react';

export default function Pagination({page, setPage}) {
    const handlePrev = () => {
        if (page > 1) {
            setPage(page-1);
        } else {
            setPage(1);
        }
    }
    const handlePageNum = (num) => {
        setPage(num);
    }
    const handleNext = () => {
        setPage(page+1)
    }

    return (
        <ul className='una-paginate-ul'>
            <li onClick={handlePrev}>&lt;</li>
            <li onClick={() => handlePageNum(1)}>1</li>
            <li onClick={() => handlePageNum(2)}>2</li>
            <li onClick={handleNext}>&gt;</li>
        </ul>
    );
}

/* 
    ** 사용시 호출하는 페이지에서 아래 로직 필요
        const [data, setData] = useState([]); // 데이터 관리
        const [page, setPage] = useState(1); // 페이지 관리(시작 페이지)
        const itemsPerPage = 6; // 한 페이지에 보여줄 게시글 갯수
        const totalItem = data.length;
        // 리스트 slice 범위 지정
        const endIdx = (page * itemsPerPage); 
        const startIdx = endIdx - itemsPerPage;
    * 주의!!!
        위 로직 사용시 각 페이지마다 itemsPerPage가 다르기 때문에 맞게 조정 필요
        임의로 동작하게 만들어 데이터 갯수에 맞는 페이지네이션 번호가 생성되지 않으므로 추후 수정 필요함(현재 2페이지까지만 생성되게 설정됨)
 */