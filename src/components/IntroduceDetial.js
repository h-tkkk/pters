import React, { Component, Fragment } from 'react';

import "./index.css";

class IntroduceDetial extends Component {
    render() {
        return (
            <main>
                <div className="image_box">
                    <div className="image_wrap">
                        <img className="image_main" src="img/map.png" />
                    </div>
                    <div className="image_text">
                        <h1 className="main_content_title">
                            <span>복잡한 관리 업무</span>
                        </h1>
                        <h4>
                            <span>레슨에 집중하고 싶은데,</span><br/>
                            <span>일정, 횟수, 매출 관리, 홍보 등</span><br/>
                            <span>해야 할 일이 너무 많습니다.</span><br/><br/>
                            <span>낭비되고 있는 관리업무 시간을</span><br/>
                            <span>레슨 품질 향상에 쓸 수 있다면</span><br/>
                            <span>얼마나 좋을까요?</span>
                        </h4>
                    </div>
                </div>
                <div className="image_box_wrap">
                    <div className="image_tree_wrap">
                        <div className="image_tree_item">
                            <img className="image_tree_main" src="img/InMap.png" />    
                        </div>
                        <div className="image_tree_item">
                            <img className="image_tree_main" src="img/phone.png" />
                        </div>
                        <div className="image_tree_item">
                            <img className="image_tree_main" src="img/amazon.png" />
                        </div>
                    </div>
                </div>
                <div className="image_box_wrap">
                    <div className="image_tree_wrap">
                        <div className="image_tree_item">
                        <h1 className="main_content_title_sm">
                            <span>공유 관리</span>
                        </h1>
                        <h4>
                            <span>다른 피터스 강사를 검색하고, 지점을</span><br/>
                            <span>공유하여, 함꼐 관리하는 비즈니스 환경</span><br/>
                            <span>구축이 가능합니다.</span>
                        </h4>
                        </div>
                        <div className="image_tree_item">
                            <h1 className="main_content_title_sm">
                            <span>다양한 기기</span>
                        </h1>
                        <h4>
                            <span>IOS, 안드로이드 앱 뿐만 아니라, PC와</span><br/>
                            <span>모바일 브라우저에서 시간과 장소</span><br/>
                            <span>제약없이 이용 가능합니다.</span>
                        </h4>
                        </div>
                        <div className="image_tree_item">
                            <h1 className="main_content_title_sm">
                            <span>Amazon Web Service</span>
                        </h1>
                        <h4>
                            <span>세계적인 기업과 기관에서 사용하며, 가장</span><br/>
                            <span>권위있는 정보보호 인증을 받은 AWS에</span><br/>
                            <span>데이터가 저장됩니다.</span>
                        </h4>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default IntroduceDetial;