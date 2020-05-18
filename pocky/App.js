

var viewer = new Cesium.Viewer("cesiumContainer", {
//  clockViewModel: new Cesium.ClockViewModel(clock),
  selectionIndicator: false,
  terrainProvider: Cesium.createWorldTerrain(),
});


  viewer.shadows = true;


viewer.scene.globe.enableLighting = true;
viewer.scene.globe.depthTestAgainstTerrain = true;


var positions = [
  {
    pos: Cesium.Cartesian3.fromDegrees(131.255035,32.621449,50000),
    converter: Cesium.Transforms.eastNorthUpToFixedFrame,
    comments: "T1",
   },
];


var heading = Cesium.Math.toRadians(0);
var pitch = Cesium.Math.toRadians(0);
var roll = Cesium.Math.toRadians(0);
var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);


  for (var i = 0; i < positions.length; i++) {
    var name = positions[i].comments;
    var position = positions[i].pos;
    var entity = viewer.entities.add({
      name: name,
      position:position,
      orientation:Cesium.Transforms.headingPitchRollQuaternion(
  position,
  hpr
),
      model:{
        uri:"pocky_choco1.gltf",
        heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
        minimumPixelSize: 50,
        maximumScale:200,
        scale:1000000.0,
        runAnimations:false,
      },
});
}



var frontView = {
  destination: new Cesium.Cartesian3.fromDegrees(
    131.287612,32.613684,3000
  ),
  orientation: {
    heading: Cesium.Math.toRadians(-90.27879878293835),
    pitch: Cesium.Math.toRadians(-30),
    roll: Cesium.Math.toRadians(0),
  },
  maximumHeight: 100,
};


viewer.scene.camera.setView({
  destination: frontView.destination,
  orientation: frontView.orientation,
});
