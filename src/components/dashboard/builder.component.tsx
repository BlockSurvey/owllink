import {
  Button,
  Checkbox,
  Divider,
  Dropdown,
  Input,
  Modal,
  Switch,
  Typography,
  Upload,
  theme
} from 'antd';
import { GetSvgIcon } from '../icon/GetSvgIcon';
import {
  CameraOutlined,
  CloseCircleOutlined,
  CopyOutlined,
  FacebookOutlined,
  LinkOutlined,
  LinkedinOutlined,
  MailOutlined,
  PlusOutlined,
  RedditOutlined,
  SettingOutlined,
  ShareAltOutlined,
  TwitterOutlined,
  UserOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ReactElement, useState } from 'react';
import { useSignOut } from '@nhost/nextjs';
import { useThemeStore } from '@/stores/theme.store';
import { Constants } from 'common/constants';
import { useProfileStore } from '@/stores/profile.store';

const { Text, Title } = Typography;

export default function BuilderComponent() {
  const { token } = theme.useToken();
  const { signOut } = useSignOut();
  const switchTheme = useThemeStore(state => state.switchTheme);
  const name = useProfileStore(state => state.name);
  const setName = useProfileStore(state => state.setName);
  const description = useProfileStore(state => state.description);
  const setDescription = useProfileStore(state => state.setDescription);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isNftModalOpen, setIsNftModalOpen] = useState(false);
  const [isSocialsModalOpen, setIsSocialsModalOpen] = useState(false);
  const [isAddlinkModalOpen, setIsAddlinkModalOpen] = useState(false);

  const showSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleOk = (type: string) => {
    switch (type) {
      case 'settings':
        setIsSettingsModalOpen(false);
        break;

      case 'nft':
        setIsNftModalOpen(false);
        break;

      case 'socials':
        setIsSocialsModalOpen(false);
        break;

      case 'addlink':
        setIsAddlinkModalOpen(false);
        break;

      default:
        break;
    }
  };

  const handleCancel = (type: string) => {
    switch (type) {
      case 'settings':
        setIsSettingsModalOpen(false);
        break;

      case 'nft':
        setIsNftModalOpen(false);
        break;

      case 'socials':
        setIsSocialsModalOpen(false);
        break;

      case 'addlink':
        setIsAddlinkModalOpen(false);
        break;

      default:
        break;
    }
  };

  const shareItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Twitter
        </a>
      ),
      icon: (
        <TwitterOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    },
    {
      key: '2',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Facebook
        </a>
      ),
      icon: (
        <FacebookOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    },
    {
      key: '3',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Linkedin
        </a>
      ),
      icon: (
        <LinkedinOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    },
    {
      key: '4',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          WhatsApp
        </a>
      ),
      icon: (
        <WhatsAppOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    },
    {
      key: '5',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Telegram
        </a>
      ),
      icon: (
        <MailOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    },

    {
      key: '6',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Reddit
        </a>
      ),
      icon: (
        <RedditOutlined
          style={{ color: `${token.colorPrimary}` }}
          rev={undefined}
        />
      )
    }
  ];

  const profileItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          My transactions
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          My QR code
        </a>
      )
    },
    {
      type: 'divider'
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Buy Owl Link NFT
        </a>
      ),
      icon: <LinkOutlined rev={undefined} />
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Read light paper
        </a>
      ),
      icon: <LinkOutlined rev={undefined} />
    },
    {
      type: 'divider'
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          About us
        </a>
      ),
      icon: <LinkOutlined rev={undefined} />
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Join community
        </a>
      ),
      icon: <LinkOutlined rev={undefined} />
    },
    {
      key: '7',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Smart contract
        </a>
      ),
      icon: <LinkOutlined rev={undefined} />
    },
    {
      type: 'divider'
    },
    {
      key: '8',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Share feedback
        </a>
      )
    },
    {
      key: '9',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          FAQ
        </a>
      )
    },
    {
      key: '10',
      label: (
        <a onClick={switchTheme} rel="noopener noreferrer" href="#">
          Switch theme
        </a>
      )
    },
    {
      key: '11',
      label: (
        <a
          onClick={async () => await signOut()}
          rel="noopener noreferrer"
          href="#"
        >
          Sign out
        </a>
      )
    }
  ];

  const uploadButton = (
    <div>
      <CameraOutlined rev={undefined} />
    </div>
  );

  return (
    <div
      className="h-full block lg:flex lg:flex-col lg:flex-1 px-4 py-6 relative"
      style={{ backgroundColor: ` ${token.colorFill}` }}
    >
      <div className="w-full flex flex-row justify-between">
        <GetSvgIcon name="owlIcon" style={{ cursor: 'pointer' }} size={40} />
        <div className="flex flex-row gap-4">
          <Button
            icon={
              <CopyOutlined
                style={{ color: `${token.colorPrimary}` }}
                rev={undefined}
              />
            }
            shape="circle"
          ></Button>

          <Dropdown trigger={['click']} menu={{ items: shareItems }}>
            <Button
              icon={
                <ShareAltOutlined
                  style={{ color: `${token.colorPrimary}` }}
                  rev={undefined}
                />
              }
              shape="circle"
            ></Button>
          </Dropdown>

          <Button
            onClick={showSettingsModal}
            icon={
              <SettingOutlined
                style={{ color: `${token.colorPrimary}` }}
                rev={undefined}
              />
            }
            shape="circle"
          ></Button>

          <Dropdown trigger={['click']} menu={{ items: profileItems }}>
            <Button
              type="primary"
              icon={<UserOutlined rev={undefined} />}
              shape="circle"
            ></Button>
          </Dropdown>
        </div>
      </div>

      <div className="mt-8 flex flex-row gap-6 items-center pb-4">
        <div>
          <Upload
            listType="picture-circle"
            // fileList={fileList}
            // onPreview={handlePreview}
            // onChange={handleChange}
          >
            {uploadButton}
          </Upload>
        </div>
        <div className="flex flex-col w-full gap-6">
          <Input value={name} onChange={e => setName(e.target.value)} />
          <Input.TextArea
            value={description}
            onChange={e => setDescription(e.target.value)}
            showCount
            maxLength={120}
            style={{ height: '60' }}
          />
        </div>
      </div>

      <Divider />

      <div className="flex flex-row gap-4">
        <Button
          onClick={() => setIsNftModalOpen(true)}
          shape="round"
          icon={<PlusOutlined rev={undefined} />}
        >
          NFT
        </Button>
        <Button
          onClick={() => setIsSocialsModalOpen(true)}
          shape="round"
          icon={<PlusOutlined rev={undefined} />}
        >
          Social
        </Button>
        <Button
          onClick={() => setIsAddlinkModalOpen(true)}
          shape="round"
          icon={<PlusOutlined rev={undefined} />}
        >
          Link
        </Button>
      </div>

      <Divider />

      <div className="absolute right-2 bottom-2">
        <div className="flex flex-row gap-4">
          <Button size="large" type="primary">
            Save
          </Button>
          <Button size="large" type="primary">
            Publish
          </Button>
        </div>
      </div>

      <Modal
        centered
        title="Settings"
        closeIcon={
          <CloseCircleOutlined
            style={{ color: `${token.colorPrimary}` }}
            rev={undefined}
          />
        }
        open={isSettingsModalOpen}
        onOk={() => handleOk('settings')}
        onCancel={() => handleCancel('settings')}
      >
        <SettingsModal />
      </Modal>

      <Modal
        centered
        title="Add NFT link"
        closeIcon={
          <CloseCircleOutlined
            style={{ color: `${token.colorPrimary}` }}
            rev={undefined}
          />
        }
        okText="Add"
        open={isNftModalOpen}
        onOk={() => handleOk('nft')}
        onCancel={() => handleCancel('nft')}
      >
        <NftModal />
      </Modal>

      <Modal
        centered
        title="Social"
        closeIcon={
          <CloseCircleOutlined
            style={{ color: `${token.colorPrimary}` }}
            rev={undefined}
          />
        }
        okText="Add"
        open={isSocialsModalOpen}
        onOk={() => handleOk('socials')}
        onCancel={() => handleCancel('socials')}
      >
        <SocialsModal />
      </Modal>

      <Modal
        centered
        title="Add link"
        closeIcon={
          <CloseCircleOutlined
            style={{ color: `${token.colorPrimary}` }}
            rev={undefined}
          />
        }
        okText="Add"
        open={isAddlinkModalOpen}
        onOk={() => handleOk('addlink')}
        onCancel={() => handleCancel('addlink')}
      >
        <Addlink />
      </Modal>
    </div>
  );
}

function SettingsModal() {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <Text strong>Show credit</Text>
          <Switch checked />
        </div>
        <Text>
          We appreciate you showing our logo credit in the footer because it
          helps us grow. Feel free to hide it.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <Text strong>Show Owl Link QR code </Text>
          <Switch />
        </div>
        <Text>Owl Link QR code will be shown on footer.</Text>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <Text strong>Google analytics</Text>
        <Input placeholder="G-XXXXXXXXXX" size="large" />
      </div>
    </div>
  );
}

function NftModal() {
  const [nftSearch, setNftSearch] = useState("My Bitcoin NFT's");

  return (
    <div className="flex">
      <Input value={nftSearch} onChange={e => setNftSearch(e.target.value)} />
    </div>
  );
}

function SocialsModal() {
  return (
    <div className="flex flex-col gap-4">
      {Constants.SOCIAL_ICONS.map(item => (
        <Input
          key={item.type}
          placeholder={item.placeholder}
          prefix={
            <img
              alt={item.type}
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                Constants.SOCIAl_ICONS_SVG[item.type]
              )}`}
            />
          }
        />
      ))}
    </div>
  );
}

function Addlink() {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Title"></Input>
      <Input placeholder="URL"></Input>
      <Checkbox>Embed</Checkbox>
    </div>
  );
}
