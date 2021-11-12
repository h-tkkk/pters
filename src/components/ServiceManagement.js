import React, { Component } from 'react';

import TabContArr1 from './funcComponents/TabContArr1';
import TabContArr2 from './funcComponents/TabContArr2';
import TabContArr3 from './funcComponents/TabContArr3';
import TabContArr4 from './funcComponents/TabContArr4';

import "./tabs.scss";

class ServiceManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: "1",
        };
    }
    
    handleChange = (e) => {
        this.setState({
            tabValue: e.target.value
        });
    }

    render() {
        const detail = [
            {
                class: 'tab1',
                vlaue: '1',
                img: 'img/rs2.png',
                title: '회원 관리'
            },
            {
                class: 'tab2',
                vlaue: '2',
                img: 'img/rs2.png',
                title: '서비스(수업)관리'
            },
            {
                class: 'tab3',
                vlaue: '3',
                img: 'img/rs3.png',
                title: '회원권(수강권)관리'
            },
            {
                class: 'tab4',
                vlaue: '4',
                img: 'img/rs4.png',
                title: '그 외 유용한 기능'
            },
        ];

        return (
            <section className="home-6">
                <div className="grid__item--1of1 text-center">
                    <h2>피터스를 더욱 잘 활용하기 위한 꿀팁</h2>
                    <div className="tabs">
                        {detail.map((obj) =>
                            <input
                                type="radio"
                                name="tab"
                                id={obj.class}
                                className={obj.class}
                                value={obj.vlaue}
                                checked={this.state.tabValue === obj.vlaue}
                                onChange={this.handleChange}
                            />
                        )}
                        {detail.map((obj) =>
                            <label htmlFor={obj.class} className="labelTabs">
                                <i className="icon email-cal"></i><span>{obj.title}</span>    
                            </label>
                        )}
                        <TabContArr1 />
                        <TabContArr2 />
                        <TabContArr3 />
                        <TabContArr4 />
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceManagement;
