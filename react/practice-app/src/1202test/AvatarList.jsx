import Avatar from "./Avatar.jsx";

export default function AvatarList(props) {
 

    return(
        <ul>
            {props.lists.map((object) =>   //구조분해할당
                <li><Avatar img={object.image} 
                            name={object.name}>                      
                    </Avatar>
                </li>
            )}
        </ul>
    );
}


// AvartarList 가 받을때 이렇게  됨
// props = {
//       avatar_list : [
    //         {'image' : '/test-image/people1.webp','name' : 'smith'},
    //         {'image' : '/test-image/people2.webp','name' : 'john'}
    //         {'image' : '/test-image/people3.webp','name' : 'emily'},
//         
//          ];
//      }