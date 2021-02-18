import {ReactElement} from "react";
import {Upload} from "antd";
import {InboxOutlined} from '@ant-design/icons';

function Uploader(): ReactElement {
  return (
    <div>
      <Upload.Dragger
        name="image"
        multiple={false}
        action={process.env.REACT_APP_UPLOAD_ENDPOINT}
        onChange={info => {
          const {status} = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            console.log(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
          }
        }}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined/>
        </p>
        <p className="ant-upload-text">Click or drag image to this area to upload</p>
      </Upload.Dragger>
    </div>
  );
}

export default Uploader;
