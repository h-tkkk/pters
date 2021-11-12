import React, { Component, useRef } from 'react';
import "../tabs.scss";

class TabContArr1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTabValue: 0
        };
    }

    tabClickHandler = (index) => {
        this.setState({
            subTabValue: index,
        });
    };

    testhandleChange = (e) => {
        this.setState({
            subTabValue: e.target.value
        });
    }

    render() {
        const data=[
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 0 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(0)}>일정 연동 횟수 관리</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>일정 연동 횟수 관리</h4>
                            </div>
                            <span>회원님이 참석한 일정이 완료 되면 자동으로 수강권의 잔여 횟수를 차감합니다.
                                또한, 종료가 임박한 회원은 홈에서 한눈에 살펴볼 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 1 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(1)}>일정 이력</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>일정 이력</h4>
                            </div>
                            <span>회원님의 참석 이력을 한눈에 살펴 볼 수 있습니다.
                                시간순, 월별, 수강권 별 정렬로 다양한 방식으로 확인할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 2 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(2)}>신규 등록</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>신규 등록</h4>
                            </div>
                            <span>회원 기분 정보를 입력하고, 수강권 목록중 등록하고자 하는 수강권을 선택하면
                                해당 수강권의 기본 횟수, 기간, 가격을 자동으로 불러옵니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 3 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(3)}>재등록</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>재등록</h4>
                            </div>
                            <span>회원 정보에서 간편하게 수강권을 추가할 수 있습니다. 회원 정보를 다시 입력할 
                                필요없이 추가하고자 하는 수강권을 선택하기만 하면 됩니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 4 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(4)}>수강권 일시정지</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수강권 일시정지</h4>
                            </div>
                            <span>회원님의 수강권을 일시 정지할 수 있습니다. 일시 정지한 기간 만큼 수강권
                                기간 연장 여부를 선택할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 5 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(5)}>수강권 환불</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수강권 환불</h4>
                            </div>
                            <span>환불이 발생했을 때, 환불 날짜와 금액을 입력하면, 해당 수강권이 종료됨과
                                동시에 통계에도 변동 사항이 실시간으로 반영 되어집니다.</span>
                        </div>
                    </div>
                )
            },
        ];
        return (
            <div id="tab__content--1" className="tab__content">
                <div className="sub-content">
                    <div>
                        {data.map((obj, i) => 
                            <input
                                type="radio"
                                name="subTab"
                                id={obj.class}
                                className={obj.class}
                                value={obj.vlaue}
                                checked={this.state.subTabValue === obj.vlaue}
                                onChange={this.testhandleChange}    
                            />
                        )}
                        <ul className="tabs is-boxed">
                            {data.map((section, index)=>{
                                return section.tabTitle
                            })}
                        </ul>
                        <p className="subTab">
                        <label htmlFor="subTab1"></label>
                        <label htmlFor="subTab1"></label>
                        <label htmlFor="pos3"></label>
                        <label htmlFor="pos4"></label>
                        <label htmlFor="pos5"></label>
                        <label htmlFor="pos6"></label>
                    </p>
                            {data[this.state.subTabValue].tabCont}
                    </div>
                </div>
            </div>
        );
    }
}

export default TabContArr1;