import { useThemeStore } from '@/stores/theme.store';
import { Button, Switch, theme } from 'antd';

export default function Login() {
  const { token } = theme.useToken();
  const switchTheme = useThemeStore(state => state.switchTheme);
  const currentTheme = useThemeStore(state => state.currentTheme);

  const onThemeChange = () => switchTheme();
  return (
    <div style={{ backgroundColor: token.colorBgContainer }} className="h-full">
      <Button type="primary">login</Button>
      <Switch
        checked={currentTheme === 'dark' ? true : false}
        defaultChecked
        onChange={onThemeChange}
      />
    </div>
  );
}
