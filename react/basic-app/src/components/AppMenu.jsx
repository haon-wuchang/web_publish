import Menu from './Menu.jsx';
import MenuList from './MenuList.jsx';

export default function AppMenu() {
    const nameList = [
        {
            'name' : 'Home' ,
            'href':'#home' ,
            'bg':'lightsteelblue',
            'color' : 'white'
        },
        {
            'name' : 'About',
            'href':'#about' ,
            'bg':'darkcyan'
        },
        {
            'name' : 'Skills',
            'href':'#skills' ,
            'bg':'darkcyan'
        },
        {
            'name' : 'Mywork',
            'href':'#mywork' , 
            'bg':'darkcyan'
        },
        {
            'name' : 'Testimonial',
            'href':'#testimonial',
            'bg':'darkcyan'
        },
        {
            'name' : 'Contact',
            'href':'#contact' ,
            'bg':'darkcyan'
        }
    ];
    
    
    return(
        <>
            <div>
                <Menu name='Home' href='#home' bg='darkcyan' color='white'></Menu>
                <Menu name='About'  href='#about' bg='lightsteelblue'></Menu>
                <Menu name='Skills'  href='#skills' bg='lightsteelblue'></Menu>
                <Menu name='Mywork'  href='#mywork' bg='lightsteelblue'></Menu>
                <Menu name='Testimonial'  href='#testimonial' bg='lightsteelblue'></Menu>
                <Menu name='Contact'  href='#contact' bg='lightsteelblue'></Menu>
            </div>

            <div>
                <MenuList list={nameList}></MenuList>
            </div>
        </>
    );

}