Ext.define('Packt.controller.privilege.Role', {
    extend: 'Ext.app.Controller',

    requires: [
        // 'Packt.util.Util'
    ],

    views: [
        'privilege.Role'
    ],

    stores: [
        // 'security.Groups'
    ],

    refs: [
        {
            ref: 'prileft1',
            selector: 'prileft1'
        },
        {
            ref: 'priright',
            selector: 'priright'
        }
    ],

    init: function(application) {
        this.control({
            "prileft1": {
                render: this.onRender
            },
            "priright": {
                render: this.onRender
            },
        });
    },
    onRender: function(component, options) {

        component.getStore().load();
    },

    
});