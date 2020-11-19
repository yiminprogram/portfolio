import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  AmbientLight,
  DirectionalLight,
  Mesh,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
  sRGBEncoding,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Portfolio from '../../assets/model/portfolio.gltf';

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
  camera.position.set(-5, 23, 5);
  //create ambient light
  const ambient = new AmbientLight(0x111111, 6);
  scene.add(ambient);
  //create directional light
  const directionalLight = new DirectionalLight(0xffffff, 1.5);
  directionalLight.position.set(200, 200, 200);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;
  scene.add(directionalLight);
  //create renderer
  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(model.clientWidth, model.clientHeight);
  renderer.outputEncoding = sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  //add to DOM
  model.appendChild(renderer.domElement);
  //create orbit control
  const control = new OrbitControls(camera, renderer.domElement);
  control.maxDistance = 20;
  control.minDistance = 3;
  //load 3d model
  const loader = new GLTFLoader();
  loader.load(Portfolio, (gltf) => {
    gltf.scene.children[0].receiveShadow = true;
    for (let i = 1; i < gltf.scene.children.length; i++) {
      if (gltf.scene.children[i] instanceof Mesh) {
        gltf.scene.children[i].castShadow = true;
      }
    }
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
