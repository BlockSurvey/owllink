import { useProfileStore } from '@/stores/profile.store';
import { Collapse, Typography, theme } from 'antd';
import { GetSvgIcon } from '../icon/GetSvgIcon';

const { Text } = Typography;

export default function PreviewComponent() {
  const { token } = theme.useToken();
  const name = useProfileStore(state => state.name);
  const description = useProfileStore(state => state.description);

  return (
    <div
      style={{ backgroundColor: `${token.colorBgLayout}` }}
      className="h-full block lg:flex lg:flex-[2]"
    >
      {name && (
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-4 mt-10 w-full items-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <Text className="text-lg" strong>
                {name}
              </Text>
              <GetSvgIcon name="verified" size={20} />
            </div>
            <Text type="secondary">{description}</Text>
          </div>
          <div className="flex flex-col items-center w-full mt-8">
            <Collapse
              bordered={false}
              expandIconPosition="end"
              items={[
                { key: '1', label: 'My Bitcoin NFTs', children: <p>NFTs</p> }
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
}
