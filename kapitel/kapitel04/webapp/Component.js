sap.ui.define(
    ["sap/ui/core/UIComponent"],
    function (UIComponent) {
        return UIComponent.extend("de.sapui5buch.demo.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
            }
        });
    }
);