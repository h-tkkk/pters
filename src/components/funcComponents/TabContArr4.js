import React, { Component, useRef } from 'react';
import "../tabs.scss";

class TabContArr4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subTabValue: 0
        };
    }

    tabClickHandler = (index) => {
        this.setState({
            subTabValue: index
        });
    };

    render() {
        const data=[
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 0 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(0)}>통계</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>통계</h4>
                            </div>
                            <span>매출과 회원 통계를 제공합니다. 회원 등록시 입룍한 수강권, 일정 등 사용자가
                    활동한 정보를 기반으로 실시간으로 통계를 확인할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 1 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(1)}>회원 공지</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>회원 공지</h4>
                            </div>
                            <span>회원님들에게 보여지는 공지를 작성할 수 있습니다.
                    공지 등록 시 회원님들께 PUSH알림 전송과 공지 대상(전체회원, 진행중 회원만, 종료된 회원만) 선택
                    기능을 지원합니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 2 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(2)}>PUSH 알림</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>PUSH 알림</h4>
                            </div>
                            <span>회원님들께서 예약, 취소 하시는 변경사항 그리고 일정 시작 전 알림을 스마트폰
                    PUSH로 받아볼 수 있습니다.(앱 이용 시)</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 3 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(3)}>출석 시 회원 서명 입력</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>출석 시 회원 서명 입력</h4>
                            </div>
                            <span>일정을 출석 처리 할 때, 서명을 입력할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 4 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(4)}>강사간 공유</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>강사간 공유</h4>
                            </div>
                            <span>다른 피터스 강사에게 내가 만든 지점을 공유하여 함께 관리할 수 있습니다.
                    공유 강사별로 권한을 설정하여 원치 않는 정보 변경을 방지할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 5 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(5)}>민감 정보 잠금</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>민감 정보 잠금</h4>
                            </div>
                            <span>아이디를 다른 사람과 함께 사용하거나, 지점을 공유하여 사용할 때, 매출 통계 정보를 나만
                    알 수 있는 별도의 비밀번호로 타인의 접근을 막을 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
        ];
        return (
            <div id="tab__content--4" className="tab__content">
                <div className="sub-content">
                    <div>
                        <ul className="tabs is-boxed">
                            {data.map((section, index)=>{
                                return section.tabTitle
                            })}
                        </ul>
                        <div>
                            {data[this.state.subTabValue].tabCont}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabContArr4;