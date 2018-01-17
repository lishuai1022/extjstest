Ext.define('Packt.store.privilege.RoleUser', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.privilege.RoleUser'
    ],

    model: 'Packt.model.privilege.RoleUser',

    proxy: {
        type: 'ajax',
        url: 'php/security/roleUser.php',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});