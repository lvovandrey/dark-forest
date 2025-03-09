import React, { useState } from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';
import css from './LoginForm.module.css'
import axios from 'axios';

export const LoginForm = (props) => {
  const login = (creditionals) => {
    axios.post(`http://localhost:8089/auth/login/`, creditionals).then((response) => {
      debugger
      props.setUserData({
        login: response.data.login,
        userId: response.data.userId,
        token: response.data.token
      }, true)
    }).catch((error) => {
      debugger
      props.setUserData({ login: null, userId: null, token: null }, false)
      onFinishFailed()
    });
  }

  const onFinishFailed = (errorInfo) => {
    setOpenLoginFailedDialog(true)
  };

  const [openLoginFailedDialog, setOpenLoginFailedDialog] = useState(false);
  
  const showLoginFailedDialog = () => {
    setOpenLoginFailedDialog(true);
  };
  const hideLoginFailedDialog = () => {
    setOpenLoginFailedDialog(false);
  };

  return (
    <>
      <Modal
        title="Login failed"
        open={openLoginFailedDialog}
        onCancel={hideLoginFailedDialog} footer={null}>
        <p style={{ color: "black" }}>Login or password is incorrect</p>
      </Modal>

      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}
        onFinish={login}
        onFinishFailed={showLoginFailedDialog}
        autoComplete="off">
        <Form.Item label={<label style={{ color: "white" }}>Login</label>} name="username" rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="password" label={<label style={{ color: "white" }}>Password</label>}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            <Typography strong level={2} className={css.button_text} >
              Submint
            </Typography>
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}