import './Skz.css';

export default function SkzMember({name,img}) {
    return(
        <div className='container'>
            <img src={img} className="profile" />
            <p>{name}</p>
        </div>
    );

}