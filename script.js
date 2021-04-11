//hellooo
/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require("Scene");
const Patches = require("Patches");

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require("Diagnostics");

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(function () {
  // Enables async/await in JS [part 1]

  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);
  //let isGameEnd = false;

  //   setTimeout(() => {
  //       isGameEnd = true;
  //   }, 10000);

  //   function getRandomNumber(min, max) {
  //     return Math.random() * (max - min) + min;
  //   }

  //const upperCenter = Patches.outputs.getVector("lipUpperCenter");
  //const lowerCenter = Patches.outputs.getVector("lipLowerCenter");
  //const leftCorner = Patches.outputs.getVector("lipLeftCorner");
  //const rightCorner = Patches.outputs.getVector("lipRightCorner");
  let upperCenter;
  let lowerCenter;
  let leftCorner;
  let rightCorner;

  let isMouthOpen;

  Patches.outputs.getVector("lipUpperCenter").then((event) => {
    event.monitor().subscribe(function (values) {
      upperCenter = values.newValue;
    });
  });

  Patches.outputs.getVector("lipLowerCenter").then((event) => {
    event.monitor().subscribe(function (values) {
      lowerCenter = values.newValue;
    });
  });

  Patches.outputs.getVector("lipLeftCorner").then((event) => {
    event.monitor().subscribe(function (values) {
      leftCorner = values.newValue;
    });
  });

  Patches.outputs.getVector("lipRightCorner").then((event) => {
    event.monitor().subscribe(function (values) {
      Diagnostics.log("rightCorner: ");
      Diagnostics.log(value.newValue);
      rightCorner = values.newValue;
    });
  });

  //const isMouthOpen = Patches.outputs.getBoolean("mouthOpen");

  //   const hamburger = Patches.outputs.getVector("hamburger");
  //   const pizza = Patches.outputs.getVector("pizza");
  //   const kek = Patches.outputs.getVector("kek");
  //   const icecek = Patches.outputs.getVector("icecek");
  //   const tavuk = Patches.outputs.getVector("tavuk");

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');
})(); // Enables async/await in JS [part 2]
