export const scrollTo = (element,to,duration) => {
    if (duration <= 0) return;
    
    let difference = to - element.scrollTop;
    //实现动画效果，每隔10ms滑动一分部距离，总共300/10=30次
    let perTick = difference / duration * 10;
  
    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}