import React from 'react';
import '../style/slider.css';

export default function Slider() {
    const trainCompartment = ['1 칸', '2 칸', '3 칸', '4 칸', '5 칸']; // 이미지 = 칸

    return (
        <div className='train'>  {/*슬라이드*/}
            <div className='show'>{/*보여줄 화면*/}
            {
                trainCompartment.map((item, index) => (
                <div
                    className='compartment'
                    key={index}
                    style={{
                    transform: 'translateX(-1400px)', 
                        // translateX를 이용하여 [이미지 = 칸]을 왼쪽으로 이동, 1400px는 show의 너비
                    transition: 'all 0.4s ease-in-out', 
                        // 슬라이드 처럼 자연스럽게 넘어가기 위한 효과
                    }}
                >
                    {item}
                </div>
                ))
            }
            </div> 
        </div> 
        
    );
}

