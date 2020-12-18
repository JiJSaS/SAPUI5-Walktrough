sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id":"app"
            }
        },
        init: function(){
            //call init of parent UI from SAP
            UIComponent.prototype.init.apply(this, arguments);
            //set data models
            var oData = {
                recipient: {
                   name: "NAMAE"
                }
             };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

                //set i18n model on view
            var i18nModel = new ResourceModel({
            bundleName:"sap.ui.demo.walkthrough.i18n.i18n",
            supportedLocales: [""],
            fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n");
        }
    });
})