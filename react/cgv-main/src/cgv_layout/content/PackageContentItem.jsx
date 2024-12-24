
export default function PackageContentItem({src, text, price}) {
    return(
        <>
            <img src={src} alt="패키지 이미지" />
            <div>
                <p>{text}</p>
                <p>{price}</p>
            </div>
        </>
    );
}