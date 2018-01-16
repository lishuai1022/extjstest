Ext.define('Packt.store.privilege.Role', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.privilege.Role'
    ],

    model: 'Packt.model.privilege.Role',

    proxy: {
        type: 'ajax',
        url: 'php/security/test.php',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});