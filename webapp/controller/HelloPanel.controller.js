sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment){
    'use strict';
    return Controller.extend("sap.ui.walkthrough.controller.HelloPanel", {
        onShowHello : function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
        onOpenDialogue: function(){
            var oView = this.getView();
            //create dialog lazily
            if (!this.pDialog){
                //load it async XML fragment
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialogue"
                }).then(function(oDialog){
                    //conntect dialog to the root view of component (models + lifecycle)
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this.pDialog.then(function(oDialog){ oDialog.open();});
        }
    });
    
});