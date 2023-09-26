// import { useThemeStore } from '@/stores/theme.store';
import { Button, Checkbox, Form, Input, Switch, theme, Typography } from 'antd';
import { useState } from 'react';
import { nhost } from './_app';
import DisplayNotification from '@/components/notification';
import { useRouter } from 'next/router';

export default function Login() {
  const { token } = theme.useToken();
  const [toggleSignup, setToggleSignup] = useState(true);
  //   const switchTheme = useThemeStore(state => state.switchTheme);
  //   const currentTheme = useThemeStore(state => state.currentTheme);
  const { Title, Text } = Typography;

  //   const onThemeChange = () => switchTheme();
  const SignUpAction = () => {
    if (toggleSignup)
      return (
        <div>
          <Text> Already have an account? </Text>
          <Button onClick={() => setToggleSignup(false)} type="link">
            {' '}
            Sign in{' '}
          </Button>
        </div>
      );
    else
      return (
        <div>
          <Text> Dont have an account? </Text>
          <Button onClick={() => setToggleSignup(true)} type="link">
            {' '}
            Sign up{' '}
          </Button>
        </div>
      );
  };

  return (
    <div
      style={{ backgroundColor: '#3f4372' }}
      className="h-full flex justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col gap-4">
        <Title level={2}>Sign up</Title>
        {toggleSignup ? <Signup /> : <Signin />}
        <SignUpAction />
      </div>
    </div>
  );
}

function Signup() {
  const onFinish = async (values: FieldType) => {
    const signupRes = await nhost.auth.signUp({
      email: values.email,
      password: values.password
    });
    if (!signupRes.session && !signupRes.error) {
      DisplayNotification(
        'default',
        'Signed up successfully please verify your email address by checking your email.'
      );
    }
    if (signupRes.error) {
      DisplayNotification('error', signupRes.error.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    email: string;
    password: string;
  };
  return (
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
        <Input type="email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password minLength={9} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

function Signin() {
  const router = useRouter();

  const onFinish = async (values: FieldType) => {
    const signinRes = await nhost.auth.signIn({
      email: values.email,
      password: values.password
    });

    if (signinRes.error) {
      DisplayNotification('error', signinRes.error.message);
    }

    if (signinRes.session) {
      DisplayNotification('default', 'Signed in!');
      router.push('/dashboard');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    email: string;
    password: string;
  };
  return (
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
        <Input type="email" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password minLength={9} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}
