import React, { Component, Fragment } from 'react';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import "./slider.css";

class RsMng extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: "1"
        };
    }
    
    handleChange = (e) => {
        this.setState({
            selectValue: e.target.value
        });
    }

    render() {
        const detail = [
            {
                class: 'pos1',
                vlaue: '1',
                img: 'img/rs1.png',
                title: '실시간 예약',
                contentAttr1: '회원님들꼐서 직접 회원 페이지와 앱을',
                contentAttr2: '통해 예약을 할 수 있습니다.다양한',
                contentAttr3: '예약관련 설정을 지원하여 나만의 예약',
                contentAttr4: '관련 규칙을 만들 수 있습니다'
            },
            {
                class: 'pos2',
                vlaue: '2',
                img: 'img/rs2.png',
                title: '근접예약/취소 방지',
                contentAttr1: '회원님들꼐서 예약과 취소가 가능한',
                contentAttr2: '시간을 강사님이 설정할 수 있습니다.',
                contentAttr3: '예약 시간에 근접해서 취소하거나',
                contentAttr4: '등록하는 것을 제한 할 수 있습니다.'
            },
            {
                class: 'pos3',
                vlaue: '3',
                img: 'img/rs3.png',
                title: '예약 가능 날짜 구간 설정',
                contentAttr1: '회원님들이 오늘을 기준으로 몇일 후',
                contentAttr2: '일정까지 예약이 가능하게 할 지 최대',
                contentAttr3: '14일까지 설정할 수 있습니다.',
                contentAttr4: ''
            },
            {
                class: 'pos4',
                vlaue: '4',
                img: 'img/rs4.png',
                title: '대기 예약',
                contentAttr1: '대기 예약으로 예약을 접수 받을 수',
                contentAttr2: '있습니다. 취소로 인한 공석이 생길 경우',
                contentAttr3: '자동으로 대기 회원 중 1순위에 있는',
                contentAttr4: '회원이 예약 확정 됩니다.'
            },
            {
                class: 'pos5',
                vlaue: '5',
                img: 'img/rs5.png',
                title: '일정 메모',
                contentAttr1: '예약 한 회원들에게 해당일정의 메모가',
                contentAttr2: '공유됩니다. 일정별로 메모를 기입하여',
                contentAttr3: '예약 회원들이 미리 준비할 사항을',
                contentAttr4: '알리는데 활용할 수 있습니다.'
            },
            {
                class: 'pos6',
                vlaue: '6',
                img: 'img/rs6.png',
                title: '예약 기능 끄기',
                contentAttr1: '회원 예약 기능을 사용하지 않는 것도',
                contentAttr2: '가능합니다.',
                contentAttr3: '회원 연동없이, 기존 업무를 체계적으로',
                contentAttr4: '관리하는데 피터스를 활용할 수 있습니다.'
            },
        ];

        return (
            <section className="home-3">
                <div className="slide">
                <p className="sectionTitle"> - 실시간 예약 관리</p>
                    {detail.map((obj, i) => 
                        <input
                            type="radio"
                            name="pos"
                            id={obj.class}
                            className={obj.class}
                            value={obj.vlaue}
                            checked={this.state.selectValue === obj.vlaue}
                            onChange={this.handleChange}    
                        />
                    )}
                    <ul>
                        {detail.map((obj, i) => 
                        <li>
                            <div className="image_silder">
                                <div className="image_wrap_rs">
                                    <img className="image_rs" src={obj.img} />
                                </div>
                                <div className="image_text_rs">
                                    <h1 className="main_content_title">
                                        <span>{obj.title}</span>
                                    </h1>
                                    <h4>
                                        <span>{obj.contentAttr1}</span><br/>
                                        <span>{obj.contentAttr2}</span><br/>
                                        <span>{obj.contentAttr3}</span><br/>
                                        <span>{obj.contentAttr4}</span>
                                    </h4>
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                    <p className="pos">
                        <label htmlFor="pos1"></label>
                        <label htmlFor="pos2"></label>
                        <label htmlFor="pos3"></label>
                        <label htmlFor="pos4"></label>
                        <label htmlFor="pos5"></label>
                        <label htmlFor="pos6"></label>
                    </p>
                </div>
            </section>
        );
    }
}

export default RsMng;
