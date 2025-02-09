import SectionWrap from "../components/SectionWrap.jsx";
import Events from "../components/mainContents/Events.jsx";
import Brand from "../components/mainContents/Brand.jsx";
import Outer from "../components/mainContents/Outer.jsx";
import Rank from "../components//mainContents/Rank.jsx";
import Issue from "../components/mainContents/Issue.jsx";
// import SlideWrap from "../components/mainContents/MainSlide/SlideWrap.jsx";
import SubSlideWrap from "../components/mainContents/SubSlide/SubSlideWrap.jsx";
import HotBrand from "../components/mainContents/HotBrands/HotBrand.jsx";
import SlideWrap2 from "../components/mainContents/MainSlide/SlideWrap2.jsx";

export default function Home(){

    const sectionList = [
        {
          id: "event",
          title: "이벤트",
        },
        {
          id: "outer",
          title: "아우터로 더하는 한 겹의 포근함",
        },
        {
          id: "rank",
          title: "랭킹",
        },
        {
          id: "brands",
          title: "주목할 브랜드",
        },
        {
          id: "issue",
          title: "이 주의 브랜드 이슈",
        },
      ];
      
      const componentMap = { //컴포넌트 자동 생성
        event: Events,
        outer: Outer,
        rank: Rank,
        brands: Brand,
        issue: Issue,
      };
      
      const renderComponent = (childObj) => {
        const Component = componentMap[childObj.id];
        if (!Component) return null;
      
        return (
          <Component
            key={childObj.id}
            {...(childObj.props || {})} // Spread `props` if they exist
          >
            {/* Children rendering can be omitted since children key is unused */}
          </Component>
        );
      };
      
    return (
<main id='content'>  
  <SlideWrap2/> {/* 슬라이드 */}
  {/* 컨텐츠 시작 */}
  <div className='contents content-wrap'>
  <div className="corner-section">
    <section className="our-picks-gods" cnr="23360" id="ourPickOURPICK_AType23360" utag="utag=ref_tpl:111942$ref_cnr:23360">
                <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div className="swiper-wrapper" id="swiper-wrapper-17c64f0812c5c608" aria-live="polite">
                            <SubSlideWrap></SubSlideWrap>            
                        </div>

                                {/* 슬라이드 버튼 - 컴포넌트로 생각 중 미정*/}
                            <div className="swiper-button-control">
                                <div className="swiper-button-prev swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-17c64f0812c5c608" aria-disabled="true"></div>
                                <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"><span className="swiper-pagination-current">1</span> / <span className="swiper-pagination-total">4</span></div>
                                <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-17c64f0812c5c608" aria-disabled="false"></div>
                            </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </section>


        <HotBrand></HotBrand>

        {/* 이벤트부터 컴포넌트 자동으로 만들어가기 스타트 */}
    {sectionList && sectionList.map((section) => (
          <SectionWrap
            key={section.id}
            id={section.id}
            title={section.title}
           >
            {/* Render children if they exist */}
          {Array.isArray(section.children) &&
            section.children.map((child) => renderComponent(child))}
          </SectionWrap>
      ))}    
{/* 컨텐츠 끝 */}

    </div>
  </div>
</main>
    );
}