import Avatar from "./Avatar.jsx";

// export default function AvatarList(props) {
export default function AvatarList(avatar_list) {  //구조분해할당

    return(
        <ul>
            {/* {props.avatar_list.map((object) =>  */}
            {avatar_list.avatar_list.map((object) =>   //구조분해할당
                <li><Avatar img={object.image} 
                            name={object.name} 
                            age={object.age}>                           
                    </Avatar>
                </li>
            )}
        </ul>
    );
}



// AvartarList 가 받을때 이렇게  됨
// props = {
//     avatar_list : [
//         {
//         'image' : '/images/wuchang.jpg','name' : 'wuchang','age' : '5'},
//         {
//         'image' : '/images/people1.webp','name' : 'lix','age' : '35'},
//         {
//         'image' : '/images/people2.webp','name' : 'smith','age' : '45'}
//     ];
// }


//ㅔprops가 넘어갈때는 무조건 {} 이다
