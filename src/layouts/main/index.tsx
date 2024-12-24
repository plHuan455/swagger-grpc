import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Flex, Layout, Menu, theme, Typography } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { SERVICES } from '@/pages/Services/constants';

const { Header, Content, Sider } = Layout;

const LayoutMain: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const menus: MenuProps['items'] = [
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick(){
        navigate('/settings')
      }
    },
    {
      key: '1',
      icon: React.createElement(UserOutlined),
      label: `Services`,
      children: Object.keys(SERVICES).map((key) => {
        return {
            key: `/services/${key}`,
            label: key,
            onClick: () => {
              navigate(`/services/${key}`)
            }
          }
      })
    }
  ]

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }} className='fixed inset-x-0 z-header flex items-center'>
        <Typography.Text className='text-white text-[20px] font-bold'>
          SWAGGER
        </Typography.Text>
      </Header>
      <Content style={{ padding: '0 48px', paddingTop: 100 }} className='h-screen'>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200} collapsed={collapsed} className='pb-5'>
            <Menu
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
              style={{ height: '100%' }}
              items={menus}
            />
            <Flex className='justify-center'>
              <Button variant='text' onClick={() => {setCollapsed(preState => !preState)}} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
            </Flex>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: '70vh' }} className='max-h-[75vh] overflow-auto'><Outlet /></Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default LayoutMain;