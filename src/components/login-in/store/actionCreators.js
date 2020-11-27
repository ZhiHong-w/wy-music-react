import * as actionType from './constants';

export const ChangeLoginIsShowAction = (loginIsShow) => ({
    type: actionType.CHANGE_IS_SHOW,
    loginIsShow
})