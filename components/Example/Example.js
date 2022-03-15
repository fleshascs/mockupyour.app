import styles from './example.module.scss';
import Image from '../Image';
import React, { useMemo, useState, useRef } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CirclePicker } from 'react-color';
import DropZone from '../dropzone';
import VideoCapture from './VideoCapture';

extend({ OrbitControls });

const Orbit = () => {
  const ref = React.useRef();
  const { camera, gl } = useThree();

  useFrame(() => ref.current && ref.current.update());

  return <orbitControls ref={ref} args={[camera, gl.domElement]} enableZoom={false} />;
};

const Phone = ({ currentDevice }) => {
  const [myMaterials, setMyMaterials] = React.useState({});
  const [video, setVideo] = React.useState(null);

  let { gl } = useThree();

  // useFrame(() => {
  //     if(group.current){
  //         group.current.rotation.y += 0.01
  //     }
  // })

  const group = React.useRef();

  //Furniture-AR project
  //https://github.com/rashi151999/Furniture-AR/tree/main/textures

  //free light resources https://polyhaven.com/a/photo_studio_01
  // const envMap = useLoader(RGBELoader, '/3DModels/EnvMaps/photo_studio_01_4k.hdr')
  const envMap = useLoader(
    RGBELoader,
    process.env.basePath + '/3DModels/EnvMaps/2photo_studio_01_1k.hdr'
  );
  const result = useLoader(
    GLTFLoader,
    process.env.basePath + '/3DModels/Phones/iphone_12/scene.gltf'
  );
  const { nodes, materials } = result;

  const center = React.useMemo(() => {
    const box = new THREE.Box3().setFromObject(nodes.OSG_Scene);
    return box.getCenter(new THREE.Vector3());
  }, [nodes.OSG_Scene]);

  React.useEffect(() => {
    const pmremGenerator = new THREE.PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    let envTexture = pmremGenerator.fromEquirectangular(envMap);

    let newMaterials = {};
    var blackColor = new THREE.Color('rgb(0, 0, 0)').convertSRGBToLinear();
    Object.keys(materials).forEach((item) => {
      newMaterials[item] = materials[item].clone();
      newMaterials[item].envMap = envTexture.texture;
      newMaterials[item].envMapIntensity = 1;
    });

    newMaterials.frame_metal.color = blackColor;
    newMaterials.frame_metal.metalness = 1;
    newMaterials.frame_metal.roughness = 0.3;

    newMaterials.REAR_CAM_MAIN.color = blackColor;

    newMaterials.display_wallpaper.color = blackColor;
    newMaterials.display_wallpaper.envMapIntensity = 0.1;
    newMaterials.display_wallpaper.roughness = 0.2;

    newMaterials.IPHONE_DISPLAY_FRAME.color = blackColor;
    newMaterials.IPHONE_DISPLAY_FRAME.metalness = 1;
    newMaterials.IPHONE_DISPLAY_FRAME.roughness = 0.2;

    //   newMaterials.IPHONE_BACK.color = blackColor
    newMaterials.IPHONE_BACK.metalness = 1;
    newMaterials.IPHONE_BACK.roughness = 0.3;

    setMyMaterials(newMaterials);
  }, [materials]);

  React.useEffect(() => {
    // group.current.rotateX(1.5)
    if (currentDevice.screenshot && Object.keys(myMaterials).length !== 0) {
      if (currentDevice.screenshot.includes('data:image')) {
        var newTexture = new THREE.TextureLoader().load(currentDevice.screenshot);
        setVideo(null);
      } else if (currentDevice.screenshot.includes('data:video')) {
        var video = document.createElement('VIDEO');
        video.setAttribute('src', currentDevice.screenshot);
        video.setAttribute('autoplay', 'true');
        var newTexture = new THREE.VideoTexture(video);
        setVideo(video);
      }
      newTexture.encoding = THREE.sRGBEncoding;
      newTexture.generateMipmaps = false;
      newTexture.minFilter = THREE.LinearFilter;

      myMaterials.display_wallpaper.map = newTexture;
      myMaterials.display_wallpaper.emissiveMap = newTexture;
    }
  }, [currentDevice.screenshot, myMaterials]);

  React.useEffect(() => {
    if (currentDevice.color) {
      Object.keys(myMaterials).forEach((item) => {
        if (item === 'frame_metal' || item === 'IPHONE_BACK' || item === 'REAR_CAM_MAIN') {
          myMaterials[item].emissive.setStyle(currentDevice.color).convertSRGBToLinear();
        }
      });
    }
  }, [currentDevice.color, myMaterials]);

  return (
    <group ref={group} scale={[4, 4, 4]} position={[0, 0, 0]}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.007, -0.005]}>
            <mesh material={myMaterials.IPHONE_DISPLAY_FRAME} geometry={nodes.mesh_0.geometry} />
            <mesh material={myMaterials.TRANSPARENT_GLASS} geometry={nodes.mesh_1.geometry} />
            <mesh material={myMaterials.frame_metal} geometry={nodes.mesh_2.geometry} />
            <mesh material={myMaterials.FRAME_MATTE} geometry={nodes.mesh_3.geometry} />
            <mesh material={myMaterials.BLACK_MATTE} geometry={nodes.mesh_4.geometry} />
            <mesh material={myMaterials.CHROME} geometry={nodes.mesh_5.geometry} />
            <mesh material={myMaterials.display_wallpaper} geometry={nodes.mesh_6.geometry} />
            <mesh material={myMaterials.IPHONE_BACK} geometry={nodes.mesh_7.geometry} />
            <mesh material={myMaterials.REAR_CAM_MAIN} geometry={nodes.mesh_8.geometry} />
            <mesh material={myMaterials.IPHONE_LOGO} geometry={nodes.mesh_9.geometry} />
            <mesh material={myMaterials.REAR_CAM_03} geometry={nodes.mesh_10.geometry} />
            <mesh material={myMaterials.BLACK_GLOSSY} geometry={nodes.mesh_11.geometry} />
            <mesh material={myMaterials.FRONT_CAM_TEXTURE} geometry={nodes.mesh_12.geometry} />
            <mesh material={myMaterials.FRONT_SPEAKER} geometry={nodes.mesh_13.geometry} />
            <mesh material={myMaterials.frame_metal_matte} geometry={nodes.mesh_14.geometry} />
            <mesh material={myMaterials.camera_white_glass} geometry={nodes.mesh_15.geometry} />
            <mesh material={myMaterials.camera_black_glass} geometry={nodes.mesh_16.geometry} />
            <mesh material={myMaterials.camera_lens_texture} geometry={nodes.mesh_17.geometry} />
            <mesh material={myMaterials.camera_lens_outside} geometry={nodes.mesh_18.geometry} />
          </group>
        </group>
      </group>
    </group>
  );
};

const PhoneExample = () => {
  const [color, setColor] = React.useState('#000000');
  const [screenshot, setScreenshot] = React.useState(null);
  const downloadEmitter = useRef({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onDownload: () => {}
  });
  return (
    <div className={styles.container}>
      <div className={styles.canvas}>
        <Canvas
          concurrent={true}
          dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
          gl={{
            preserveDrawingBuffer: true,
            alpha: true,
            antialias: true
          }}
          // onPointerMissed={() => dispatch(setCurrentItem({class: 'camera'}))}

          onCreated={({ gl }) => {
            gl.toneMapping = THREE.NoToneMapping;
            // gl.physicallyCorrectLights = true;
            // gl.outputEncoding = THREE.sRGBEncoding;
          }}
          colorManagement={true}
          camera={{ position: [0, 0, 1], fov: 40 }}
        >
          <Suspense fallback={null}>
            <Phone currentDevice={{ color, screenshot }} />
          </Suspense>
          <Orbit />
          <VideoCapture downloadEmitter={downloadEmitter.current} />
        </Canvas>
      </div>
      <div className={styles.settings}>
        <div className={styles.colors}>
          <CirclePicker
            color={color}
            circleSize={48}
            circleSpacing={16}
            width={320}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
        <div className={styles.dropzone}>
          <DropZone name={'screen media'} onUpload={(file) => setScreenshot(file)} />
          <button
            className='border-solid border-2 border-indigo-600 rounded-md py-9'
            onClick={() => downloadEmitter.current.onDownload('png')}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneExample;
