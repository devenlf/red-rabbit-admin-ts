import * as React from 'react';

export default class Inbox extends React.Component{
    constructor(props:any){
        super(props);
        this.state = { ...props}
    }
    render(){
        return(
           <div>
            这是error模块
          </div>
        )
    }
}