sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function (ManagedObject, Fragment, syncStyleClass){
    "use strict";
    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialogue", {

        constructor: function (oView){
            this._oView = oView;
        },
        exit: function (oView){
            delete this._oView;
        },
        open: function(){
            var oView = this._oView;
            //create dialog lazily
            if (!this.pDialog){
                var oFragmentController = {
                    onCloseDialogue:function(){
                        oView.byId("helloDialogue").close();
                    }
            };
                this.pDialog = Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialogue",
                    controller: oFragmentController
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    // forward compact/cozy style into dialog
					syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    return oDialog;
                });
                
            }
            this.pDialog.then(function(oDialog){ oDialog.open();});
        }
    });
});