sap.ui.define([
    "sap/m/Label"
], function (
    Label
) {
    "use strict";
    sap.ui.jsview("sap.ui.demo.ch_03.view.JavaScriptView", {
        getControllerName: function () {
            return "sap.ui.demo.ch_03.controller.JavaScriptView";
        },
        createContent: function (oController) {
            var oLabel = new Label();
            oLabel.setText("Hallo JavaScript");
            return oLabel;
        }
    });
});