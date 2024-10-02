import React from 'react';
import {
  Client,
  ClientIcon,
  ClientWrapper,
  ClientWrapperIcon,
  ClientWrapperText,
  DescribeText,
  TipText,
  TitleText,
} from './Client.style';
import { Icon } from '../../../../../data/ComponentData/Images';

const ClientComponent: React.FC = () => {
  return (
    <Client>
      <ClientWrapper>
        <ClientWrapperText>
          <TipText>Our Clients</TipText>
          <TitleText>Well-known agencies</TitleText>
          <DescribeText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </DescribeText>
        </ClientWrapperText>
        <ClientWrapperIcon>
          <ClientIcon src={Icon.logoAbout1} alt="Logo Icon" />
          <ClientIcon src={Icon.logoAbout2} alt="Logo Icon" />
          <ClientIcon src={Icon.logoAbout3} alt="Logo Icon" />
          <ClientIcon src={Icon.logoAbout4} alt="Logo Icon" />
          <ClientIcon src={Icon.logoAbout5} alt="Logo Icon" />
        </ClientWrapperIcon>
      </ClientWrapper>
    </Client>
  );
};

export default ClientComponent;
