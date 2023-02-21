sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
    // , "de/sapui5buch/demo/model/"
], function (UIComponent) {
    "use strict";
    return UIComponent.extend("de.sapui5buch.demo.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            //this.getRouter().initialize();
            //this.setModel(models.createDeviceModel(), "device");
        }
    });
}
);