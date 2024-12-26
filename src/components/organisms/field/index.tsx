

import { FieldInfo } from "@bufbuild/protobuf"
import { Button, Col, Divider, Flex, Row, Typography } from "antd"
import { useState } from "react"
import { CopyOutlined } from '@ant-design/icons';
import { copyClipboard } from "@/utils/common";
import { useMutation } from "react-query";
import { JsonViewer } from '@textea/json-viewer'
import { JsonEditor, githubLightTheme } from 'json-edit-react'

interface Props {
  fieldInfos: FieldInfo[]
  onSubmitFn: (data: object) => Promise<any>
}

export default function Fields({ fieldInfos, onSubmitFn }: Props) {

  const [inputData, setInputData] = useState<object>({})
  const {mutate, isLoading, data, error} = useMutation({
    mutationKey: ['test'],
    mutationFn: onSubmitFn
  })

  return <div>
    <Row gutter={[24, 24]}>
      <Col span={20} className="relative min-h-[200px]">
        <Flex className="absolute inset-0 flex-col">
          {/* <TextArea rows={4} className="grow text-foreground-400" value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}
          <JsonEditor
          className="h-full"
            data={inputData}
            theme={githubLightTheme}
            setData={(data) => {setInputData(data as any)}}
          />
          <Flex justify="end" className="mt-3">
            <Button color="primary" variant="solid" onClick={() => [
              mutate(onSubmitFn)
            ]}
              loading={isLoading}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Col>
      <Col span={4}>
        {fieldInfos.map((value, index) => {
          return <div key={index}>
            <Flex justify="star" align="center" gap={8} className="group/slot">
              <Button type="text" iconPosition="end" icon={<CopyOutlined className="text-foreground-400/80 group-hover/slot:opacity-100 opacity-0 duration-200" />} className="" size="small"
                onClick={() => {
                  copyClipboard(`"${value.name}":`)
                  if(!inputData[value.name]) {
                    setInputData(preState => ({
                      ...preState,
                      [value.name]: ""
                    }))
                  }
                }}
              >
                {value.name}
              </Button>
            </Flex>
          </div>
        })}
      </Col>
    </Row>

    {data && <div className="">
        <Divider>Response</Divider>
        <div>
          <JsonViewer rootName={false} value={data} />
        </div>
      </div>}

    {error && <div className="min-h-[200px] max-h-[500px] overflow-auto">
        <Divider className="text-red-500"><Typography.Text className='text-red-500 text-[1rem]'>Response error</Typography.Text></Divider>
        <div>
          <JsonViewer theme={'light'} rootName={false} value={data} />
        </div>
      </div>}
  </div>
}
