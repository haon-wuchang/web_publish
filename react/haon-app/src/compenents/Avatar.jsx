/*파일 이름이랑 똑같은 함수에는 default 를 붙일수잇음 여기서는 avatar에 ㄱㄴ 이거 어딘가에 내용정리함 거기에 추가해*/



export default function Avatar() {
    const imageList = {
        'image' : 'image1',
        'src' : '/images/wuchang.jpg'

    };


    //이미지 주소 가져오기
    return(
    <>
        <h1>Avatar</h1>
        <img src="/images/wuchang.jpg"/>
    </>

);    

}










