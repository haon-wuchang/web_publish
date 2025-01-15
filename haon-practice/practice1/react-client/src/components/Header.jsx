import React from 'react';
import Link from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className='header-top'>

            </div>
            <div className='header-bottom'>
                <ul>
                    <Link to = '/sigol'><li>한적한시골</li></Link>
                    <Link to = '/curtureIcon'><li>컬쳐 아이콘</li></Link>
                    <Link to = '/niceView'><li>최고의전망</li></Link>
                    <Link to = '/hanok'><li>한옥</li></Link>
                </ul>
            </div>
        </>
    );
}

