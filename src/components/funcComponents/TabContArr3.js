import React, { Component, useRef } from 'react';
import "../tabs.scss";

class TabContArr3 extends Component {
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
                        onClick={()=>this.tabClickHandler(0)}>기본 횟수, 유효기간, 가격 설정</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>기본 횟수, 유효기간, 가격 설정</h4>
                            </div>
                            <span>수강권의 기본 횟수, 유효기간, 가격을 설정해 둘 수 있습니다.
                    회원에게 수강권을 등록할 때, 이 기본 정보가 자동으로 입력됩니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 1 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(1)}>수업 구성</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수업 구성</h4>
                            </div>
                            <span>어떤 수업에 참여 가능한 수강권인지 수업을 구성할 수 있습니다.
                    수강권 규정이 바뀐다면 언제든 수업을 자유롭게 추가하고 뺄 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 2 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(2)}>예약 이용 규칙 설정</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>예약 이용 규칙 설정</h4>
                            </div>
                            <span>수강권을 등록한 회원님께서 실시간 예약기능을 사용할 때, 일별/주별 최대 예약 횟수에
                    대한 제한사항을 설정 할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
        ];
        return (
            <div id="tab__content--3" className="tab__content">
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

export default TabContArr3;