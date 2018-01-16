Ext.define('Packt.controller.security.Test', {
    extend: 'Ext.app.Controller',

    requires: [
        'Packt.util.Util'
    ],

    views: [
        // 'security.Users',
        'security.Test'
    ],

    stores: [
        // 'security.Groups'
    ],

    refs: [
        {
            ref: 'testleft',
            selector: 'testleft'
        },
        {
            ref: 'testright',
            selector: 'testright'
        }
    ],

    init: function(application) {
        console.log('kkkk');
        this.control({
            "testleft": {
                render: this.onRender
            },
            "testright": {
                render: this.onRender
            },
        });
    },
    onRender: function(component, options) {

        component.getStore().load();
    },

    
});