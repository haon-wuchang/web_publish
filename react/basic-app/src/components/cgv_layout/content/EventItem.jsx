
export default function EventItem({src,title,date}) {
    return(   //반복되는 부분만 따로 컴포넌트로 만드는거임
        <>
            <div>
                <img src={src} alt="EVENT 이미지" width="200px" />
            </div>
            <p className="event-content-title">{title}</p>
            <p className="event-content-title2">{date}</p>
        </>
    );
}