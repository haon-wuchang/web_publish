import React, { useState } from 'react';

export default function Detail({imgList}) {
    
    const list = [
        {
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        },{
            "th":"소재",
            "td":"양털양가죽보들보들"
        }
    ];

    const [count, setCount] = useState(4);
    const length = list.length;

    const handle = () => {
        setCount(length);
    }

    return (
        <div className='detail-box'>
            <img src="https://image.wconcept.co.kr/images/Upload/VendorClosedBanner/20250117103402_3005374.jpg" alt="" />
            {imgList.map((img)=> 
                <img src={img}/>
            )}
            <table className='detail-bottom'>
                <h4>상품 정보 고시</h4>
                {list.map((item,i)=>
                    i<count &&
                    <tr>
                        <th>{item.th}</th>
                        <td>{item.td}</td>
                    </tr>                
                )}
            </table>
            {count < length && <button onClick={handle} >더보기</button>}
        </div>
    );
}

