import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ReturnDeliveryTableList() {
    const [tables, setTables] = useState([]);
    useEffect(() => {
        axios.get('/data/returnDelivery.json')
        .then(response => {
            setTables(response.data);
        })
        .catch(error => {
        console.error(error); // 에러 처리
        });
    }, []);


return (
  <>
                {
                    tables.map((title, index) => (
                    <tr key={index}>
                
                        <th>{title.title}</th>
                            <td>
                                <ul>
                                    {
                                        title.desc.map((desc) => (
                                            <li className={desc.bold}>
                                                {desc.detail}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </td>
                </tr>
                    ))
                }
</>
    );
};