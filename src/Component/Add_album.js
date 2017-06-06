import React, { Component } from 'react';
import {Form,Input,Button,Icon,Upload,message} from 'antd';
const FormItem=Form.Item;
class Add_album extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            var s='';
            for(var k in values){
                s+=k+'='+values[k]+'&&';
            }
            console.log(values);
            if (!err) {
                // console.log('Received values of form: ', values);
                fetch('/index/add_album'
                    ,{method:'post',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    credentials: 'same-origin',
                    body:s}
                ).then(res=>res.json()).then(data=>{
                    if(data){
                        this.setState({
                            data:this.state.data.filter(v=>v.id===v.id+1)
                        });
                        message.success('添加成功');
                    }else {
                        message.success('添加失败');
                    }
                })
            }
        });
    };
    render(){
        const { getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return(
            <Form
                onSubmit={this.handleSubmit}>
                <FormItem  {...formItemLayout} label='专辑名'>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: '不能为空' }],
                    })(
                        <Input  placeholder="请输入专辑名" />
                    )}
                </FormItem>
                <FormItem  {...formItemLayout} label='歌手'>
                    {getFieldDecorator('Artist_name', {
                        rules: [{ required: true, message: '不能为空' }],
                    })(
                        <Input  placeholder="请输入歌手名" />

                    )}

                </FormItem>
                <FormItem  {...formItemLayout} label="上传文件">
                    <div className="dropbox">
                        {getFieldDecorator('pic')(
                            <Upload.Dragger >
                                <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                            </Upload.Dragger>
                        )}
                    </div>
                </FormItem>
                <FormItem  {...formItemLayout}>
                    <Button
                    type="primary"
                    htmlType="submit"
                >
                    提交
                </Button>
                </FormItem>
            </Form>
        )
    }
}
const Add_albums = Form.create()(Add_album);
export default Add_albums;
