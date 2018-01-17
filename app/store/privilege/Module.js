Ext.define('Packt.store.privilege.Module', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.privilege.Module'
    ],

    model: 'Packt.model.privilege.Module',

    proxy: {
        type: 'ajax',
        url: 'php/security/module.php',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});