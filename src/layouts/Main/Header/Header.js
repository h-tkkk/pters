import React, {useState, useEffect} from "react";
import { Link as RouterLink } from "react-router-dom";

import "./Header.css"

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <div className="container">
      <nav>
        <ul className={scrollPosition < 940 ? "nav-container-original" : "nav-container-change"}>
          <li className="logo">
            <a href="/">
              <img src={scrollPosition < 940 ? "img/pters_logo_short_white.png" : "img/pters_logo_short.png"} />
            </a>
          </li>
          <div className="nav-item-list">
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="#">2가지 예약 타입</a></li>
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="#">실시간 예약 관리</a></li>
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="#">일정 관리</a></li>
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="#">꿀팁</a></li>
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="#">요금제</a></li>
            {/* <div className="dropdown">
              <button className={scrollPosition < 940 ? "drop-btn-original" : "drop-btn-change"}>관리</button>
              <div className={scrollPosition < 940 ? "dropdown-content-original" : "dropdown-content-change"}>
                <a href="/rsManagement">실시간 예약 관리</a>
                <a href="/planManagement">일정 관리</a>
                <a href="/userManagement">회원 관리</a>
                <a href="/serviceManagement">서비스(수업) 관리</a>
                <a href="/">회원권(수강권) 관리</a>
              </div>
            </div>
            <li className="nav-item"><a className={scrollPosition < 940 ? "font-original" : "font-change"} href="/">그 외 유용한 기능</a></li> */}
          </div>
        </ul>
      </nav>
    </div>
  );
}