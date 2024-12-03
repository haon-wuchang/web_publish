import '../css/Avatar.css';


export default function AvatarImage({img}) {
    return(
        <img src={img} className="avatar-img"/>

    );
}
//구조분해할당은 오브젝트리터럴 형태로 넘어와야한다 그래서 {넘어오는키값} 이거 쓰는거양