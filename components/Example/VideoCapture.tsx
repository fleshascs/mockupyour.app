import { useFrame, useThree } from '@react-three/fiber';
import { saveAs } from 'file-saver';
import { useEffect } from 'react';
// import { dataURItoBlob } from "../../../../Common/Functions";

export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) byteString = atob(dataURI.split(',')[1]);
  else byteString = unescape(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

const VideoCapture = ({ downloadEmitter }) => {
  const { invalidate, gl, camera, set } = useThree();

  useEffect(() => {
    downloadEmitter.onDownload = (format) => {
      if (format === 'png') {
        console.log('gl.domElement.offsetWidth', gl.domElement.offsetWidth);
        console.log('gl.domElement.offsetHeight', gl.domElement.offsetHeight);

        // Download image
        // let dimensions = store.getState().ThreeSlice.present.dimensions
        // let {scale, free} = store.getState().ThreeSlice.present.recording.info
        const dimensions = { width: gl.domElement.offsetWidth, height: gl.domElement.offsetHeight };
        const scale = 1;

        // gl.setSize(dimensions.width * scale, dimensions.height * scale, false)
        // let ratio = (dimensions.width / (parseFloat(gl.domElement.style.width)))
        const ratio = gl.getPixelRatio();
        const size = {
          width: (dimensions.width * scale) / ratio,
          height: (dimensions.height * scale) / ratio
        };
        gl.setSize(size.width, size.height, false);
        // // gl.setViewport(0, 0, size.width/2, size.height/2);
        // // gl.setPixelRatio(2 * scale * ratio)
        // // gl.domElement.width = dimensions.width * scale
        // // gl.domElement.height = dimensions.height * scale

        setTimeout(() => {
          const canvasData = gl.domElement.toDataURL();
          const blob = dataURItoBlob(canvasData);
          console.log('blob', blob);

          saveAs(blob, 'previewed.png');
          gl.setSize(gl.domElement.offsetWidth, gl.domElement.offsetHeight, false);
          // API.onUserDownload('3d', free)
          // gl.setPixelRatio(window.devicePixelRatio)
          // dispatch(
          //   setRecording({param: 'format', value: null})
          // );
        }, 500);
      }
    };
  }, []);

  return null;
};

export default VideoCapture;
