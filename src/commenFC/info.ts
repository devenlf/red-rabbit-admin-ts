import { Modal } from 'antd'
export default class Info<T>{
    public infoBox(html:string,title:string,type:string = 'info',callback=()=>{}) {
        Modal[type]({
          title: title,
          content: (html),
          onOk() {
              callback()
          },
        });
      }
}