Ext.define('Packt.view.privilege.Role', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.role',

    requires: [
        'Packt.view.privilege.PriLeft1',
        // 'Packt.view.privilege.PriLeft2',
        'Packt.view.privilege.PriRight',
    ],

    layout: {
        type: 'anchor'
    },

    items: [
        {
            xtype: 'prileft1',
            region: 'west',
            width:'55%',
            // height:'50%',
        },
        {
            xtype:'priright',
            region: 'center',
            width:'45%',
        }
    ],
    // dockedItems: [
    //     {
    //         xtype: 'toolbar',
    //         flex: 1,
    //         dock: 'top',
    //         items: [
    //             {
    //                 xtype: 'button',
    //                 text: 'Add',
    //                 itemId: 'add',
    //                 iconCls: 'add'
    //             },
    //             {
    //                 xtype: 'button',
    //                 text: 'Edit',
    //                 itemId: 'edit',
    //                 iconCls: 'edit'
    //             },
    //             {
    //                 xtype: 'button',
    //                 text: 'Delete',
    //                 itemId: 'delete',
    //                 iconCls: 'delete'
    //             }
    //         ]
    //     }
    // ]
});