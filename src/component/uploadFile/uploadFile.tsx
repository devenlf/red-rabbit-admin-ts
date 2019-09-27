import { Upload } from 'antd';
import * as React from 'react';

interface upload{

}
class UploadFile extends React.Component<upload,any>{
    constructor(props:any){
        super(props)
        this.state={
            ...props
        }
    }
}

export default UploadFile
