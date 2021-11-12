import React, { Component } from 'react';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./PriceInformation.scss";

class PriceInformation extends Component {
    render() {
        const infoData = [
            {
                title: '무료',
                subject: '먼저 한번 사용해보세요!',
                heading: '0/매월',
                cardId: '',
                frontClass: 'free',
                fontStyle: 'black',
                attr1: '오늘 기준 전후 7일간',
                attr2: '10명',
                attr3: '1개월 단위 조회 가능',
                attr4: '1개',
                attr5: '일부 제한',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
            {
                title: '베이직',
                subject: '소규모 개인 비즈니스에 추천',
                heading: '3,900/매월',
                cardId: '',
                frontClass: 'basic',
                fontStyle: 'white',
                attr1: '오늘 기준 전후 30일간',
                attr2: '30명',
                attr3: '3개월 단위 조회 가능',
                attr4: '2개',
                attr5: '제한없음',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
            {
                title: '스탠다드 - A',
                subject: '개인 혹은 중소 규모 비즈니스에 추천',
                heading: '6,900/매월',
                cardId: '',
                frontClass: 'Standard_a',
                fontStyle: 'white',
                attr1: '오늘 기준 전후 1년간',
                attr2: '100명',
                attr3: '1년 단위 조회 가능',
                attr4: '5개',
                attr5: '제한없음',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
            {
                title: '스탠다드 - B',
                subject: '1개 지점 집중 비즈니스에 추천',
                heading: '6,900/매월',
                cardId: '',
                frontClass: 'Standard_b',
                fontStyle: 'white',
                attr1: '오늘 기준 전후 1년간',
                attr2: '500명',
                attr3: '1년 단위 조회 가능',
                attr4: '1개',
                attr5: '제한없음',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
            {
                title: '전용 앱 제작',
                subject: '(선택적 부가서비스)',
                heading: '500,000',
                cardId: '-large',
                frontClass: 'create',
                fontStyle: 'black',
                attr1: 'IOS, 안드로이드 전용 앱 제작',
                attr2: '포인트 색상 변경',
                attr3: '로그인 화면, 서비스 내 로고 변경',
                attr4: '월 유지 비용 상기 이용권과 동일',
                attr5: '',
            },
            {
                title: '프리미엄',
                subject: '중대규모 비즈니스에 추천',
                heading: '9,900/매월',
                cardId: '',
                frontClass: 'premium',
                fontStyle: 'white',
                attr1: '오늘 기준 전후 1년간',
                attr2: '500명',
                attr3: '1년 단위 조회 가능',
                attr4: '10개',
                attr5: '제한없음',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
            {
                title: '프리미엄20',
                subject: '중대규모 비즈니스에 추천',
                heading: '19,800/매월',
                cardId: '',
                frontClass: 'premium20',
                fontStyle: 'white',
                attr1: '오늘 기준 전후 1년간',
                attr2: '500명',
                attr3: '1년 단위 조회 가능',
                attr4: '20개',
                attr5: '제한없음',
                attr1Title: '일정',
                attr2Title: '회원',
                attr3Title: '통계',
                attr4Title: '지점',
                attr5Title: '설정'
            },
        ]
        return (
            <section className="home-7">
               <div className="artboard">
                    {infoData.map((obj, index) => 
                    <div className={"card" + obj.cardId}>
                        <div className={"card" + obj.cardId + "__side card" + obj.cardId + "__side--back"}>
                            <div className={"card" + obj.cardId + "__cover " + obj.frontClass}>
                                <h4 className={"card" + obj.cardId + "__heading"}>
                                    <span className={"card" + obj.cardId + "__heading-span-" + obj.fontStyle}>￦ {obj.heading}</span>
                                </h4>
                            </div>
                            <div className={"card" + obj.cardId + "__details " + obj.frontClass}>
                                <ul>
                                    <li><p className="itemIcon"><FontAwesomeIcon icon={faCheck} size="1x" /> {obj.attr1Title}</p>{obj.attr1}</li>
                                    <li><p className="itemIcon"><FontAwesomeIcon icon={faCheck} size="1x" /> {obj.attr2Title}</p>{obj.attr2}</li>
                                    <li><p className="itemIcon"><FontAwesomeIcon icon={faCheck} size="1x" /> {obj.attr3Title}</p>{obj.attr3}</li>
                                    <li><p className="itemIcon"><FontAwesomeIcon icon={faCheck} size="1x" /> {obj.attr4Title}</p>{obj.attr4}</li>
                                    <li><p className="itemIcon"><FontAwesomeIcon icon={faCheck} size="1x" /> {obj.attr5Title}</p>{obj.attr5}</li>
                                </ul>
                            </div>
                        </div>

                        <div className={"card" + obj.cardId + "__side card" + obj.cardId + "__side--front " + obj.frontClass}>
                            <div className={"card" + obj.cardId + "__theme"}>
                                <div className={"card" + obj.cardId + "__theme-box-" + obj.fontStyle}>
                                    <p className={"card" + obj.cardId + "__subject"}>{obj.subject}</p>
                                    <p className={"card" + obj.cardId + "__title"}>{obj.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </section>
        );
    }
}

export default PriceInformation;

