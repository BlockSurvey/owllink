/* eslint-disable prettier/prettier */
import DisplayNotification from '@/components/notification';
import { nhost } from '@/pages/_app';
import { FieldType } from '@/types/home.type';
import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { useSignUpEmailSecurityKeyEmail } from '@nhost/react'

export default function Signup() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { signUpEmailSecurityKey } = useSignUpEmailSecurityKeyEmail()



  const showSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const handleOk = () => {
    setIsSignupModalOpen(false);
  };

  const handleCancel = () => {
    setIsSignupModalOpen(false);
  };

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const { isError, isSuccess, needsEmailVerification, error } = await signUpEmailSecurityKey(
        values.email
      )
    if (isError) {
      DisplayNotification('error', error ? error.message: "Error");
    }

    if (needsEmailVerification) {
      DisplayNotification(
        'default',
        'You have successfully signed up! Check your email and verify your email address'
      );
      handleCancel();
    }

    if(isSuccess) {
        DisplayNotification("success", "Signed up successfully please log in")
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Button onClick={showSignupModal}> Sign up </Button>
      <Modal
        title="Basic Modal"
        open={isSignupModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
