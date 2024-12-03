import SkzMember from "./SkzMember.jsx";
import SkzList from "./SkzList.jsx";
import './Skz.css';

export default function AppSkz() {
    const skzImage = [
        {'img':'./images/felix.webp' ,'name':'용복'},
        {'img':'./images/hyunjin.webp' ,'name':'현진'},
        {'img':'./images/leeknow.webp' ,'name':'리노'},
        {'img':'./images/in.webp' ,'name':'아이엔'},
        {'img':'./images/bangchan.webp' ,'name':'방찬'},
        {'img':'./images/seungmin.webp' ,'name':'승민'}
    ];

    return(
        <>
            <div className="qq">
                <SkzMember img='./images/felix.webp' name='용복'></SkzMember>
                <SkzMember img='./images/hyunjin.webp' name='현진'></SkzMember>
                <SkzMember img='./images/leeknow.webp' name='리노'></SkzMember>
            </div>

            <div className="qq">
                <SkzList list={skzImage}></SkzList>
            </div>
        </>
    );
}
