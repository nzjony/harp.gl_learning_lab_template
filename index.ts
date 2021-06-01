/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { View } from "./View";

const app = new View({
  canvas: document.getElementById("map") as HTMLCanvasElement,
  window,
});

const mapView = app.mapView;

// TODO: Point the camera at some valid location

// make sure the map is rendered
mapView.update();
