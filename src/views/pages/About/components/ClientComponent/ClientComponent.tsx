import React from 'react';
import {
  Client,
  ClientIcon,
  ClientIconContainer,
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
          <ClientIconContainer>
            <ClientIcon
              className="-translate-x-[113px] -translate-y-[1px]"
              src={Icon.logoAbout1}
              alt="Logo Icon"
            />
          </ClientIconContainer>
          <ClientIconContainer>
            <ClientIcon
              className="-translate-x-[60px] -translate-y-[1.3px]"
              src={Icon.logoAbout2}
              alt="Logo Icon"
            />
          </ClientIconContainer>
          <ClientIconContainer>
            <ClientIcon
              className="-translate-x-[3px] -translate-y-[1px]"
              src={Icon.logoAbout3}
              alt="Logo Icon"
            />
          </ClientIconContainer>
          <ClientIconContainer>
            <ClientIcon
              className="-translate-y-[3px] translate-x-[55px]"
              src={Icon.logoAbout4}
              alt="Logo Icon"
            />
          </ClientIconContainer>
          <ClientIconContainer>
            <ClientIcon
              className="-translate-y-[1px] translate-x-[114px]"
              src={Icon.logoAbout5}
              alt="Logo Icon"
            />
          </ClientIconContainer>
        </ClientWrapperIcon>
      </ClientWrapper>
    </Client>
  );
};

export default ClientComponent;
