import '../css/Avatar.css';
import AvatarImage from './AvatarImage.jsx';


export default function Avatar({img,name}) {
    
    return(
    //return 안에 들어가는게 jsx 문법이다
        <div className='avatar-container'>
            <AvatarImage img={img}></AvatarImage>
            <p>{name}</p>
        </div>    
    );


//해당 컴포넌트가 호출되는파일(=import 되는파일)에서 <해당태그>에 키 value값 넣어주면댕 
//그리고 해당컴포넌트 파일로 가서 props로 키,value 값을 받아오면 된다.

// => AvatarImage 컴포넌트는 Avatar컴포넌트에서 호출이 되니까 
//Avatar컴포넌트에 넣어주는것이다 <AvatarImage img='./images/people.webp ' => img가 키값이고 이미지주소가 value값임
}