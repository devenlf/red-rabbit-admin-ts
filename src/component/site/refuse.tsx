import * as React from 'react';
import {Checkbox, Input, Row} from 'antd'
const { TextArea } = Input;
interface Iprop{
    status:number,
    getRefuseReason:(refuseReason:any)=>void
}
interface Istate{
    status:number,
}
class Refuse extends React.Component<Iprop,Istate>{
    private options = [
        { 
            label: '落地页最下方需体现开户主体公司名称，请修改', 
            value: '落地页最下方需体现开户主体公司名称，请修改' },
        { 
            label: '站点标题不得随意填写，需与投放产品相关，请优化', 
            value: '站点标题不得随意填写，需与投放产品相关，请优化' 
        },
        { 
            label: '落地页内容与账户行业分类不一致，请检查', 
            value: '落地页内容与账户行业分类不一致，请检查' 
        },
        { 
            label: '落地页图片加载失败，请检查', 
            value: '落地页图片加载失败，请检查' 
        },
        { 
            label: '落地页图片/内容尺度太大，请修改', 
            value: '落地页图片/内容尺度太大，请修改' 
        },
        { 
            label: '落地页无转化入口，请确认', 
            value: '落地页无转化入口，请确认' 
        },
        { 
            label: '落地页不适配手机，请调整', 
            value: '落地页不适配手机，请调整' 
        },
      ];
    constructor(props:Iprop){
        super(props)
        this.state={
            ...props,
        }
    }

    render(){
        return(<div>
                {this.props.status==1?
                    <div className="check-style">
                    <Checkbox.Group style={{width:'100%', paddingTop:'10px'}}  onChange={this.onChangeList}>
                    { this.options.map((item,index)=>{
                        return <Row key={index} style={{marginBottom:'10px'}}>
                                <Checkbox key={index} value={item.value}>{item.label}</Checkbox>
                               </Row>
                    })} 
                    </Checkbox.Group>
                </div> :
                <div className="input-style">
                    <TextArea
                    onChange={this.onChangeText}
                    placeholder="请输入内容"
                    autosize={{maxRows: 6 }}
                    />
                 </div>
            }
        </div>)
    }
    private onChangeList= (checkedValue:string[])=> {
        let refuseList = checkedValue.join(',');
        this.props.getRefuseReason(refuseList);
    }
    private onChangeText= ({target:{value}}:any)=> {
        this.props.getRefuseReason(value);
    }
} 

export default Refuse