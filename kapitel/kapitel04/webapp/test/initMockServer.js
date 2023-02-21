sap.ui.define(
  ["de/sapui5buch/demo/localService/mockserver"],
  function (mockserver) {
    "use strict";
    mockserver.init();
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
  }
);
