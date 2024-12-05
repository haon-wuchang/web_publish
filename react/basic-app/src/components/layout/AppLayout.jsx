import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import AvatarImage from '../AvatarImage.jsx';
import AvatarList from '../AvatarList.jsx';
import Button from '../Buttons.jsx';
import ButtonList from '../ButtonList.jsx';
import Menu from '../Menu.jsx';

export default function AppLayout() {

    const avatarList = [
        {'img' : '/images/felix.webp', 'name' : 'felix'},
        {'img' : '/images/in.webp', 'name' : 'IN'},
        {'img' : '/images/seungmin.webp', 'name' : 'dogmin'}
    ];
    const buttonList = [
        {'name' : '회원가입' , 'type' : 'button'},
        {'name' : '고객센터' , 'type' : 'button'},
        {'name' : 'My Page' , 'type' : 'button'},
    ];

    return(
        <>
            <Header>
                <AvatarImage img='images/felix.webp'/>
                <Button name='Login' type='button'/>
                <Menu name='Home' href='#home' bg='darkcyan' color='white'/>
            </Header>

            <Body>
                <AvatarList list={avatarList}/>
            </Body>

            <Footer>
                <ButtonList list={buttonList}/>
            </Footer>
        </>
    );
}