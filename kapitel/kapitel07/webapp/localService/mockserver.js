sap.ui.define(
  ["sap/ui/core/util/MockServer", "sap/base/Log"],
  function (MockServer, Log) {
    "use strict";
    return {
      /**
       * @public
       */
      init: function () {
        // create
        var oMockServer = new MockServer({
          rootUri: "/",
        });

        // simulate against the metadata and mock data
        oMockServer.simulate("../localService/metadata.xml", {
          sMockdataBaseUrl: "../localService/mockdata",
          bGenerateMissingMockData: false,
        });
        // start
        oMockServer.start();

        Log.info("Running the app with mock data");
      },
    };
  }
);
