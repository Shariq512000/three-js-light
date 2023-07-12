

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1 , 1000);
camera.position.z = 30 ;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
document.body.appendChild(renderer.domElement);


// const ambient = new THREE.AmbientLight(0xffffff , 0.1);
// scene.add(ambient);


const pointLight = new THREE.PointLight( 0xFFFF00 , 1 , 30 );
pointLight.position.set( 10 , 5 , 3 );
scene.add(pointLight);


const pointLightBlue = new THREE.PointLight( 0x0000FF , 1 , -30 );
pointLightBlue.position.set( -10 , -5 , 3 );
scene.add(pointLightBlue);


const pointLightGreen = new THREE.PointLight( 0x00FF00 , 2 , 100 );
pointLightGreen.position.set( 1 , 10 , 3 );
scene.add(pointLightGreen);


const pointLightWhite = new THREE.PointLight( 0xffffff , 1 , 30 );
pointLightWhite.position.set( 1 , 10 , 3 );
scene.add(pointLightWhite);


const lightGeometry = new THREE.SphereGeometry(1, 15, 32);
const lightMaterial = new THREE.MeshBasicMaterial({color : 0xFFFF00});
const lightSphere = new THREE.Mesh(lightGeometry , lightMaterial);
lightSphere.position.set( 10 , 5 , 3 );
scene.add(lightSphere);


const lightGeometryBlue = new THREE.SphereGeometry(1, 15, 32);
const lightMaterialBlue = new THREE.MeshBasicMaterial({color : 0x0000FF});
const lightSphereBlue = new THREE.Mesh(lightGeometryBlue , lightMaterialBlue);
lightSphereBlue.position.set( -10 , -5 , 3 );
scene.add(lightSphereBlue);


const lightGeometryGreen = new THREE.SphereGeometry(1, 15, 32);
const lightMaterialGreen = new THREE.MeshBasicMaterial({color : 0x00FF00});
const lightSphereGreen = new THREE.Mesh(lightGeometryGreen , lightMaterialGreen);
lightSphereGreen.position.set( 1 , 10 , 3 );
scene.add(lightSphereGreen);


const lightGeometryWhite = new THREE.SphereGeometry(1, 15, 32);
const lightMaterialWhite = new THREE.MeshBasicMaterial({color : 0xffffff});
const lightSphereWhite = new THREE.Mesh(lightGeometryWhite , lightMaterialWhite);
lightSphereWhite.position.set( 1 , 10 , 3 );
scene.add(lightSphereWhite);


const geometry = new THREE.BoxGeometry(5 , 5, 5);
// const geometry = new THREE.PlaneGeometry(1 , 1, 1);
// const geometry = new THREE.CircleGeometry(1 , 1, 1);
// const geometry = new THREE.RingGeometry(1 , 1, 1);
// const geometry = new THREE.SphereGeometry(1 , 2, 3);
// const geometry = new Three.CylinderGeometry(1 , 1, 1);
// const geometry = new THREE.ConeGeometry(1 , 2, 3);
// const geometry = new THREE.TorusGeometry(1 , 2, 5);
// const geometry = new THREE.TorusGeometry(5 , 10, 25);

const material = new THREE.MeshStandardMaterial({color: "red" });
const cube = new THREE.Mesh( geometry , material );

// const cube = new THREE.Line( geometry , material ); if you use Line you don't need wireframe


scene.add(cube);


// let flag = true;

let q = 0

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

    q += 0.01;

    let qSin = Math.sin(q);
    let qCos = Math.cos(q);

    cube.position.x = 3*qSin;

    let scaledSin = 20 * qSin;
    let scaledCos = 20 * qCos;


    pointLight.position.set( scaledCos , 0 , scaledSin );
    pointLightBlue.position.set( -scaledCos , 0 , -scaledSin );
    pointLightGreen.position.set( 0 , -scaledCos , -scaledSin );
    lightSphere.position.set( scaledCos , 0 , scaledSin );
    lightSphereBlue.position.set( -scaledCos , 0 , -scaledSin );
    lightSphereGreen.position.set( 0 , -scaledCos , -scaledSin + 1 );

    
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    renderer.render(scene , camera);

    requestAnimationFrame(animate)
}