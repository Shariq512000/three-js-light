

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 5 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


// const geometry = new THREE.BoxGeometry(1 , 1, 1);
// const geometry = new THREE.PlaneGeometry(1 , 1, 1);
// const geometry = new THREE.CircleGeometry(1 , 1, 1);
// const geometry = new THREE.RingGeometry(1 , 1, 1);
// const geometry = new THREE.SphereGeometry(1 , 2, 3);
// const geometry = new Three.CylinderGeometry(1 , 1, 1);
// const geometry = new THREE.ConeGeometry(1 , 2, 3);
// const geometry = new THREE.TorusGeometry(1 , 2, 5);
const geometry = new THREE.TorusGeometry(1 , 2, 5);

const material = new THREE.MeshBasicMaterial({color: "red" , wireframe: true});
const cube = new THREE.Mesh( geometry , material );

// const cube = new THREE.Line( geometry , material ); if you use Line you don't need wireframe


scene.add(cube);


let flag = true;

animate();

function animate (){
    // if(cube.position.x > 6.5){
    //     flag = false;
    // }
    // else if(cube.position.x < -6.5){
    //     flag = true
    // }

    // if (flag){
    //     cube.position.x += 0.05;
    //     cube.position.y += 0.02;
    //     cube.rotation.x += 0.02;
    //     cube.rotation.y += 0.02;
    //     cube.rotation.z += 0.02;
    // }
    // else{
    //     cube.position.x -= 0.05;
    //     cube.position.y -= 0.02;
    //     cube.rotation.x -= 0.02;
    //     cube.rotation.y -= 0.02;
    //     cube.rotation.z -= 0.02;
    // }
    
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    renderer.render(scene , camera);

    requestAnimationFrame(animate)
}