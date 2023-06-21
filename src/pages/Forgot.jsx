import { Form, Row, Col, Input } from 'antd';
import {ArrowLeftOutlined } from '@ant-design/icons';
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import React from 'react'

 
const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const Forgot = () =>{
  

    
    return(
        <>
        <div className="container">
            <Form   className="form"> 
                <Link to= '/SignUp'> <ArrowLeftOutlined style={{marginLeft:"38%" ,color:"blue"}}></ArrowLeftOutlined ></Link>Back
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Forgot your password ?</h3>
                <h3 style={{textAlign:"center", fontWeight:"lighter"}}>Please enter the email you use to sign in to Gaize</h3>
                <Row>
                    <Col span={12} push={9}>
                      <Form.Item  label="Email"   name="Email" labelCol={{ span: 24 }} wrapperCol={{ span:12   }}  initialValues={{remember: true, }}onFinish={onFinish}  onFinishFailed={onFinishFailed} rules={[ { required: true, message: 'Please input your Email!', }, ]} >
                         <Input  placeholder="Email"type="email"   ></Input>  <br/>                
  
             


                        </Form.Item>
                     </Col>
                        
                 </Row>
                    <Row>
                    <Col span={12} push={9}>
                            <Form.Item >
                                 <Button  type="primary"  htmlType="submit" >Send Reset Email</Button>
                             </Form.Item>
                         </Col>
                    </Row>
                
             </Form>       
            
        </div>
        </>
    )
}
export default Forgot