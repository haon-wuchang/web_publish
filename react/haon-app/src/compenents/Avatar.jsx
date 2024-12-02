/*파일 이름이랑 똑같은 함수에는 default 를 붙일수잇음 여기서는 avatar에 ㄱㄴ 이거 어딘가에 내용정리함 거기에 추가해*/
import './Avatar.css';


//<Avatar img='/images/wuchang.jpg' name='Wuchang'></Avatar> 얘네는 오브젝트리터럴 형태로 넘어가게된다
// props = {
//     'img':'/images/wuchang.jpg',
//     'name' : 'wuchang'
//     'age' : '5'
//     }

// export default function Avatar(props) {  //프롭스로 받기
export default function Avatar({img,name,age}) {  //이건 구조분해 할당으로 받은거임 {name,img} 이렇게 순서 바꿔도 상관없음

    //이미지 주소 가져오기
    return(
    <div className='avatar-container'>
        {/* <img src={props.img} className="avatar"/> */}   {/*프롭스로 받기*/} 
        <img src={img} className="avatar"/>                 {/*이건 구조분해 할당으로 받은거임*/}
        {/* <div>{props.name}</div> */}                     {/*프롭스로 받기*/} 
        <div>{name}, {age}살</div>                          {/*이건 구조분해 할당으로 받은거임*/}   
    </div>
    );    
}

// Avatar는 컴포넌트이다
// 변수자리의 img,name,age 은 Props 이다








