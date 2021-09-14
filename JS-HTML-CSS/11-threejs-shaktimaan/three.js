const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var texture = new THREE.TextureLoader().load("shaktimaan.png");
const geometry = new THREE.CylinderGeometry(3, 3, 30, 40);
const material = new THREE.MeshBasicMaterial({ map: texture });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

const loader = new THREE.TextureLoader();
loader.load("city1.jpg", function (texture) {
  scene.background = texture;
});

camera.position.z = 100;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cylinder.rotation.y += 0.03;
  setTimeout(() => {
    cylinder.rotation.y += 0.5;
  }, 2500);
}
animate();

const text = document.getElementById("text");

const moveShaktimaan = () => {
  xm = Math.floor(40 * Math.random()) * (Math.random() < 0.5 == true ? -1 : 1);
  ym = Math.floor(5 * Math.random()) * (Math.random() < 0.5 == true ? -1 : 1);
  zm = 0;
  setTimeout(() => {
    cylinder.translateY(ym);
    cylinder.translateX(xm);
    cylinder.translateZ(zm);
  }, 2000);

  // console.log(text.style.top);
};

setInterval(() => {
  text.style.visibility = "visible";
  text.style.top = `${Math.floor(window.innerHeight * Math.random()) - 40}px`;
  text.style.left = `${Math.floor(window.innerWidth * Math.random()) - 40}px`;
}, 1500);

setInterval(() => {
  moveShaktimaan();
}, 500);
