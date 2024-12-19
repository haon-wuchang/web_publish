//여기에 잇는 내용 써 이파일은 지울파일임

export default function TitleList() {
    const titleList =[

        {
        "id":"skill",
        "classNm":"section max-container",
        "title":"My Skills",
        "description":"Skills & Attributes",
        "skillsDescription":true
        },
        {
        "id":"work",
        "classNm":"section max-container",
        "title":"My work",
        "description":"Projects",
        "skillsDescription":false
        },
        {
        "id":"testimonial",
        "classNm":"section max-container",
        "title":"Testimonial",
        "description":"See what they say about me",
        "skillsDescription":false
        }
        ];
    return (
        <>
            {titleList.map((item)=>
                <Title id={item.id} classNm={item.classNm}
                title={item.title} description={item.description}
                skillsDescription={item.skillsDescription}/>
        )}
        </>
    );
}

