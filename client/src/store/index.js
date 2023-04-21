import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#9bb9db',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  ai: './ai_1.png',
});

export default state;