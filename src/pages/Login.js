import React from "react";
import {Button,  Col, Form, Input, Row  } from 'antd';
import styled from "styled-components";




const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};













function Login(){
  // const navigate = useNavigate()
return(
  <>
  <div className="container">
    
   
    
  <Form className="form" initialValues={{remember: true, }}onFinish={onFinish}  onFinishFailed={onFinishFailed} autoComplete="off" >
  <Row>
      <Col span={6}push={9}> <h1>Login</h1></Col></Row>
  <span className="spanhead">Please enter your email address and password to login.</span>
   <Form.Item className="Item"   wrapperCol={{ offset: 9, span: 12, }} name="Name"   rules={[ { required: true, message: 'Please input your username!', }, ]} >
  
      <Input className="input" placeholder="Name"></Input>
   </Form.Item>
   <Form.Item className="Item"  wrapperCol={{  offset:9 , span:12 ,   }}  name="Email"    rules={[ { required: true, message: 'Please input your Email!', }, ]} >
      <Input className="input" placeholder="Email"></Input>
      
    </Form.Item>
    <Row>
      <Col span={6}push={9}>
    <a href="#">Forget your password ?</a>
    </Col>
    </Row>
   
    <Form.Item wrapperCol={{  offset: 9, span: 12,   }}>
      <Button  type="primary" htmlType="submit"  >   Submit  </Button>
       </Form.Item>
  
  </Form>
  </div>
  </>
 
   
    
)
  

}export default Login;
