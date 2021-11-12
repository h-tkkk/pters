import React, { Component, Fragment } from "react";

import "./index.css";
import "./mainSlider.css";

class HomeDetailTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: "1",
        };
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
            },
            {
                class: "main2",
                vlaue: "2",
                img: "img/main.png",
                title: "매달 시달리던 계산기와의 작별 인사",
            },
        ];
        return (
            <section className="home">
                <div className="slide">
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
                    <ul>
                        {homeDetail.map((obj, i) => 
                            <li>
                                <div className="image_box">
                                    <div className="image_wrap">
                                            <img className="image_main_home" src={obj.img} />
                                    </div>
                                    <div className="image_text">
                                        <h1 className="main_content_title">
                                            <span>{obj.title}</span>
                                        </h1>
                                        <h4>
                                            <b>
                                                카톡과 문자 연락으로 낭비되는 시간을
                                                줄여보세요.
                                            </b>
                                            <br />
                                            <br />
                                            <b>사업자가 설정한 예약 규칙에 맞춰</b>
                                            <br />
                                            <b>수강 회원님이 직접 예약이 가능합니다.</b>
                                            <br />
                                            <br />
                                            <b>내 고객님도</b>
                                            <br />
                                            <b>본인의 수행 이력과 남은 횟수 정보를</b>
                                            <br />
                                            <b>한눈에 파악할 수 있습니다.</b>
                                        </h4>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                    <p className="main">
                        <label htmlFor="main1"></label>
                        <label htmlFor="main2"></label>
                    </p>
                </div>
            </section>
        );
    }
}

export default HomeDetailTest;

{
    /* <div className="image_box">
                    <div className="image_wrap">
                        <img className="image_main" src="img/two.png" />
                    </div>
                    <div className="image_text">
                        <h1 className="main_content_title">
                            <span>매달 시달리던 계산기와의 작별 인사</span>
                        </h1>
                        <h4>
                            <span>회원 등록 시 입력 금액을 기반으로</span><br/><br/>
                            <span>실시간으로 매출에 대한 통계를 표시합니다.</span><br/><br/>
                            <span>과거 데이터를 함계 조회해서</span><br/>
                            <span>한눈에 비즈니스 현황을 파악해보세요.</span><br/>
                        </h4>
                    </div>
                </div> */
}
