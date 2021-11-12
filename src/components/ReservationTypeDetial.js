import React, { Component, Fragment } from 'react';
import HomeDetail from './HomeDetail';

import "./index.css";

class ReservationTypeDetial extends Component {
    render() {
        return (            
            <section className="home-2">
                <div className="image_box_wrap">
                    <div className="image_tree_wrap">
                        <div className="image_tree_item">
                            <img className="image_tree_main" src="img/reservationTypeOne1.png" />    
                        </div>
                        <div className="image_tree_item">
                            <img className="image_tree_main" src="img/reservationTypeTwo.png" />
                        </div>
                    </div>
                </div>
                <div className="image_box_wrap">
                    <div className="image_tree_between">
                        <div className="image_tree_item">
                            <h1 className="main_content_title_re">
                                <b>일대일(1:1)로 진행되는 비즈니스에서 활용하면 좋아요!</b>
                            </h1>
                        
                            <div className="hashTags">
                                <div className="hashTag"><b>골프 레슨</b></div>
                                <div className="hashTag"><b>퍼스널 트레이닝</b></div>
                                <div className="hashTag"><b>과외</b></div>
                                <div className="hashTag"><b>스포츠 마사지</b></div>
                                <div className="hashTag"><b>네일 아트</b></div>
                                <div className="hashTag"><b>왁싱샵</b></div>
                                <div className="hashTag"><b>각종 1:1 서비스</b></div>
                            </div>
                        </div>
                        <div className="image_tree_item">
                            <h1 className="main_content_title_re">
                                <b>일대다(1:N)로 진행되는 비즈니스에서 활용하면 좋아요!</b>
                            </h1>
                            <div className="hashTags">
                                <div className="hashTag"><b>필라테스</b></div>
                                <div className="hashTag"><b>요가</b></div>
                                <div className="hashTag"><b>발레</b></div>
                                <div className="hashTag"><b>각종 단체 레슨</b></div>
                                <div className="hashTag"><b>꽃꽂이 교실</b></div>
                                <div className="hashTag"><b>각종 단체 공방</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ReservationTypeDetial;