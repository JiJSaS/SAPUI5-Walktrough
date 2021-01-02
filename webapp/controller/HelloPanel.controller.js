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
                    name: "sap.ui.demo.walkthrough.view.HelloDialogue",
                    controller: this
                }).then(function(oDialog){
                    //conntect dialog to the root view of component (models + lifecycle)
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this.pDialog.then(function(oDialog){ oDialog.open();});
        },
        onCloseDialogue : function () {
			// note: We don't need to chain to the pDialog promise, since this event-handler
			// is only called from within the loaded dialog itself.
            //this.byId("helloDialog").close();

            //note 2: doesnt work, use promise
            this.pDialog.then(function(oDialog){ oDialog.close();});
		}
    });
    
});