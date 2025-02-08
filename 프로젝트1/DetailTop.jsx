import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { SiGitconnected } from "react-icons/si";

export default function DetailTop(){
    const [isHover, setIsHover] = useState(true);

    const handleEnter = () => {
        setIsHover(false);
    }
    const handleLeave = () => {
        setIsHover(true);
    }
 
    return (
        <section className="detail-top-wrap">
                <div aria-label="Breadcrumb" class="breadcrumb">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="#none;" onclick="javascript:goAction(this); return false;" ctgryno="SFMA42">남성</a>
                        </li>
                        <li>
                            <a href="#none;" onclick="javascript:goAction(this); return false;" ctgryno="SFMA42A03">니트</a>
                        </li>
                        <li>풀오버</li>
                    </ol>
                </div>
                
                <div class="detail-top-right">
                    {isHover ? 
                    (
                    <div className="notover">
                        <span><CiHeart /></span>
                        <span onMouseEnter={handleEnter}><CiShare2 /></span>
                    </div>
                    ):
                    (
                    <div onMouseLeave={handleLeave}> 
                        <span class="haon-share" > 
                                <a class="haon-facebook" href="#none;" ><FaFacebook /></a>
                                <a class="haon-twitter" href="#none;"><FaTwitter /></a>
                                <a class="haon-pinterest" href="#none;" ><FaPinterest /></a>
                                <a class="haon-url" href="#none;"><SiGitconnected /></a>
                        </span>
                    </div>
                    )
                    } 
                            {/* <div class="layer_clip">
                                <span>URL이 복사되었습니다.</span>  
                            </div> */}
                </div>
            </section>
    );
}
