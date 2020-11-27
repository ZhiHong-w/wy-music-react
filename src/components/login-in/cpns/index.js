/** 
*本界面是登录弹窗内容组件
*/

import React, { memo, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

/* 
这个是拖拽插件，本组件没有使用
*/
// import Draggable from 'react-draggable'

import {
    WYLoginWrapper
} from './style';
import { ChangeLoginIsShowAction } from '../store'

export default memo(function WYLogin() {

    /*实现拖拽功能需要的状态，
    方法是：运用鼠标事件和translate来实现*/
    //当前弹窗translate的距离，初始值是弹框的长和宽各一半
    const [pageX, setpageX] = useState(-265);
    const [pageY, setpageY] = useState(-186);
    //上一次translate的距离
    const [bpageX, setbpageX] = useState(-265);
    const [bpageY, setbpageY] = useState(-186);
    //判断弹框是否移动，在鼠标点击时设为true，在鼠标抬起时设为false
    const [moving, setMoving] = useState(false);
    //鼠标上一次所在的位置
    const [diffX, setDiffX] = useState(undefined);
    const [diffY, setDiffY] = useState(undefined);


    //弹框是否展示
    const { loginIsShow } = useSelector(state => ({
        loginIsShow: state.getIn(["login", "loginIsShow"])
    }), shallowEqual)

    const dispatch = useDispatch();

    const changeShow = () => {
        dispatch(ChangeLoginIsShowAction(!loginIsShow))
    }


    const mouseDown = (e) => {
        //取消选择复制
        document.oncontextmenu = function (e) { return false };
        document.onselectstart = function (e) { return false };

        setMoving(true);
        e = e || window.event;


        // 当鼠标点下去的时候，设置第一个鼠标上一次移动的位置。
        // const tempX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        // const tempY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        const tempX = e.clientX;
        const tempY = e.clientY;
        setDiffX(tempX);
        setDiffY(tempY);
    }

    //用window.onmuosemove是因为移动的时候鼠标可能超过top-content
    window.onmousemove = (e) => {

        if (moving) {
            e = e || window.event;

            //鼠标目前的位置
            // const pX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
            // const pY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
            const pX = e.clientX;
            const pY = e.clientY;
           // console.log(pX, pY);

            //鼠标移动的距离 = 鼠标目前的位置 - 鼠标上一次的位置 + 上一次translate的距离
            const xH = pX - diffX + bpageX;
            const yH = pY - diffY + bpageY;

            setDiffX(pX);
            setDiffY(pY);

            setpageX(xH);
            setpageY(yH);

            setbpageX(xH);
            setbpageY(yH);
        }
    }

    const mouseUp = (e) => {
        //允许选择复制
        document.oncontextmenu = function (e) { return true };
        document.onselectstart = function (e) { return true };

        moving && setMoving(false);
    }


    return (
        <WYLoginWrapper isShow={loginIsShow} left={pageX} top={pageY}>
            <div className="content">
                <div className="top-content"
                    onMouseDown={mouseDown}
                    onMouseUp={mouseUp}>
                    <span>登录</span>
                    <span className="login-out" onClick={e => changeShow()}>X</span>
                </div>
            </div>
        </WYLoginWrapper>
    )
})
