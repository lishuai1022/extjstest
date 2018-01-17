Ext.define('Packt.view.privilege.Role', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.role',
    border:false,
    margins: '5 5 5 5',


    requires: [
        'Packt.view.privilege.PriLeft1',
        'Packt.view.privilege.PriLeft2',
        'Packt.view.privilege.PriRight',
    ],

    layout: {
        type: 'border',
        // style:{'background':'#fff'},
    },

    items: [
        {
            // xtype: 'prileft1',
            region: 'west',
            width:'55%',
            layout:'anchor',
            border:false,
            items:[
                {
                    xtype:'prileft1',
                    anchor:'100% 50%',
                },
                {
                    xtype:'prileft2',
                    anchor:'100% 50%',
                }
            ],
            // anchor:'55% 100%',
            // height:'50%',
        },
        // {
        //     xtype: 'prileft2',
        //     region: 'west',
        //     anchor:'55% 50%',
        //     // height:'50%',
        // },
        {
            region: 'center',
            layout:'fit',
            border:false,
            margins:'0 0 0 5',
            items:[
                {
                    xtype:'priright',
                }
            ],
            width:'45%'
            // anchor:'45% 100%',
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