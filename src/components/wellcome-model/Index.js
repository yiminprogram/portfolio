import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
  DirectionalLightHelper,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WellCome from '../../assets/model/wellcome.gltf';

const Container = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: grab;
  }

  > canvas:focus {
    outline: none;
  }
`;

let scene, camera, renderer;
const anime = () => {
  requestAnimationFrame(anime);
  renderer.render(scene, camera);
};
const init = (target) => {
  const model = target.current;
  //create scene
  scene = new Scene();
  //filed of view 視角
  const fov = 60;
  //aspect 寬高比
  const aspect = model.clientWidth / model.clientHeight;
  //near 近面距離
  const near = 0.1;
  //far 遠面距離
  const far = 1000;
  //create camera
  camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-1, 5, 3.5);
  //create ambient light
  const ambient = new AmbientLight(0x333333, 5);
  scene.add(ambient);
  //create directional light
  const directionalLight = new DirectionalLight(0xefefef, 1);
  directionalLight.position.set(60, 60, 60);
  scene.add(directionalLight);
  //create renderer
  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(model.clientWidth, model.clientHeight);
  renderer.outputEncoding = sRGBEncoding;
  //add to DOM
  model.appendChild(renderer.domElement);
  //create orbit control
  const control = new OrbitControls(camera, renderer.domElement);
  control.maxDistance = 20;
  control.minDistance = 3;
  //load 3d model
  const loader = new GLTFLoader();
  loader.load(WellCome, (gltf) => {
    gltf.scene.position.y = 1;
    scene.add(gltf.scene);
    anime();
  });
  //RWD
  window.addEventListener('resize', () => {
    camera.aspect = model.clientWidth / model.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(model.clientWidth, model.clientHeight);
  });
};

const Index = () => {
  const target = useRef();
  useEffect(() => {
    init(target);
  }, []);
  return <Container ref={target}></Container>;
};

export default Index;
