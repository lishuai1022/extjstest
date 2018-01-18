Ext.define('Packt.controller.privilege.Role', {
    extend: 'Ext.app.Controller',

    requires: [
        'Packt.store.privilege.Role',
        'Packt.store.privilege.RoleUser',
        // 'Packt.util.Util'
    ],

    views: [
        'privilege.Role'
    ],

    stores: [
        // 'security.Groups'
        'privilege.Role',
        'privilege.RoleUser',
    ],

    refs: [
        {
            ref: 'prileft1',
            selector: 'prileft1'
        },
        {
            ref: 'prileft2',
            selector: 'prileft2'
        },
        {
            ref: 'priright',
            selector: 'priright'
        }
    ],

    init: function(application) {
        this.control({
            "prileft1": {
                render: this.onRender,
                select: this.onPrileft1Select,
            },
            "prileft2": {
                render: this.onRender2,
            },
            "priright": {
                render: this.onRender2,
            },
        });
    },
    onRender: function(component, options) {

        component.getStore().load();
    },
    onRender2: function(component, options) {

        component.getStore().load();
    },

    onPrileft1Select:function(rowModel, record, index, eOpts) {
        // var account_id = record.data.account_id;
        // var RoleUserStore = this.getPrivilegeRoleUserStore();
        // console.log(RoleUserStore);
        // RoleUserStore.load();
        this.getPrileft2().getStore().load();
        this.getPriright().getStore().load();
    }

    
});