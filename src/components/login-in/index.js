/**
 * 创建登录弹窗modal
 */

import React, { memo } from 'react'
import ReactDOM from 'react-dom';

import WYLogin from './cpns'

export default memo(function WYLoginIn() {
    return ReactDOM.createPortal(
        <WYLogin />,
        document.getElementById("modal")
    )
})
