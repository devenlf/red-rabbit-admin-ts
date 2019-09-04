import * as React from 'react';
class About extends React.Component{
    constructor(props:any){
        super(props);
    }
    componentDidMount() {
        console.log(1231);
    }
    render(){
        return(
            <div>
               这是站点列表模块
            </div>
        )
    }
}

export default About