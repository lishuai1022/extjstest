Ext.define('Packt.view.security.Test', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.test',

    requires: [
        'Packt.view.security.TestLeft',
        'Packt.view.security.TestRight',
    ],

    layout: {
        type: 'anchor'
    },

    items: [
        {
            xtype: 'testleft',
            region: 'west',
            width:'55%',
        },
        {
            xtype:'testright',
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