// Description for definitions in writing and blog sections
function initPopovers() {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    if (!el._popover) el._popover = new bootstrap.Popover(el);
  });
}

initPopovers();
new MutationObserver(initPopovers).observe(document.body, { childList: true, subtree: true });

// Particle system
/* --- 3D PARTICLE ENGINE --- */
function init3DBackground() {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Particles
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  for (let i = 0; i < 2000; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(15), THREE.MathUtils.randFloatSpread(15), THREE.MathUtils.randFloatSpread(15));
  }
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ 
    color: 0x146B8C, 
    size: 0.02,
    transparent: true,
    opacity: 0.8 
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0008; // Slower, more elegant rotation
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Only initialize the particles and popovers
init3DBackground();

function initPopovers() {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    if (!el._popover) el._popover = new bootstrap.Popover(el);
  });
}
initPopovers();