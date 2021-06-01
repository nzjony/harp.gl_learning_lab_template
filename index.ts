/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates } from "@here/harp-geoutils";

import { View } from "./View";

const app = new View({
    canvas: document.getElementById("map") as HTMLCanvasElement,
    window
});

const mapView = app.mapView;

// center the camera to New York
mapView.lookAt({ target: new GeoCoordinates(40.70398928, -74.01319808), zoomLevel: 17, tilt: 40 });

// make sure the map is rendered
mapView.update();
