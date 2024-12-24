
export default function HeaderBottomMenu({name}) {
    return(
            <>
                <a href="#">{name}</a>
                <dl>
                    <dt>이벤트</dt>
                    <dd>SPECIAL</dd>
                    <dd>영화/예매</dd>
                    <dd>멤버십/CLUB</dd>
                    <dd>CGV 극장별</dd>
                </dl>
            </>
    );
}