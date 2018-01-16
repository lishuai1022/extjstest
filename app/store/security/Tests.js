Ext.define('Packt.store.security.Tests', {
    extend: 'Ext.data.Store',

    requires: [
        'Packt.model.security.Test'
    ],

    model: 'Packt.model.security.Test',

    proxy: {
        type: 'ajax',
        url: 'php/security/test.php',
        
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});