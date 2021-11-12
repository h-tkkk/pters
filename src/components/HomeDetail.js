import React, { Component, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay } from "swiper";

import "./index.css";
import "./mainSlider.css";

import ReservationType from "../components/ReservationTypeDetial";
import RsMng from "./RsMngDetial";
import PlanMng from "./PlanMngDetial";
import ServiceMng from "./ServiceManagement";
import PriceInformation from "./PriceInformation";

SwiperCore.use([Autoplay]);

class HomeDetail extends Component {
    constructor(props) {
        super(props);
        this.changeSelectValue();
        this.state = {
            selectValue: "1",
        };
    }

    changeSelectValue() {
        setInterval(() => {
            this.setState({
                selectValue: this.state.selectValue === "1" ? "2" : "1",
            });
        }, 6000);
    }

    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value,
        });
    };
    
    render() {
        const homeDetail = [
            {
                class: "main1",
                vlaue: "1",
                img: "img/main.png",
                title: "내 고객이 직접 실시간으로 레슨 예약",
                contentAttr1:
                    "카톡과 문자 연락으로 낭비되는 시간을 줄여보세요.",
                contentAttr2: "사업자가 설정한 예약 규칙에 맞춰",
                contentAttr3: "수강 회원님이 직접 예약이 가능합니다.",
                contentAttr4: "내 고객님도",
                contentAttr5: "본인의 수행 이력과 남은 횟수 정보를",
                contentAttr6: "한눈에 파악할 수 있습니다.",
            },
            {
                class: "main2",
                vlaue: "2",
                img: "img/main2.png",
                title: "매달 시달리던 계산기와의 작별 인사",
                contentAttr1: "회원 등록 시 입력 금액을 기반으로",
                contentAttr2: "실시간으로 매출에 대한 통계를 표시합니다.",
                contentAttr3: "과거 데이터를 함계 조회해서",
                contentAttr4: "한눈에 비즈니스 현황을 파악해보세요.",
                contentAttr5: "",
            },
        ];
        return (
            <article>
                <section className="home">
                    <div className="main-slide">
                        {homeDetail.map((obj, i) => (
                            <input
                                type="radio"
                                name="main"
                                id={obj.class}
                                className={obj.class}
                                value={obj.vlaue}
                                checked={this.state.selectValue === obj.vlaue}
                                onChange={this.handleChange}
                            />
                        ))}
                        <ul className="imgs">
                            {homeDetail.map((obj, i) => (
                                <li className={obj.class}>
                                    <div className="image_box_slider">
                                        <div className="image_wrap">
                                            <img
                                                className="image_main_home"
                                                src={obj.img}
                                            />
                                        </div>
                                        <div className="image_text_slider">
                                            <h1 className="main_content_title">
                                                <span>{obj.title}</span>
                                            </h1>
                                            <h4>
                                                <b>{obj.contentAttr1}</b>
                                                <br />
                                                <br />
                                                <b>{obj.contentAttr2}</b>
                                                <br />
                                                <b>{obj.contentAttr3}</b>
                                                <br />
                                                <br />
                                                <b>{obj.contentAttr4}</b>
                                                <br />
                                                <b>{obj.contentAttr5}</b>
                                                <br />
                                                <b>{obj.contentAttr6}</b>
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="bullets">
                            <label htmlFor="main1"></label>
                            <label htmlFor="main2"></label>
                        </p>
                    </div>
                </section>
                <ReservationType />
                <RsMng />
                <PlanMng />
                <ServiceMng />
                <PriceInformation />
            </article>
        );
    }
}

export default HomeDetail;
