import React, { Component } from 'react';
import {Table, Popconfirm, message} from 'antd';
class AlbumList extends Component{
    constructor(){
        super();
        this.state=({
            loading:true,
            data:[]
        })
    }
    // 生命周期函数
    componentDidMount(){
        let that =this;
        fetch('/index/album').then(res=>res.json()).then(data=>{
            that.setState({
                loading:false,
                data:data
            })
        })
    }
    deleteItems(id){
        fetch(`/index/delete?id=${id}`).then(res=>res.json()).then(data=>{
            if(data){
                this.setState({
                    data:this.state.data.filter(v=>v.id!==id)
                });
                message.success('删除成功');
            }else {
                message.success('删除失败');
            }
        })
    }

    render(){
        // let lis = this.state.data.map(v=>(
        //     <li key={v.id}>
        //         {v.name}
        //         <img src={v.pic} style={{width:100,height:100}} alt=""/>
        //     </li>
        // ));
        const columns = [{
            title: '编号',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '歌手',
            dataIndex: 'Artist_name',
            key: 'artist',
            render: text => <a href="#">{text}</a>,
        },{
            title:'封面',
            dataIndex:'pic',
            key:'pic',
            render: text => <img src={text} alt="" style={{width:100,height:100}}/>,
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                  <Popconfirm title="确认删除文件?" onConfirm={()=>this.deleteItems(record.id)}  okText="删除" cancelText="取消">
                      <a href="#">删除</a>
                    </Popconfirm>


                </span>
            ),
        }];
        return(
            <ul className="albumlist " style={this.state.loading?null:{justifyContent:'flex-start'}}>
                {this.state.loading?<div>加载中……</div>:null}
                {/*{lis.length?lis:null}*/}
                <Table columns={columns} dataSource={this.state.data} />
            </ul>

        )}
}
export default AlbumList;
