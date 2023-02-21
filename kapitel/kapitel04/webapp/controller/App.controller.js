sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageBox, Filter, FilterOperator, JSONModel) {
    "use strict";
    return Controller.extend("de.sapui5buch.demo.controller.App", {
      onPress: function (oEvent) {
        var oInputField = this.byId("idInputField");
        var sValue = oInputField.getValue();
        //alert("iiyaaa, yameteeee kudasaiii");
        MessageBox.show("Hallo " + sValue, {
          icon: MessageBox.Icon.INFORMATION,
          title: "Hallo Nachricht",
        });
      },

      onSuggest: function (oEvent) {
        var sTerm = oEvent.getParameter("suggestValue");
        var aFilters = [];
        if (sTerm) {
          aFilters.push(
            new Filter("CompanyName", FilterOperator.StartsWith, sTerm)
          );
        }
        oEvent.getSource().getBinding("suggestionItems").filter(aFilters);
      },
      onSuggestionItemSelected: function (oEvent) {
        var oSelectedItem = oEvent.getParameter("selectedItem");
        var sBindingPath = oSelectedItem.getBindingContext().getPath();
        this._updateUI(sBindingPath);
      },

      _updateUI: function (sBindingPath) {
        var oHeaderContent = this.byId("headerContent");
        oHeaderContent.bindElement(sBindingPath);
        var oAdrSection = this.byId("addressSection");
        oAdrSection.setVisible(true);
        oAdrSection.bindElement(sBindingPath + "/Address");
        var oObjLayout = this.byId("ObjectPageLayout");
        oObjLayout.setShowHeaderContent(true);
        oObjLayout.setToggleHeaderOnTitleClick(true);
      },
    });
  }
);
