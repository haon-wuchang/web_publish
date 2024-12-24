import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function HeaderBottomSearch() {
    return(
        <>
            <div class="header-bottom-search">
                <input type="search" value="리틀 엠마" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </>
    );
}