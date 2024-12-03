import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App() {
  const imageList = [   //배열안에 오브젝트 리터럴형태로 내용 넣어!!
    {'img': '/images/people1.webp'},
    {'img': '/images/people2.webp'},
    {'img': '/images/people3.webp'}
  ];

  const avatarList = [   //배열안에 오브젝트 리터럴형태로 내용 넣어!!
    {'img': '/images/people1.webp', 'name' : 'smith'},
    {'img': '/images/people2.webp', 'name' : 'john'},
    {'img': '/images/people3.webp', 'name' : 'kelly'}
  ];

  return (
    <div className="App">
        <div className='App-container'>
          <Avatar img='/images/people1.webp' name='smith'></Avatar>
          <Avatar img='/images/people2.webp' name='john'></Avatar>
          <Avatar img='/images/people3.webp' name='kelly'></Avatar>
        </div>

        <div className='App-container'>
          <AvatarImage img='/images/people1.webp'></AvatarImage>
          <AvatarImage img='/images/people2.webp'></AvatarImage>
          <AvatarImage img='/images/people3.webp'></AvatarImage>
        </div>

        <div className='App-container'>
          <AvatarImageList list={imageList}></AvatarImageList>
        </div>

        <div className='App-container'>
          <AvatarList list={avatarList}></AvatarList>
        </div>
    </div>
  );  
}

// Avatar 컴포넌트가 호출되는 App 컴포넌트가 있는 파일에서 <Avatar> 태그안에 키,value 값을 넣어준다
// 그리고 Avatar 컴포넌트가 있는파일로 가서 해당 키,value 값을 props 로 받아온다


