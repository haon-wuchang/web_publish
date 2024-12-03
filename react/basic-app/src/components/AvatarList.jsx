import Avatar from "./Avatar.jsx";

export default function AvatarList ({list}) {
    return(
        <ul>
            {list.map((item) => 
                <li>
                    <Avatar img={item.img} name={item.name}></Avatar>
                </li>
            )}
        </ul>

    );

}

// item 1 =     {'img': '/images/people1.webp', 'name' : 'smith'},


// 반복시킬 컴포넌트(Avatar)를 임포트 해준다
// 해당 컴포넌트가(AvatarList) 실행되는 컴포넌트파일(App)에가서 키,벨류 값 넣는다
//해당 컴포넌트 파일에 와서 props 로 해당 키값을 받는다(구조분해할당)
//map 으로 순회시키면서 출력을 한다
//순회할 내용 작성을 한다 반복시킬 컴포넌트 파일(Avatar)에가서 props 값이 뭔지 확인 후
//해당 컴포넌트파일(AvatarList)에 작성해준다
//=> <Avatar img={item.img} name={item.name}></Avatar>


// 리액트로 만든게아닌 홈페이지를 내가 리액트로 부분만 바꿔서 만드는것도 나즁에해바(주소바뀌고 화면깜빡이면 리엑트아님용)