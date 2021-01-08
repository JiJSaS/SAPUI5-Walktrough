sap.ui.define([
    "sap/ui/core/UIComponent", 
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialogue"
], function(UIComponent, JSONModel, HelloDialogue){
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
                   name: "World"
                }
             };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            this._helloDialogue = new HelloDialogue(this.getRootControl());
            // create the views based on the url/hash
			this.getRouter().initialize();
        },
        exit:function(){
            this._helloDialogue.destroy();
            delete this._helloDialogue;
        },

        openHelloDialogue: function(){
            this._helloDialogue.open();
        }
    });
});