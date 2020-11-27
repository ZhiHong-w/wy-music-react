import React, { PureComponent,createRef } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { LyricPanelWrapper } from './style';
import { scrollTo } from '@/utils/panel-scroll'

class WYLyricPanel extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
        this.panelRef = createRef();
    }

    componentDidUpdate(){
        const { currentLyricIndex } = this.props;
        if(currentLyricIndex < 3) return;
        scrollTo(this.panelRef.current, (currentLyricIndex - 3)*32, 300);
    }
    
    render() {
        const { lyricList, currentLyricIndex } = this.props;

        return (
            <LyricPanelWrapper ref={this.panelRef}>
                <div className={"lrc-content"}>
                    {
                        lyricList.map((item,index)=> {
                            return (
                                <div key={item.time}
                                  className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                                  {item.content}
                                </div>
                              )
                        })
                    }
                </div>
            </LyricPanelWrapper>
        )
    }
}


const mapStateToProps = state => ({
   lyricList: state.getIn(["player","lyricList"]),
   currentLyricIndex: state.getIn(["player","currentLyricIndex"])
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(WYLyricPanel)
