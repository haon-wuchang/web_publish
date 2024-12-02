import './App2.css';
import Avatar from './compenents/Avatar.jsx';
import AvatarList from './compenents/AvatarList.jsx' ;



//avatar.jsx 를 app2 파일의 내용옆에 이미지가 뜨게하고싶어서 app2에서 임포트한거임
//그냥 index.js에서 Avatar 파일을 넣으면 이미지만 뜨니까 app2 여기 넣은거양



// 확장자를 jsx 로 주면 리액트로 화면을 만드는 파일이라는걸 알기위해 jsx 로 적은거임
///js 로 하면 헷갈리니까  jsx 로 붙인거 필수는 아님용 js 로 해도대
export default function App2() {
    const list = [
        {
        'image' : '/images/wuchang.jpg',
        'name' : 'wuchang',
        'age' : '5'
        },
        {
        'image' : '/images/people1.webp',
        'name' : 'lix',
        'age' : '35'
        },
        {
        'image' : '/images/people2.webp',
        'name' : 'smith',
        'age' : '45'
        }
    ];

    return (             //출력할때는 return (); 이렇게 적어줘야함 {} 금지! //리턴하게되면 index.js의  id root 에 내용이 들어가게된다
        <>
            <div className='container'>
                <Avatar img='/images/wuchang.jpg' name='Wuchang' age='5'></Avatar>
                <Avatar img='/images/people1.webp' name='people1' age='45'></Avatar>
                <Avatar img='/images/people2.webp' name='people2' age='35'></Avatar>
            </div>
            <AvatarList avatar_list = {list}></AvatarList>
        </>
    ) ;              
}

// 이미지 이름을 avatar를 호출할떄마다 값을 다르게넘겨주게 하고싶음
// 함수의 파라미터로 받고 얘를 실행하느 파일에와서 태그에 파라미터를 넣어준다

//App2는 컴포넌트이다.

