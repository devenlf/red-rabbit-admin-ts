import * as React from 'react';

class About extends React.Component{
    constructor(props:any){
        super(props);
        this.state = {...props}
    }
    render(){
        return(
            <div>
               这是审核模块
            </div>
        )
    }
}

export default About