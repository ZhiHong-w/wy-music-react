import React, { PureComponent } from 'react';
import {connect} from 'react-redux';

import { WYMineWrapper } from './style';
import WYLoginIn from '@/components/login-in';
import { ChangeLoginIsShowAction } from '../../components/login-in/store';

class WYMine extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            login: false
        }
    }

    componentDidUpdate(){
        if(!this.props.loginIsShow){
          this.setState({
            login:false
          })
        }
    }

    changeLoginIn(){
        const {loginIsShow,changeLogin} = this.props;
        changeLogin(!loginIsShow);
        this.setState({
          login: !loginIsShow
        })
    }

    render() {
        const {loginIsShow} = this.props;
        return (
            <WYMineWrapper>
                <div className="content wrap-v2">
                    <div className="image">
                        <button className="login" onClick={e => this.changeLoginIn()}>立即登录</button>
                    </div>
                </div>
                {( this.state.login && loginIsShow)  && <WYLoginIn />}
            </WYMineWrapper>
        )
    }
}

const mapStateToProps = state => ({
    loginIsShow: state.getIn(["login","loginIsShow"])
  })
  const mapDispatchToProps = dispatch => ({
    changeLogin: function(show){
      console.log(show);
      dispatch(ChangeLoginIsShowAction(show))
    }
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(WYMine);
