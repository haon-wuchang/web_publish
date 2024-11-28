
createSwiper();

function createSwiper() {

    let output = `
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src='https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000089/89287/89287232289_727.jpg'>
            </div>
            <div class="swiper-slide">
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000089/89287/89287232288_727.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000089/89287/89287232287_727.jpg" alt="">
            </div>
            ...
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
    `;

    document.querySelector('.swiper').innerHTML = output;



    const swiper = new Swiper('.swiper', {
        // direction: 'vertical',  수직으로 ... 이 나옴
        loop: true,  //계속 반복하면서 출력
        slidesPerView: 1,  //slidesPerView : 화면에 몇개씩 보여줄건지 
        autoplay : {delay :3000, disableOninteraction:false},   //ms 초임 autoplay: 자동으로 사진넘어가게 하는거임

        pagination: {   //pagination : 사진밑에 … 잇는거
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
        //   el: '.swiper-scrollbar',  //스크롤바
        },
      });

}
