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
                class: 'plan1',
                vlaue: '1',
                img: 'img/rs2.png',
                title: '주간, 월간 달력',
                contentAttr1: '한눈에 이번 주 일정을 살펴보거나,',
                contentAttr2: '이번 달 전체 일정 개수를 월간 달력을 통해',
                contentAttr3: '살펴볼 수 있습니다.',
                contentAttr4: ''
            },
            {
                class: 'plan2',
                vlaue: '2',
                img: 'img/rs2.png',
                title: '반복 일정',
                contentAttr1: '요일과 시간을 지정해서 반복일정을',
                contentAttr2: '지정할 수 있습니다. 회원의 남은 횟수와',
                contentAttr3: '수강권 종료일에 맞춰 반복일정이 등록됩니다.',
                contentAttr4: ''
            },
            {
                class: 'plan3',
                vlaue: '3',
                img: 'img/rs3.png',
                title: '휴무일 (자동 수강권 기간 연장)',
                contentAttr1: '업무시간 설정과 별개로, 휴무를 입력할 수 있습니다.',
                contentAttr2: '일정에서 휴무일을 입력 시,',
                contentAttr3: '회원들의 수강권을 휴무일만큼 연장할 지',
                contentAttr4: '선택할 수 있습니다.'
            },
            {
                class: 'plan4',
                vlaue: '4',
                img: 'img/rs4.png',
                title: '일반(OFF) 일정',
                contentAttr1: '회원 일정 외에 일반적인 일정을 등록할 수',
                contentAttr2: '있습니다. 일반 일정은 회원들이 예약할 수',
                contentAttr3: '없는 시간으로 처리되기 때문에, 다양한',
                contentAttr4: '방식으로 활용 가능합니다.'
            },
            {
                class: 'plan5',
                vlaue: '5',
                img: 'img/rs5.png',
                title: '일정별 출결 관리',
                contentAttr1: '예약 일정을 출석/결석 처리 할 수 있습니다.',
                contentAttr2: '출석 여부를 선택하면 회원의 잔여 횟수를 차감합니다.',
                contentAttr3: '일정에 회원이 여러 명일 경우도 각각 처리가 가능합니다.',
                contentAttr4: ''
            },
            {
                class: 'plan6',
                vlaue: '6',
                img: 'img/rs6.png',
                title: '일정별 일지',
                contentAttr1: '각 예약 일정별로 일지를 작성할 수 있습니다.',
                contentAttr2: '일정에 회원이 여러 명 있다면,',
                contentAttr3: '각각 일지를 작성하거나 혹은 일괄로 작성할 수도 있습니다.',
                contentAttr4: ''
            },
        ];

        return (
            <section className="home-4">
                <div className="slide">
                    {detail.map((obj, i) => 
                        <input
                            type="radio"
                            name="plan"
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
                                <div className="image_wrap_rs">
                                    <img className="image_rs" src={obj.img} />
                                </div>
                            </div>
                        </li>
                        )}
                    </ul>
                    <p className="plan">
                        <label htmlFor="plan1"></label>
                        <label htmlFor="plan2"></label>
                        <label htmlFor="plan3"></label>
                        <label htmlFor="plan4"></label>
                        <label htmlFor="plan5"></label>
                        <label htmlFor="plan6"></label>
                    </p>
                </div>
            </section>
        );
    }
}

export default RsMng;
