import React, { Component, useRef } from 'react';
import "../tabs.scss";

class TabContArr2 extends Component {
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
                        onClick={()=>this.tabClickHandler(0)}>수업 색상 지정</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수업 색상 지정</h4>
                            </div>
                            <span>수업별로 13가지 색상 중 원하는 색상을 자유롭게 선택할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 1 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(1)}>수업 정원, 시간</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수업 정원, 시간</h4>
                            </div>
                            <span>수업별로 정원, 수업시간(5분 단위) 을 사용자가 자유롭게 정할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
            {
                tabTitle:(
                    <li 
                        className={this.state.subTabValue === 2 ? "is-active nav-TabItem" : "nav-TabItem"} 
                        onClick={()=>this.tabClickHandler(2)}>수업 고정 회원 설정</li>
                ),
                tabCont:(
                    <div className="nav-TabBox">
                        <div className="nav-img-TabBox">
                             <img className="image_main_home" src="img/rs1.png" />
                        </div>
                        <div className="nav-content-TabBox">
                            <div className="nav-subTitle-TabBox">
                                <h4>수업 고정 회원 설정</h4>
                            </div>
                            <span>수업을 달력에 입력할 때, 그 수업에 항상 같이 입력하고 싶은 회원이 있다면 고정회원으로
                    설정해서 자동으로 함께 입력되도록 설정할 수 있습니다.</span>
                        </div>
                    </div>
                )
            },
        ];
        return (
            <div id="tab__content--2" className="tab__content">
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

export default TabContArr2;