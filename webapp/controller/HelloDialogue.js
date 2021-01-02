sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment){
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
                    return oDialog;
                });
                
            }
            this.pDialog.then(function(oDialog){ oDialog.open();});
        }
    });
});