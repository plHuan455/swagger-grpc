import { Collapse } from 'antd';
import { useParams } from 'react-router-dom';
import { SERVICES } from './constants';
import Fields from '@/components/organisms/field';
import { createGrpcClient } from '@/libs/grpc/configs';
import { jsonParse } from '@/utils/common';

export default function ServicesPage() {
  const { slug } = useParams();
  const service = slug ? SERVICES[slug] : undefined
  if (!service) return <div>
    not see
  </div>
  return (
    <div>
      <Collapse items={Object.keys((service.methods)).map(((key, index) => {
          const method = service.methods[key]
          return {
            key: String(index),
            label: method.name,
            children: <div key={key} className=''>
            <Fields fieldInfos={Array.from(method.I.fields.list())} onSubmitFn={async (req) => {
              const client = createGrpcClient(service)
              if(client) {
                const data = await client[key](jsonParse(req))
                return data
              }
              return ""
            }} />
          </div>
          }
        }))} defaultActiveKey={['0']} />
    </div>
  )
}
