import { LOCALSTORAGE } from '@/constants/storages';
import { Button, Flex, Input, message, Typography } from 'antd';
import React, { useState } from 'react';



const PageSetting: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [grpcServer, setGrpcServer] = useState<string>(localStorage.getItem(LOCALSTORAGE.GRPC_URL) ?? "")
  const [tenantId, setTenantId] = useState<string>(localStorage.getItem(LOCALSTORAGE.TENANT_ID) ?? "")
  const [token, setToken] = useState<string>(localStorage.getItem(LOCALSTORAGE.TOKEN) ?? "")


  const handleChange = () => {
    localStorage.setItem(LOCALSTORAGE.GRPC_URL, grpcServer)
    localStorage.setItem(LOCALSTORAGE.TENANT_ID, tenantId)

    messageApi.open({
      type: 'success',
      content: 'Configs have been updated',
      duration: 5,
    });
  }
  return (
    <Flex className='flex-col h-full'>
      {contextHolder}
      <div className='grow'>
        <div>
          <Typography.Title level={5}>
            GRPC Server
          </Typography.Title>
          <Input size='large' value={grpcServer} onChange={(e) => {setGrpcServer(e.target.value)}}/>
        </div>
        <div className='mt-2'>
          <Typography.Title level={5}>
            Tenant id
          </Typography.Title>
          <Input size='large' value={tenantId} onChange={(e) => {setTenantId(e.target.value)}}/>
        </div>
        <div className='mt-2'>
          <Typography.Title level={5}>
            Token
          </Typography.Title>
          <Input size='large' value={token} onChange={(e) => {setToken(e.target.value)}}/>
        </div>
      </div>
      <Flex className='mt-4' justify='end'>
        <Button size='large' variant='solid' color='primary' onClick={() => {
          handleChange()
        }}>
          Change
        </Button>
      </Flex>
    </Flex>
  );
};

export default PageSetting