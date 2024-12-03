import SkzMember from "./SkzMember";
import './Skz.css';

export default function SkzList({list}) {
    return(
        <ul className="ww">
            {list.map((item) => 
                <li><SkzMember img={item.img} name={item.name}></SkzMember></li>
            )}
        </ul>
    );
}