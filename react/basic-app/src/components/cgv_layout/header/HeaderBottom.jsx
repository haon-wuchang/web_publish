import HeaderBottomMenuList from "./HeaderBottomMenuList.jsx";
import HeaderBottomSearch from "./HeaderBottomSearch.jsx";

export default function HeaderBottom() {
    return(
        <div className="header-bottom">
            <div class="header-bottom-content">
                <HeaderBottomMenuList />
                <HeaderBottomSearch />
            </div>
        </div>
    );
}