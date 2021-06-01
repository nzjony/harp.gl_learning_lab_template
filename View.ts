/*
 * Copyright (C) 2019-2021 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@here/harp-datasource-protocol";
import { MapControls } from "@here/harp-map-controls";
import { MapView } from "@here/harp-mapview";
import { VectorTileDataSource } from "@here/harp-vectortile-datasource";

const defaultTheme = "resources/berlin_tilezen_base.json";

export interface ViewParameters {
  theme?: string | Theme;
  canvas: HTMLCanvasElement;
  window: Window;
}

/**
 * Class to assemble the MapView and other parts together.
 */
export class View {
  readonly mapView: MapView;

  constructor(args: ViewParameters) {
    this.mapView = this.createMapView(args.canvas, args.theme ?? defaultTheme);

    this.setupDataSource();

    MapControls.create(this.mapView);

    this.resize(args.window);
  }

  protected createMapView(
    canvas: HTMLCanvasElement,
    theme: string | Theme
  ): MapView {
    const mapView = new MapView({
      // TODO: Correctly construct the MapView
      decoderUrl: "decoder.bundle.js",
    });
    return mapView;
  }

  protected setupDataSource(): void {
    const authenticationCode = "<replace with your API Key>";
    const dataSource = new VectorTileDataSource({
      authenticationCode,
    });

    //TODO: add the data source to the MapView
  }

  protected resize(window: Window): void {
    // make map full-screen
    this.mapView.resize(window.innerWidth, window.innerHeight);

    // react on resize events from the browser.
    window.addEventListener("resize", () => {
      this.mapView.resize(window.innerWidth, window.innerHeight);
    });
  }
}
