import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { message } from 'antd';
import React from 'react';
import { MessagePayload, iconType } from './notification.types';

const DisplayNotification = (
  type: iconType,
  messageCame: string,
  displayMessageDuration?: number
) => {
  const getIcon = (type: iconType) => {
    switch (type) {
      case 'warning':
        return <InfoCircleOutlined rev={undefined} />;

      case 'error':
        return <CloseCircleOutlined rev={undefined} />;

      default:
        return <CheckCircleOutlined rev={undefined} />;
    }
  };
  const messageObj: MessagePayload = {
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
