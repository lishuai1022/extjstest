Ext.define('Packt.model.privilege.RoleUser', {
    extend: 'Ext.data.Model',

    idProperty: 'account_id',

    fields: [
        { name: 'account_id' },
        { name: 'type' },
        { name: 'code' },
        { name: 'name' },
        { name: 'disable' },
        { name: 'create_time' }
    ]
});