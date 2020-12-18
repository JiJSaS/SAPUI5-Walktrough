sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/ui/model/json/JSONModel",
], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            manifest:"json"
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
        }
    });
})