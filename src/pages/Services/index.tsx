import { Collapse, message } from 'antd';
import { useParams } from 'react-router-dom';
import { SERVICES } from './constants';
import Fields from '@/components/organisms/field';
import { createGrpcClient } from '@/libs/grpc/configs';
export default function ServicesPage() {
  const [messageApi, contextHolder] = message.useMessage();

  const { slug } = useParams();
  const service = slug ? SERVICES[slug] : undefined
  if (!service) return <div>
    not see
  </div>
  return (
    <div>
      {contextHolder}
      <Collapse items={Object.keys((service.methods)).map(((key, index) => {
          const method = service.methods[key]
          return {
            key: String(index),
            label: method.name,
            children: <div key={key} className=''>
            <Fields fieldInfos={Array.from(method.I.fields.list())} onSubmitFn={async (req) => {
              const client = createGrpcClient(service)
              if(!client) {
                messageApi.open({
                  type: 'success',
                  content: 'Please add setting domain',
                  duration: 5,
                })
                return ""
              }
              const data = await client[key](req)
              return data
            }} />
          </div>
          }
        }))} defaultActiveKey={['0']} />
    </div>
  )
}
