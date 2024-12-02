
import Avatar from './Avatar.jsx';
import AvatarList from './AvatarList.jsx';


export default function Test() {
    const list = [
        {'image' : '/test-image/people1.webp', 'name' : 'smith'},
        {'image' : '/test-image/people2.webp', 'name' : 'john'},
        {'image' : '/test-image/people3.webp', 'name' : 'emily'},
    
    ];


    return(
       <>   
            <h1>Avatar.jsx</h1>
            <Avatar img='/test-image/people1.webp' name ='smith'></Avatar>
            <Avatar img='/test-image/people2.webp' name ='john'></Avatar>
            <Avatar img='/test-image/people3.webp' name ='emily'></Avatar>
            <hr />
            <h1>AvatarList.jsx</h1>
            <AvatarList lists = {list}></AvatarList>
        </>
    );
}



