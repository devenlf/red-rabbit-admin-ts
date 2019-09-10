import * as React from 'react';
import { Row, Col, Select, Input, Table, Button, Popover, Modal, Pagination } from 'antd';
import { ColumnProps } from 'antd/es/table';
import Site from "../../api/siteList"
import "./reviewSite.css"
const { Option } = Select;
const { Search } = Input;
const InputGroup = Input.Group;
interface siteListState{
  searchType:string,
  searchValue:string,
  statusValue:string,
  currentPage:number,
  pageSize:number,
  dataSource:any[],
  pageTotal:number,
}
interface userSite{
  key:number|string,
  title:string,
  dataIndex?:string,
  preview?(obj:any):void
}
const siteStatusOptions:{ value: string; label: string; }[] =[
    {
      value: "100",
      label: "全部",
    },
    {
      value: "0",
      label: "审核通过",
    },
    {
      value: "1",
      label: "待审核",
    },
    {
      value: "2",
      label: "审核拒绝",
    },
  ]
const siteSearchTypeOptions:{ value: string; label: string; }[]= [
    {
      value: "site.id",
      label: "站点ID",
    },
    {
      value: "site.name",
      label: "站点名称",
    },
    {
      value: "site.refuseReason",
      label: "拒绝理由",
    },
    {
      value: "site.userId",
      label: "账户ID",
    },
  ]
//颜色显示
const colorSelect = function(status:string):string{
    switch(status){
      case '0' :
        return 'rgb(118, 209, 132)';
      case '1' :
         return 'rgb(53, 130, 251)';
      case '2' :
         return 'rgb(255, 97, 97)';
      default:
         return 'rgb(0, 0, 0)'
    }
 }  


class siteList extends React.Component<any,siteListState>{
    private columns:ColumnProps<userSite>[] =[
    {title:'站点ID',dataIndex:'id',key:'id'},
    {title:'站点名称',key:'name',width:300,className:'overflow-box',render:({name})=>{
      return <Popover content={name} title="站点名称">
              <span>{name}</span>
            </Popover>
   }},
    {title:'审核结果',key:'status',render:({status})=>{
      return <span style={{color:colorSelect(status)}}>
              {siteStatusOptions.filter(item=>{
                return item.value == status
              })[0]['label']}
             </span>
    }},
    {title:'拒绝理由',width:300,key:'refuseReason',className:'overflow-box',render:({refuseReason})=>{
      return <Popover content={refuseReason} title="拒绝理由">
              <span>{refuseReason}</span>
            </Popover>
   }},
    {title:'账户ID',dataIndex:'userId',key:'userId'},
    {title:'公司名称',dataIndex:'company',key:'company'},
    {title:'送审时间',dataIndex:'submitTime',key:'submitTime'},
    {title:'审核时间',dataIndex:'auditTime',key:'auditTime'},
    {title:'关联创意',dataIndex:'ideas',width:300,key:'ideas'},
    {title:'站点链接',key:'link',render:({siteUrlPrefix,siteUrlSuffix,staticUrlSuffix,staticUrlPrefix})=>{
      return <a 
      onClick={()=>this.preview({siteUrlPrefix,siteUrlSuffix,staticUrlSuffix,staticUrlPrefix})}
      >点击打开</a>
    }},
    {title:'操作',key:'opeation',width:200,fixed:'right',render:({id})=>{
       return <div>
                    <Button type="primary" size="default" onClick={()=>this.expressFunction([id],0)} style={{marginRight:10}} >
                      通过
                    </Button> 
                    <Button type="danger" size="default">
                      拒绝
                    </Button> 
              </div> 
    }},
 ]

    constructor(props:any){
        super(props);
        this.state = {
            ...props,
            dataSource:[],
            searchType:'',
            searchValue:'',
            statusValue:'',
            currentPage:1,
            pageSize:20,
            pageTotal:0,
        }
    }

    async componentDidMount(){
        await this.getSiteListData()
    }

    render(){
        return(
            <div className="main-box">
                <div className="title-name">
                审核列表
                </div>
                <div className="main-content">
                   <Row type="flex" justify="end" align="middle">
                       <Col span={4} className="group-select">
                               <label>状态:</label>
                               <Select style={{ width: 120 }} defaultValue="100" onChange={this.handleChange}>
                                   {siteStatusOptions.map((item,index:number)=>{
                                       return <Option key={index} value={item.value}>{item.label}</Option>
                                   })}
                                </Select>
                       </Col>
                       <Col className="group-select" span={5} style={{minWidth: 340}}>
                               <label style={{width:50}}>类别:</label>
                               <InputGroup compact style={{width: 280}}>
                               <Select style={{ width: 100 }} defaultValue="site.id" onChange={this.handleChange}>
                                   {siteSearchTypeOptions.map((item,index:number)=>{
                                       return <Option key={index} value={item.value}>{item.label}</Option>
                                   })}
                                </Select>
                               <Search style={{width:180}} placeholder="请输入关键字" onSearch={value => console.log(value)} enterButton />
                               </InputGroup>
                       </Col>
                   </Row>
                   <Row className="table-list">
                       <Table scroll={{ x: '150%' }} dataSource={this.state.dataSource} columns={this.columns} pagination={{ pageSize: this.state.pageSize }} rowKey={() => Math.random()*100+''}></Table>
                   </Row>
                   <Row>
                   <Pagination
                    showSizeChanger
                    onShowSizeChange={this.onShowSizeChange.bind(this)}
                    onChange={this.onShowChange.bind(this)}
                    defaultCurrent={1}
                    total={this.state.pageTotal}
                  />
                   </Row>
                </div>
            </div>
        )
    }

    handleChange(val:string){
        console.log(val)
    }

    async getSiteListData(upload:number=0){
        let param = {
            page: !upload?this.state.currentPage:0,
            size: !upload?this.state.pageSize:20,
            searchType: this.state.searchType,
            searchValue: this.state.searchValue,
            status: this.state.statusValue,
        }
        let {data,code} = await Site.getSiteList(param)
        if(code==200){
            this.setState({
                dataSource:data.list,
                pageTotal:data.total,
            })
        }
    }

    //分页
    private async onShowSizeChange(current:number, pageSize:number) {
      this.setState({
        currentPage:1,
        pageSize:pageSize,
      })
      await this.getSiteListData()
    }

    //改变当前页数
    private async onShowChange(page:number,pageSize:number){
      console.log(page,pageSize)
      this.setState({
        currentPage:page,
        pageSize:pageSize,
      })
      await this.getSiteListData()
    }

    // 通过
    private expressFunction(siteID:number[],status:number){
      let that = this;
      Modal.confirm({
        title: '确认通过已选站点?',
        okText: '确认',
        cancelText: '取消',
        async onOk() {
          let {code} = await Site.siteUpdate({siteId:siteID,status})
            if(code==200){
              that.getSiteListData(1)
            }
        },
        onCancel() {},
      });
    }

    //视图浏览
    private preview({siteUrlPrefix,siteUrlSuffix,staticUrlSuffix,staticUrlPrefix}:any){
      if (staticUrlSuffix) {
        window.open(`${staticUrlPrefix}${staticUrlSuffix}`, "_blank");
      } else {
        window.open(`${siteUrlPrefix}${siteUrlSuffix}`, "_blank");
      }
    }
}

export default siteList