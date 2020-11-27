/**
 * 本界面是网站头部内容组件
 */

import React, { memo,useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch,useSelector,shallowEqual } from 'react-redux';

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
} from './style';
import { headerLinks } from '@/common/local-data';
import WYLoginIn from '../login-in';
import { ChangeLoginIsShowAction } from '../login-in/store';


export default memo(function WYAppHeader() {
    
    const [isLogin,setIsLogin] = useState(false);
    const { loginIsShow } = useSelector(state => ({
        loginIsShow: state.getIn(["login","loginIsShow"])
    }),shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        if(!loginIsShow){
            setIsLogin(false);
        }    
    }, [loginIsShow])

    const changeShow = () => {
        dispatch(ChangeLoginIsShowAction(!loginIsShow))
        setIsLogin(true);
    }


    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link} activeClassName="active">
                    {item.title}
                    <i className="sprite-01 icon"></i>
                </NavLink>
            )
        } else {
            return <a href={item.link}>{item.title}</a>
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/#" className="logo sprite-01">网易云音乐</a>
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/音乐" prefix={<SearchOutlined />} />
                    <a className="center" href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter" target="_blank" rel="noopener noreferrer">创作者中心</a>
                    <div className="login" onClick={e => changeShow()}>登录</div>
                    {(isLogin && loginIsShow) && <WYLoginIn />}
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
