import * as React from 'react';
import { renderRoutes } from "react-router-config";

class DataAnylc extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <div>
               {renderRoutes(this.props.route.routes)}
            </div>
        )
    }
}

export default DataAnylc