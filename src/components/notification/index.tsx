import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { message } from 'antd';
import React from 'react';

interface MesgPayload {
  content: string;
  icon: JSX.Element;
  duration?: number;
}
const DisplayNotification = (
  type: string,
  messageCame: string,
  displayMessageDuration?: number
) => {
  // console.log("re", type);
  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <InfoCircleOutlined rev={undefined} />;

      case 'error':
        return <CloseCircleOutlined rev={undefined} />;

      default:
        return <CheckCircleOutlined rev={undefined} />;
    }
  };
  const messageObj: MesgPayload = {
    content: messageCame,
    icon: getIcon(type),
    duration: displayMessageDuration
  };

  switch (type) {
    case 'warning':
      message.warning(messageObj);
      break;

    case 'error':
      message.error(messageObj);
      break;
    default:
      message.success(messageObj);
      break;
  }
};

export default DisplayNotification;
