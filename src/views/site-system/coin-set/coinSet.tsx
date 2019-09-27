import * as React from 'react';
import { Form, InputNumber, Input, Row, Col } from 'antd';
import '../coin-set/coinSet.css'
const fromItemLayout = {
    labelCol: {span: 2},
    wrapperCol: {span: 16},
}
interface CoinSet {
    coinPercent: number,
    rate: number,
    coinSetInterval: any,
    bannerFile: any,
    // [propName:string]:any,
}
class CoinSet extends React.Component<CoinSet,any>{
    constructor(props: Readonly<any>){
        super(props);
        this.state = {
            ...props,
            coinPercent: 0,
            rate: 0,
            coinSetInterval:'',
            bannerFile: '',
        }
    }
    render(){
        return(
            <div className="main-box">
                <div className="title-name">
                金币系统
                </div>
                <div className="main-content">
                    <Form layout={'horizontal'}>
                        <Form.Item className="label-title" label="订单金币抵扣比例:" { ...fromItemLayout }>
                            <InputNumber
                                defaultValue={0}
                                min={0}
                                max={100}
                                formatter={value => `${this.state.coinPercent}%`}
                                onChange={this.coinPercentChange}
                            ></InputNumber>
                        </Form.Item>
                        <Form.Item className="label-title" label="汇率:" { ...fromItemLayout }>
                          <InputNumber min={0} step={1} onChange={this.rateChange} />
                             <span className="rate-span">(可兑换 1 人民币)</span>
                        </Form.Item>
                        <Form.Item className="label-title" label="金币区间:" { ...fromItemLayout }>
                            <Row>
                            <Col span={ 8 }>
                            <Input  placeholder="请输入金币区间，如:'0,0.3,0.6,...'"></Input>
                            </Col>
                            <Col span={ 16 }>
                            <span className="rate-span">(英文逗号分隔)</span>
                            </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item className="label-title" label="banner上传:" { ...fromItemLayout }></Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

    private coinPercentChange=(value:number)=>{
        if(!value){
            value = 0
        }
        this.setState({
            coinPercent:value
        })
    }
    
    private rateChange=(value:number) =>{

    }
}

export default CoinSet