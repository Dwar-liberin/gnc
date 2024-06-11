
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "GNC",
              serverUrl: "https://3.110.158.27/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const image_26700103_c20a4388_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_26700103_c20a4388_texture = await loadTexture("assets/image 242 (1).png");
  const image_26700103_c20a4388_image = new THREE.MeshBasicMaterial({
      map: image_26700103_c20a4388_texture,
    });
    const image_26700103_c20a4388 = new THREE.Mesh(image_26700103_c20a4388_iconGeometry, image_26700103_c20a4388_image);
    image_26700103_c20a4388.scale.set(0.3, 0.3, 0.3);
    image_26700103_c20a4388.position.set(-0.4, -0.6, 0);
    image_26700103_c20a4388.rotation.set(-0.001, 0, 0);
    image_26700103_c20a4388.userData.clickable = true
    
    image_26700103_c20a4388.userData.eventName ="unknown"
const image_8cfedd60_78204253_iconGeometry = new THREE.PlaneGeometry(1, 0.68);
   const image_8cfedd60_78204253_texture = await loadTexture("assets/gnc logo (1).png");
  const image_8cfedd60_78204253_image = new THREE.MeshBasicMaterial({
      map: image_8cfedd60_78204253_texture,
    });
    const image_8cfedd60_78204253 = new THREE.Mesh(image_8cfedd60_78204253_iconGeometry, image_8cfedd60_78204253_image);
    image_8cfedd60_78204253.scale.set(0.4, 0.5, 0.4);
    image_8cfedd60_78204253.position.set(0, -0.6, 0);
    image_8cfedd60_78204253.rotation.set(-0.001, 0, 0);
    image_8cfedd60_78204253.userData.clickable = true
    
    image_8cfedd60_78204253.userData.eventName ="unknown"
const target_imageundefib3816_iconGeometry = new THREE.PlaneGeometry(1, 0.5625);
   const target_imageundefib3816_texture = await loadTexture("assets/gnc-marker.jpg");
  const target_imageundefib3816_image = new THREE.MeshBasicMaterial({
      map: target_imageundefib3816_texture,
    });
    const target_imageundefib3816 = new THREE.Mesh(target_imageundefib3816_iconGeometry, target_imageundefib3816_image);
    target_imageundefib3816.scale.set(1, 1, 1);
    target_imageundefib3816.position.set(0, 0, 0);
    target_imageundefib3816.rotation.set(-0.001, 0, 0);
    
    
    
const image_e8362060_44f9037c_iconGeometry = new THREE.PlaneGeometry(1, 1);
   const image_e8362060_44f9037c_texture = await loadTexture("assets/image 244.png");
  const image_e8362060_44f9037c_image = new THREE.MeshBasicMaterial({
      map: image_e8362060_44f9037c_texture,
    });
    const image_e8362060_44f9037c = new THREE.Mesh(image_e8362060_44f9037c_iconGeometry, image_e8362060_44f9037c_image);
    image_e8362060_44f9037c.scale.set(0.3, 0.3, 0.3);
    image_e8362060_44f9037c.position.set(0.4, -0.6, 0);
    image_e8362060_44f9037c.rotation.set(-0.001, 0, 0);
    image_e8362060_44f9037c.userData.clickable = true
    
    image_e8362060_44f9037c.userData.eventName ="unknown"

    const video_asset_28836a712d3_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_28836a712d3_Item0Video = await loadVideo("assets/gnc-promo-video.webm");

    const video_asset_28836a712d3_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_28836a712d3_Item0Video
    );

    let video_asset_28836a712d3_Item0VideoMaterial

      video_asset_28836a712d3_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_28836a712d3_Item0VideoTexture,
        })
    
     const video_asset_28836a712d3 = new THREE.Mesh(
      video_asset_28836a712d3_planeGeometry,
      video_asset_28836a712d3_Item0VideoMaterial
    );

  video_asset_28836a712d3.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_28836a712d3_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_28836a712d3_Item0Video.loop=true;
  
  video_asset_28836a712d3.scale.set(1.1, 1.1, 1.1);

    video_asset_28836a712d3.rotation.set(-0.002, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_28836a712d3_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_26700103_c20a4388) {
        setTimeout(()=>{
          window.location.href = "https://blinkit.com/prn/gnc-pro-performance-100-whey-protein-powder-chocolate-fudge/prid/525768"
        },100)
        }
      

      if (o.userData.clickable && o === image_8cfedd60_78204253) {
        setTimeout(()=>{
          window.location.href = "https://www.guardian.in/"
        },100)
        }
      

      if (o.userData.clickable && o === image_e8362060_44f9037c) {
        setTimeout(()=>{
          window.location.href = "https://www.amazon.in/GNC-Performance-Endurance-Formulated-Chocolate/dp/B0B9YHP7RW/ref=sr_1_1_sspa?crid=18DB9R4PXEYD8&dib=eyJ2IjoiMSJ9.85cJMhww8SvWkC2glVePR_eXRtQkOf8HZyOSVhkRui4jAgZMj6G50Ni7L2L6BfLbtVVw21_EQzKSkFipCLAVkK_WfpSGwEuluPwfTqWV5q8OJiHjNNssKAOKzvR6h3J20zi3vCOvYe7DzVFVPgzZjPumr_Nv64KNXIybeDiWgI3UaI37G7KFj3YNEmP63EH5OaliqBv4BFGmLWv-ZBFOim0ESpF6odeYmEqhNIETtKfPYRPbrZoq-SeFypPWBjQyO1KoTrMYPSq_upHUN1TlXys57ToyzCyow936ZYcD-a8.gOuYt9PRWkcPLEGEslzve0IT9ALwPsSMC_ba_kyE9Sg&dib_tag=se&keywords=gnc&qid=1717996634&sprefix=gnc%2Caps%2C296&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_26700103_c20a4388)
anchor.group.add(image_8cfedd60_78204253)

anchor.group.add(image_e8362060_44f9037c)
anchor.group.add(video_asset_28836a712d3)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      video_asset_28836a712d3_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_28836a712d3_Item0Video.pause();

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    