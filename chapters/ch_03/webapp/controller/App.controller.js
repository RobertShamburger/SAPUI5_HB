sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/ch_03/model/models"
], function (
	Controller,
	models
) {
	"use strict";

	return Controller.extend("sap.ui.demo.ch_03.controller.App",
		{
			onInit: function () {
				var oData = models.createDataModel();
				this.getView().setModel(oData);
			}
		}  
	});
});