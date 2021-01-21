import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Portfolio from 'src/assets/model/portfolio.gltf';

const Container = styled.div`
  width: 100%;
  height: 100%;

  > canvas {
    width: 100% !important;
    height: 100% !important;
  }
  &:hover {
    cursor: grab;
  }

  > canvas:focus {
    outline: none;
  }
`;

let scene, camera, renderer, gltfModel;
const anime = () => {
  //render problem
  //console.log('render');
  if (window.location.href.split('').pop() === '/') {
    gltfModel.rotation.y += 0.005;
    requestAnimationFrame(anime);
  }
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
  camera.position.set(-10, 15, 15);
  //create ambient light
  const ambient = new AmbientLight(0x888888, 1);
  scene.add(ambient);
  const frontLight = new DirectionalLight(0xaaaaaa, 2);
  frontLight.position.set(0, 100, 100);
  scene.add(frontLight);
  //create renderer
  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(model.clientWidth, model.clientHeight);
  renderer.outputEncoding = sRGBEncoding;
  //add to DOM
  model.appendChild(renderer.domElement);
  //create orbit control
  const control = new OrbitControls(camera, renderer.domElement);
  control.enableZoom = false;
  //load 3d model
  const loader = new GLTFLoader();
  loader.load(Portfolio, (gltf) => {
    scene.add(gltf.scene);
    gltfModel = gltf.scene;
    anime(gltfModel);
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
