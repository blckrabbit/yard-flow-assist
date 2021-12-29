import React, {Component} from "react";
import {Modal,Menu} from 'antd'
import ReactDOM from 'react-dom';
import {Designer,Item,ItemPanel,Flow} from '../lib/index';

 class Demo extends Component {
  constructor(props){
    super(props);
    this.wfdRef = React.createRef();
    this.state = {
        modalVisible: false,
        selectedLang: 'zh',
    };
    this.langMenu = (
        <Menu onClick={(lang)=>{this.changeLang(lang)}}>
          <Menu.Item key="zh">
                <span role="img" >
                  {"🇨🇳"}
                </span>
            {" 简体中文"}
          </Menu.Item>
          <Menu.Item key="en">
                <span role="img" >
                  {"🇬🇧"}
                </span>
            {" English"}
          </Menu.Item>
        </Menu>
      );
  }

  

  handleModalVisible(modalVisible){
    this.setState({modalVisible})
  }

  changeLang({key}){
    this.setState({selectedLang:key})
  }

  render(){
    const data = {
      nodes: [
        // { id: 'startNode1', x: 50, y: 200, label: '', clazz: 'start', },
        // { id: 'startNode2', x: 50, y: 320, label: '', clazz: 'timerStart', },
        { id: 'taskNode1', x: 200, y: 200, label: '主任审批', clazz: 'userTask',  },
        { id: 'taskNode2', x: 400, y: 200, label: '经理审批', clazz: 'scriptTask',  },
        // { id: 'gatewayNode', x: 400, y: 320, label: '金额大于1000', clazz: 'inclusiveGateway',  },
        { id: 'taskNode3', x: 400, y: 450, label: '董事长审批', clazz: 'receiveTask', },
        // { id: 'catchNode1', x: 600, y: 200, label: '等待结束', clazz: 'signalCatch', },
        // { id: 'endNode', x: 600, y: 320, label: '', clazz: 'end', }
      ],
      edges: [
        // { source: 'startNode1', target: 'taskNode1', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        // { source: 'startNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        // { source: 'taskNode1', target: 'catchNode1', sourceAnchor:0, targetAnchor:0, clazz: 'flow' },
        // { source: 'taskNode1', target: 'taskNode2', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        { source: 'taskNode2', target: 'taskNode3', sourceAnchor:1, targetAnchor:0, clazz: 'flow' },
        // { source: 'taskNode1', target: 'taskNode2', sourceAnchor:2, targetAnchor:2, clazz: 'flow' },
        // { source: 'gatewayNode', target: 'taskNode3', sourceAnchor:2, targetAnchor:0, clazz: 'flow' },
        // { source: 'gatewayNode', target: 'endNode', sourceAnchor:1, targetAnchor:2, clazz: 'flow'},
        // { source: 'taskNode3', target: 'endNode', sourceAnchor:1, targetAnchor:1, clazz: 'flow' },
        // { source: 'catchNode1', target: 'endNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' }
      ]
    };

    const data1 = {
      nodes: [{ id: 'startNode1', x: 50, y: 200, label: '', clazz: 'start', },
        { id: 'startNode2', x: 50, y: 320, label: '', clazz: 'timerStart', },
        { id: 'taskNode1', x: 200, y: 200, label: '主任审批', clazz: 'userTask',  },
        { id: 'taskNode2', x: 400, y: 200, label: '经理审批', clazz: 'scriptTask', active:true },
        { id: 'gatewayNode', x: 400, y: 320, label: '金额大于1000', clazz: 'gateway',  },
        { id: 'taskNode3', x: 400, y: 450, label: '董事长审批', clazz: 'receiveTask', },
        { id: 'catchNode1', x: 600, y: 200, label: '等待结束', clazz: 'signalCatch', },
        { id: 'endNode', x: 600, y: 320, label: '', clazz: 'end', }],
      edges: [{ source: 'startNode1', target: 'taskNode1', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        { source: 'startNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        { source: 'taskNode1', target: 'catchNode1', sourceAnchor:0, targetAnchor:0, clazz: 'flow' },
        { source: 'taskNode1', target: 'taskNode2', sourceAnchor:1, targetAnchor:3, clazz: 'flow' },
        { source: 'taskNode2', target: 'gatewayNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' },
        { source: 'taskNode2', target: 'taskNode1', sourceAnchor:2, targetAnchor:2, clazz: 'flow' },
        { source: 'gatewayNode', target: 'taskNode3', sourceAnchor:2, targetAnchor:0, clazz: 'flow' },
        { source: 'gatewayNode', target: 'endNode', sourceAnchor:1, targetAnchor:2, clazz: 'flow'},
        { source: 'taskNode3', target: 'endNode', sourceAnchor:1, targetAnchor:1, clazz: 'flow' },
        { source: 'catchNode1', target: 'endNode', sourceAnchor:1, targetAnchor:0, clazz: 'flow' }]
    };

    const candidateUsers = [{id:'1',name:'Tom'},{id:'2',name:'Steven'},{id:'3',name:'Andy'}];
    const candidateGroups = [{id:'1',name:'Manager'},{id:'2',name:'Security'},{id:'3',name:'OA'}];
    const height = document.documentElement.clientHeight;
    console.log(height+'a2222---');
    console.log(this.wfdRef);
    const { modalVisible,selectedLang } = this.state;
    return (
      <div style={{height:'500px',width:'900px'}}>
        {/* <Button style={{float:'right',marginTop:6,marginRight:6}} onClick={()=>this.wfdRef.current.graph.saveXML()}>导出XML</Button>
        <Button style={{float:'right',marginTop:6,marginRight:6}} onClick={()=>this.handleModalVisible(true)}>查看流程图</Button>
        <Dropdown overlay={this.langMenu} trigger={['click']}>
          <Button style={{float:'right',marginTop:6,marginRight:10}} >语言</Button>
        </Dropdown> */}
        <Designer ref={this.wfdRef} height={500} mode={"edit"}>
          <ItemPanel>
            <>
              <Item className="item" model={"{clazz:'userTask',size:'80*44',label:'输入'}"}>
                  <div>输入</div>
              </Item>
              <Item className="item" model={"{clazz:'subProcess',size:'80*44',label:'输出'}"}>
                  <div>输出</div>
              </Item>
              <Item className="item" model={"{clazz:'scriptTask',size:'80*44',label:'字段设置'}"}>
                  <div>字段设置</div>
              </Item>
              <Item className="item" model={"{clazz:'javaTask',size:'80*44',label:'过滤'}"}>
                  <div>过滤</div>
              </Item>
              <Item className="item" model={"{clazz:'mailTask',size:'80*44',label:'分组汇总'}"}>
                  <div>分组汇总</div>
              </Item>
              <Item className="item" model={"{clazz:'receiveTask',size:'80*44',label:'关联'}"}>
                  <div>关联</div>
              </Item>
            </>
          </ItemPanel>
          <Flow height={height} data={data} />
        </Designer>
        <Modal title="查看流程图" visible={modalVisible} onCancel={()=>this.handleModalVisible(false)} width={800} maskClosable={false} footer={null} destroyOnClose bodyStyle={{height}} >
          <Designer data={data1} height={height-40} isView />
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(
    <div><Demo name="douyacun"/></div>,
    document.getElementById('root')
)