import CloudDoneIcon from '../assets/svg/cloud-done.svg';
import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import SyncLoader from 'react-spinners/SyncLoader';
import { toast } from 'react-toastify';

const baseStyle = {
  borderWidth: '1px',
  borderRadius: '10px',
  borderColor: '#838897',
  borderStyle: 'dashed',
  backgroundColor: 'white',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  paddingTop: '90px',
  position: 'relative',
  fontSize: '20px',
  cursor: 'pointer'
};

const styles = {
  text: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    color: '#613EEA',
    lineHeight: '20px'
  }
};

const activeStyle = {
  borderColor: '#838897'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default (props) => {
  const [loader, setLoader] = React.useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    let item = acceptedFiles[acceptedFiles.length - 1];
    if (item instanceof Blob) {
      setLoader(true);
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          // convert file to base64 string
          props.onUpload(reader.result);
          setLoader(false);
        },
        false
      );

      reader.readAsDataURL(item);
    } else {
      toast.error('Unsupported format.');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: props.accepted_files,
    onDrop
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <div
        style={{
          position: 'absolute',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          top: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        {loader ? (
          <SyncLoader
            size={15}
            //size={"150px"} this also works
            color={'#363636'}
            loading={true}
          />
        ) : props.uploaded ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CloudDoneIcon fill={'#52b152'} width={'3rem'} height={'3rem'} />
          </div>
        ) : (
          <p style={styles.text}>
            Click to upload {props.name} <br />
            <span style={{ fontSize: 12, color: '#838897' }}>or drag and drop a file here</span>
          </p>
        )}
      </div>
    </div>
  );
};
