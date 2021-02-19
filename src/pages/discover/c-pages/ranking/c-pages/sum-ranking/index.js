import React, { PureComponent } from 'react';

import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeImageSize } from '@/utils/format-utils';

import { SumRankingWrapper } from './style';
import { changeCurrentIndex,getRankingDispatch } from '../../store/actionCreators';

class SumRanking extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            currentIndex: props.currentIndex
        }
    }
    componentDidMount(){
        //if(this.props.topList[this.state.currentIndex]){
            const id = ( this.props.topList[this.state.currentIndex] && this.props.topList[this.state.currentIndex].id);
            if(!id) return;
            this.props.getRanking(id);
       // }
    }
    componentDidUpdate(){
        const id = this.props.topList[this.state.currentIndex].id;
        this.props.getRanking(id);
    }
    async hanldeItemClick(index){
        await this.props.changeCurrentIndex(index);
        
        this.setState({currentIndex: this.props.currentIndex});
        const id = this.props.topList[this.state.currentIndex].id;
        this.props.getRanking(id);
    }
    render() {
        return (
            <SumRankingWrapper>
                {
                    this.props.topList.map((item,index) => {
                        let header;
                        if (index === 0 || index === 4) {
                            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
                          }
                          return (
                            <div key={item.id}>
                              {header}
                              <div className={classNames("item", { "active": index === this.state.currentIndex })}
                                onClick={e => this.hanldeItemClick(index)}>
                                <img src={changeImageSize(item.coverImgUrl, 40)} alt="" />
                                <div className="info">
                                  <div className="name">{item.name}</div>
                                  <div className="update">{item.updateFrequency}</div>
                                </div>
                              </div>
                            </div>
                          )
                    })
                }
            </SumRankingWrapper>
        )
    }
}

const mapStateToProps = state => ({
    topList: state.getIn(["ranking","topList"]),
    currentIndex: state.getIn(["ranking","currentIndex"])
})
const mapDispatchToProps = dispatch => ({
    getRanking: function(id){
        dispatch(getRankingDispatch(id));
    },
    changeCurrentIndex: function(index){
        dispatch(changeCurrentIndex(index));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SumRanking);
