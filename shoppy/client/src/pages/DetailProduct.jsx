import React from 'react';
import { useParams } from 'react-router-dom';

export default function DetailProduct() {
    const {pid} = useParams();     //useParams 에  {"pid":pid} 이렇게  들어잇당 => 구조분해할당으로 가져오기

    return (
        <div>
            <h1>{pid}</h1>
        </div>
    );
}

