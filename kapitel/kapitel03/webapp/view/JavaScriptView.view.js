sap.ui.define([
    "sap/m/Label"
], function (Label) {
    "use strict";
    sap.ui.jsview("de.sapui5buch.demo.view.JavaScriptView", {
        getControllerName: function () {
            return "de.sapui5buch.demo.controller.JavaScriptView";
        },
        createContent: function (oController) {
            var oLabel = new Label();
            oLabel.setText("Hallo JavaScript");
            return oLabel;
        }
    });
});