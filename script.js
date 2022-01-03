require([
    "esri/Map",
    "esri/views/SceneView"
    // "dijit/form/Button"
],(Map, SceneView, Button)=>{
    
    const map1 = new Map ({
        basemap: "osm"
    });
    const view = new SceneView ({
        map: map1,
        container: "mapDiv",
        zoom: 13,
        center: [52, 31]
    });

const myButton = new Button({
    label:"przycisk",
    onClick: function () {

    }, "basemap_change");
})