import './App2.css';
import Avatar from './compenents/Avatar.jsx';
//avatar.jsx 를 app2 파일의 내용옆에 이미지가 뜨게하고싶어서 app2에서 임포트한거임
//그냥 index.js에서 Avatar 파일을 넣으면 이미지만 뜨니까 app2 여기 넣은거양


// 확장자를 jsx 로 주면 리액트로 화면을 만드는 파일이라는걸 알기위해 jsx 로 적은거임
///js 로 하면 헷갈리니까  jsx 로 붙인거 필수는 아님용 js 로 해도대
export default function App2() {
    const name = '필릭스';

    return (             //출력할때는 return (); 이렇게 적어줘야함 {} 금지! //리턴하게되면 index.js의  id root 에 내용이 들어가게된다
        <div>
            <h1 className='title'>[{name}]React test</h1> 
            {/* <h3>welcome to React</h3> */}
            <Avatar></Avatar>
        </div>
    ) ;              
}
//리턴할떄는 h1 따로 h3 따로 이렇게는 못한다 !!!!!리턴할때는 하나의 태그로 그룹핑을해야한다!!!


