import React from 'react';

export default function Header() {
    return (
        <div>
            <div>

            </div>
            <div>
                <ul>
                    <Link to = '/sigol'><li>한적한시골</li></Link>
                    <Link to = '/curtureIcon'><li>컬쳐 아이콘</li></Link>
                    <Link to = '/niceView'><li>최고의전망</li></Link>
                    <Link to = '/hanok'><li>한옥</li></Link>
                </ul>
            </div>
        </div>
    );
}

