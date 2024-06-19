/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/scene.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/scene.glb");
  console.log(nodes.lampu.geometry);
  return (
    <group {...props} dispose={null}>
      <group
        position={[-2.755, 3, -0.2]}
        rotation={[-Math.PI, 1.152, -Math.PI]}
        scale={[10.658, 13.078, 8.976]}
      >
        <mesh
          geometry={nodes.MouseThermaltakeBlack.geometry}
          material={materials["Material.003"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.025, 0.019, 0.019]}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack001.geometry}
          material={materials["Material.008"]}
          position={[-0.011, 0.015, 0.009]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack002.geometry}
          material={materials["Material.004"]}
          position={[-0.015, 0.011, -0.006]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            geometry={nodes.MouseThermaltakeBlack003_1.geometry}
            material={materials["main body"]}
          />
          <mesh
            geometry={nodes.MouseThermaltakeBlack003_2.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            geometry={nodes.MouseThermaltakeBlack003_3.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            geometry={nodes.MouseThermaltakeBlack003_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <mesh
          geometry={nodes.MouseThermaltakeBlack004.geometry}
          material={materials["Material.003"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack005.geometry}
          material={materials["Material.016"]}
          position={[0.001, 0, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack007.geometry}
          material={materials["Material.003"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack008.geometry}
          material={materials["main body.001"]}
          position={[0.002, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack009.geometry}
          material={materials["main body"]}
          position={[0.001, 0.007, 0.002]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack010.geometry}
          material={materials["Material.009"]}
          position={[-0.013, 0.014, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack011.geometry}
          material={materials["main body"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack012.geometry}
          material={materials["Material.002"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack013.geometry}
          material={materials["Material.002"]}
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          geometry={nodes.MouseThermaltakeBlack014.geometry}
          material={materials["Material.001"]}
          position={[0, 0.011, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <group
          position={[-0.004, 0.008, -0.008]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <mesh
            geometry={nodes.MouseThermaltakeBlack015_1.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            geometry={nodes.MouseThermaltakeBlack015_2.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            geometry={nodes.MouseThermaltakeBlack015_3.geometry}
            material={materials["Material.012"]}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.tempat_minum.geometry}
        material={materials["tempat minum"]}
        position={[-3.12, 3.126, -2.168]}
        scale={[0.98, 0.144, 0.329]}
      />
      <mesh
        geometry={nodes.tatakan_laptop.geometry}
        material={materials["tatakan laptop"]}
        position={[-4.063, 3.366, 2.162]}
        scale={[0.031, 0.345, 0.031]}
      />
      <mesh
        geometry={nodes.saklar.geometry}
        material={materials["Wood.119"]}
        position={[1.943, 4.753, 4.108]}
        scale={[0.326, 0.198, 0.049]}
      />
      <mesh
        geometry={nodes.kamera.geometry}
        material={materials.Material}
        position={[-3.254, 5.019, -0.84]}
        rotation={[0, -0.519, 0]}
        scale={[0.017, 0.073, 0.158]}
      />
      <mesh
        geometry={nodes.tatakan_kamera.geometry}
        material={nodes.tatakan_kamera.material}
        position={[-3.336, 4.975, -0.907]}
        rotation={[0, -0.519, 0]}
        scale={[0.014, 0.073, 0.148]}
      />
      <mesh
        geometry={nodes.poster.geometry}
        material={materials.poster}
        position={[3.053, 6.645, 4.106]}
        scale={[1, 1.49, 0.055]}
      />
      <mesh
        geometry={nodes.blanket.geometry}
        material={materials["Colorful Flower Fabric"]}
        position={[2.935, 2.273, 0.169]}
        scale={[1.868, 1.207, 3.349]}
      />
      <mesh
        geometry={nodes.layar_monitor_2.geometry}
        material={materials["layar monitor 2"]}
        position={[-3.347, 4.326, -0.771]}
        rotation={[0, -0.502, 0]}
        scale={[0.024, 0.63, 1.041]}
      />
      <mesh
        geometry={nodes.layar_monitor_1.geometry}
        material={materials["layar monitor 1"]}
        position={[-3.151, 4.326, 3.149]}
        rotation={[0, 0.698, 0]}
        scale={[0.024, 0.63, 1.041]}
      />
      <mesh
        geometry={nodes.poto_21.geometry}
        material={materials["poto 2.1"]}
        position={[-2.468, 6.62, 4.068]}
        scale={[0.708, 1.423, 0.04]}
      />
      <mesh
        geometry={nodes.poto_11.geometry}
        material={materials["poto 1.1"]}
        position={[-0.416, 7.324, 3.969]}
        scale={[1.135, 0.711, 0.04]}
      />
      <mesh
        geometry={nodes.poto_31.geometry}
        material={materials["poto 3.1"]}
        position={[-1.02, 5.828, 3.98]}
        scale={[0.549, 0.636, 0.02]}
      />
      <mesh
        geometry={nodes.poto_41.geometry}
        material={materials["poto 4.1"]}
        position={[0.212, 5.828, 3.948]}
        scale={[0.536, 0.628, 0.02]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Wood.121"]}
        position={[-1.982, 3.771, -3.405]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[3.185, 1, 0.775]}
      />
      <mesh
        geometry={nodes.trashcan.geometry}
        material={materials["Dust Shader"]}
        position={[-3.043, 0.938, -0.83]}
        scale={[0.853, 0.853, 0.355]}
      />
      <mesh
        geometry={nodes.lantai.geometry}
        material={materials["Wooden floor.001"]}
        scale={[4.364, 0.114, 4.364]}
      />
      <mesh
        geometry={nodes.tembok_kanan.geometry}
        material={materials["Decorated Wall 01"]}
        position={[-4.243, 4.253, -0.01]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[4.364, 0.114, 4.364]}
      />
      <mesh
        geometry={nodes["1"].geometry}
        material={materials["Wood.120"]}
        position={[-0.419, 7.329, 4.18]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.209, 0.105, 0.791]}
      />
      <mesh
        geometry={nodes.kayu_kasur.geometry}
        material={materials["Wood.120"]}
        position={[2.919, 0.367, 0.457]}
        scale={[1.427, 0.278, 3.761]}
      />
      <mesh
        geometry={nodes.meja.geometry}
        material={materials["Wood.120"]}
        position={[-2.939, 2.872, 0.832]}
        scale={[1.212, 0.112, 3.309]}
      />
      <mesh
        geometry={nodes.lemari_bawah_meja.geometry}
        material={materials["Wood.120"]}
        position={[-3.12, 1.438, -1.82]}
        scale={[1.023, 1.339, 0.653]}
      />
      <mesh
        geometry={nodes.stop_kontak.geometry}
        material={materials["Perforated rubber"]}
        position={[-4.001, 2.612, -0.516]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.142, -0.149, -0.653]}
      />
      <mesh
        geometry={nodes.pintu_lemari.geometry}
        material={materials["Wood.120"]}
        position={[-2.083, 3.595, -3.386]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.07, -3.497, -0.909]}
      />
      <mesh
        geometry={nodes.board.geometry}
        material={materials["Wood.121"]}
        position={[-3.094, 5.083, -2.416]}
        rotation={[0, 0, -Math.PI]}
        scale={[-0.825, -1.062, -0.058]}
      />
      <mesh
        geometry={nodes.layar_laptop.geometry}
        material={materials["layaar laptop"]}
        position={[-4.06, 4.336, 1.256]}
        scale={[0.022, 0.568, 0.995]}
      />
      <mesh
        geometry={nodes.badan_laptop.geometry}
        material={materials["Badan Laptop"]}
        position={[-3.59, 3.428, 1.254]}
        rotation={[0, 0, 0.935]}
        scale={[0.028, 0.612, 0.994]}
      />
      <mesh
        geometry={nodes.layar_monitor_laptop.geometry}
        material={materials["layar monitor laptop"]}
        position={[-4.048, 4.369, 1.252]}
        scale={[0.022, 0.486, 0.963]}
      />
      <mesh
        geometry={nodes.luaran_key_Laptop.geometry}
        material={materials["Luaran keyboard L"]}
        position={[-3.719, 3.552, 1.263]}
        rotation={[0, 0, 0.935]}
        scale={[0.013, 0.354, 0.89]}
      />
      <mesh
        geometry={nodes.trackpad_laptop.geometry}
        material={materials["trackpad laptop"]}
        position={[-3.265, 3.222, 1.255]}
        rotation={[0, 0, 0.935]}
        scale={[0.01, 0.199, 0.397]}
      />
      <mesh
        geometry={nodes.Badan_Keyboard.geometry}
        material={materials["Badan Keyboard"]}
        position={[-2.877, 2.952, 2.097]}
        rotation={[1.571, 0.004, -1.571]}
        scale={[-0.089, -0.027, -0.004]}
      />
      <mesh
        geometry={nodes.Keycaps_Keyboard.geometry}
        material={materials["Automotive led lights"]}
        position={[-2.486, 3.085, 1.616]}
        rotation={[1.571, -0.021, Math.PI / 2]}
        scale={[0.059, 0.06, 0.039]}
      />
      <mesh
        geometry={nodes.Keycaps_Keyboard_L.geometry}
        material={materials["Keycaps Keyboard L"]}
        position={[-3.684, 3.499, 1.571]}
        rotation={[1.571, -0.636, 1.571]}
        scale={[0.05, 0.051, 0.036]}
      />
      <mesh
        geometry={nodes.mousepad.geometry}
        material={materials.mousepad}
        position={[-2.939, 2.961, 1.233]}
        scale={[1.064, 0.034, 2.8]}
      />
      <mesh
        geometry={nodes.button_trackpad_1.geometry}
        material={materials["button trackpad 1"]}
        position={[-3.141, 3.116, 1.454]}
        rotation={[-Math.PI, 0, 2.206]}
        scale={[-0.005, -0.051, -0.201]}
      />
      <mesh
        geometry={nodes.button_trackpad_2.geometry}
        material={materials["button trackpad 2"]}
        position={[-3.141, 3.116, 1.058]}
        rotation={[-Math.PI, 0, 2.206]}
        scale={[-0.005, -0.051, -0.201]}
      />
      <mesh
        geometry={nodes.pintu_lemari_bawah.geometry}
        material={materials["Wood.120"]}
        position={[-2.07, 1.429, -1.811]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.045, -1.33, -0.64]}
      />
      <mesh
        geometry={nodes.lemari_atas_kasur.geometry}
        material={materials["Wood.120"]}
        position={[2.915, 3.621, 4.205]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.399, 0.154, 0.791]}
      />
      <mesh
        geometry={nodes.poto_2.geometry}
        material={materials["Wood.120"]}
        position={[-2.471, 6.624, 4.182]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1.517, 0.105, 0.791]}
      />
      <mesh
        geometry={nodes.poto_3.geometry}
        material={materials["Wood.120"]}
        position={[-1.011, 5.82, 4.18]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.6, 0.105, 0.716]}
      />
      <mesh
        geometry={nodes.poto_4.geometry}
        material={materials["Wood.120"]}
        position={[0.201, 5.82, 4.18]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.6, 0.105, 0.716]}
      />
      <mesh
        geometry={nodes.kasur.geometry}
        material={materials["Colorful flower fabric"]}
        position={[2.942, 0.86, 0.329]}
        scale={[1.313, 0.222, 3.524]}
      />
      <mesh
        geometry={nodes.monitor_2.geometry}
        material={materials["monitor 2"]}
        position={[-3.636, 3.388, -0.936]}
        rotation={[0, -0.202, 0]}
        scale={[0.058, 0.323, 0.058]}
      />

      <mesh
        geometry={nodes.minum_aer.geometry}
        material={materials["Coffee Procedural"]}
        position={[-2.637, 3.378, -2.155]}
        scale={[0.268, 0.386, 0.227]}
      />
      <mesh
        geometry={nodes.tutup_minum.geometry}
        material={materials["tutup minum"]}
        position={[-2.647, 3.761, -2.148]}
        scale={[0.324, 0.042, 0.324]}
      />
      <mesh
        geometry={nodes.lampu_terang001.geometry}
        material={materials["Rough Iron Steel"]}
        position={[-4.007, 2.618, 2.103]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.054, 1.976, 0.054]}
      />
      <mesh
        geometry={nodes.saklar_kiri.geometry}
        material={materials["Wood.121"]}
        position={[2.066, 4.76, 4.046]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.075, -0.123, -0.02]}
      />
      <mesh
        geometry={nodes.saklar_kanan.geometry}
        material={materials["Wood.121"]}
        position={[1.859, 4.76, 4.046]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.075, -0.123, -0.02]}
      />
      <mesh
        geometry={nodes.monitor_2001.geometry}
        material={materials["monitor 2"]}
        position={[-3.409, 3.388, 3.358]}
        rotation={[0, 0.997, 0]}
        scale={[0.058, 0.323, 0.058]}
      />
      <group
        position={[-0.669, 0.306, 1.228]}
        rotation={[0, 1.563, 0]}
        scale={[3.529, 3.361, 2.926]}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["chrome metal"]}
        />
        <mesh
          geometry={nodes.Plane002_1.geometry}
          material={materials["plastic black rough"]}
        />
        <mesh
          geometry={nodes.Plane002_2.geometry}
          material={materials.fabric}
        />
        <mesh
          geometry={nodes.Plane002_3.geometry}
          material={materials["metal painted"]}
        />
        <mesh
          geometry={nodes.Plane002_4.geometry}
          material={materials["plastic smooth"]}
        />
      </group>
      <group position={[-0.01, -0.916, 0.717]} scale={[-0.002, -0.01, -0.01]}>
        <mesh
          geometry={nodes.Würfel001.geometry}
          material={materials["Black Plastic"]}
        />
        <mesh
          geometry={nodes.Würfel001_1.geometry}
          material={materials["Metal light"]}
        />
      </group>
      <mesh
        geometry={nodes.Plate4.geometry}
        material={materials["Wood Variant 4"]}
        position={[-0.061, 0.048, 0.391]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts003.geometry}
          material={materials["Metal Bolts"]}
          position={[0.6, -0.143, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back003.geometry}
          material={materials["Metal Bolts"]}
          position={[0.588, -0.208, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate3.geometry}
        material={materials["Wood Variant 3"]}
        position={[-0.061, 0.048, 0.494]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts002.geometry}
          material={materials["Metal Bolts"]}
          position={[0.6, -0.143, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back002.geometry}
          material={materials["Metal Bolts"]}
          position={[0.588, -0.208, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate28.geometry}
        material={materials["Wood Variant 3"]}
        position={[0.042, 0.048, 0.7]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts027.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.6, 0.143, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back027.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.588, 0.208, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate27.geometry}
        material={materials["Wood Variant 6"]}
        position={[0.042, 0.048, 0.597]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts026.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.6, 0.143, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back026.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.588, 0.208, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate26.geometry}
        material={materials["Wood Variant 2"]}
        position={[0.042, 0.048, 0.494]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts025.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.6, 0.143, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back025.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.588, 0.208, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate25.geometry}
        material={materials["Wood Variant 5"]}
        position={[0.042, 0.048, 0.391]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts024.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.6, 0.143, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back024.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.588, 0.208, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate2.geometry}
        material={materials["Wood Variant 2"]}
        position={[-0.061, 0.048, 0.597]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts001.geometry}
          material={materials["Metal Bolts"]}
          position={[0.6, -0.143, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back001.geometry}
          material={materials["Metal Bolts"]}
          position={[0.588, -0.208, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate17.geometry}
        material={materials["Wood Variant 1"]}
        position={[0.042, 0.048, -0.639]}
        rotation={[-Math.PI, 0, 0]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts016.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.6, 0.143, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back016.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.588, 0.208, 0]}
          rotation={[-0.293, 0, 1.571]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate14.geometry}
        material={materials["Wood Variant 3"]}
        position={[-0.061, 0.048, -0.639]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts013.geometry}
          material={materials["Metal Bolts"]}
          position={[0.6, -0.143, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back013.geometry}
          material={materials["Metal Bolts"]}
          position={[0.588, -0.208, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plate1.geometry}
        material={materials["Wood Variant 1"]}
        position={[-0.061, 0.048, 0.7]}
        scale={[0.005, 0.05, 0.05]}
      >
        <mesh
          geometry={nodes.Bolts028.geometry}
          material={materials["Metal Bolts"]}
          position={[0.6, -0.143, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
        <mesh
          geometry={nodes.Con_Back028.geometry}
          material={materials["Metal Bolts"]}
          position={[0.588, -0.208, 0]}
          rotation={[-0.293, 0, Math.PI / 2]}
          scale={[0.014, 0.144, 0.014]}
        />
      </mesh>
      <mesh
        geometry={nodes.Klicker_left.geometry}
        material={materials["LED Blend"]}
        position={[-0.009, 0.04, 0.443]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.004}
      >
        <mesh
          geometry={nodes.Bolt_Klicker.geometry}
          material={materials["Metal Bolts"]}
          position={[-0.655, 0, -0.001]}
          rotation={[Math.PI, -0.293, Math.PI]}
          scale={0.067}
        />
      </mesh>
      <mesh
        geometry={nodes.Holding_Wall_ur.geometry}
        material={materials["Wood Variant 1"]}
        position={[-0.058, 0.035, -0.614]}
        scale={[0.005, 0.01, 0.005]}
      >
        <mesh
          geometry={nodes.Bolt002.geometry}
          material={materials["Metal Bolts"]}
          position={[-1.212, -0.887, 0]}
          rotation={[-2.802, -0.197, -1.606]}
          scale={[0.04, 0.072, 0.07]}
        />
      </mesh>
      <mesh
        geometry={nodes.Holding_Wall_ul.geometry}
        material={materials["Wood Variant 1"]}
        position={[-0.058, 0.035, 0.665]}
        scale={[0.005, 0.01, 0.005]}
      >
        <mesh
          geometry={nodes.Bolt003.geometry}
          material={materials["Metal Bolts"]}
          position={[-1.212, -0.887, 0]}
          rotation={[-2.802, -0.197, -1.606]}
          scale={[0.04, 0.072, 0.07]}
        />
      </mesh>
      <mesh
        geometry={nodes.Holding_Wall_dr.geometry}
        material={materials["Wood Variant 1"]}
        position={[0.039, 0.035, -0.614]}
        scale={[0.005, 0.01, 0.005]}
      >
        <mesh
          geometry={nodes.Bolt001.geometry}
          material={materials["Metal Bolts"]}
          position={[-1.212, -0.887, 0]}
          rotation={[-2.802, -0.197, -1.606]}
          scale={[0.04, 0.072, 0.07]}
        />
      </mesh>
      <mesh
        geometry={nodes.Holding_Wall_dl.geometry}
        material={materials["Wood Variant 1"]}
        position={[0.039, 0.035, 0.665]}
        scale={[0.005, 0.01, 0.005]}
      >
        <mesh
          geometry={nodes.Bolt.geometry}
          material={materials["Metal Bolts"]}
          position={[-1.212, -0.887, 0]}
          rotation={[-2.802, -0.197, -1.606]}
          scale={[0.04, 0.072, 0.07]}
        />
      </mesh>
      <mesh
        geometry={nodes.Con_Back023.geometry}
        material={materials["Metal Bolts"]}
        position={[0.031, 0.065, 0.288]}
        rotation={[2.849, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Con_Back014.geometry}
        material={materials["Metal Bolts"]}
        position={[0.031, 0.065, -0.536]}
        rotation={[2.849, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Con_Back012.geometry}
        material={materials["Metal Bolts"]}
        position={[-0.067, 0.065, -0.536]}
        rotation={[-0.293, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Con_Back004.geometry}
        material={materials["Metal Bolts"]}
        position={[-0.067, 0.065, 0.288]}
        rotation={[-0.293, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cable.geometry}
        material={materials["Black Plastic"]}
        position={[0.249, 0.037, 0.721]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.06}
      />
      <mesh
        geometry={nodes.Bolts023.geometry}
        material={materials["Metal Bolts"]}
        position={[0.031, 0.068, 0.288]}
        rotation={[2.849, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolts014.geometry}
        material={materials["Metal Bolts"]}
        position={[0.031, 0.068, -0.536]}
        rotation={[2.849, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolts012.geometry}
        material={materials["Metal Bolts"]}
        position={[-0.066, 0.068, -0.536]}
        rotation={[-0.293, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolts004.geometry}
        material={materials["Metal Bolts"]}
        position={[-0.066, 0.068, 0.288]}
        rotation={[-0.293, 0, Math.PI / 2]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Procedral Black Silk"]}
        position={[2.974, 1.499, 2.93]}
        rotation={[-0.431, 0, 0]}
        scale={[1.297, 0.075, 1.042]}
      />
    </group>
  );
}

useGLTF.preload("models/scene.glb");
