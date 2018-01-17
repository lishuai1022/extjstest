Ext.define('Packt.view.privilege.PriLeft1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.prileft1',
    title:'角色管理',
    style:{marginBottom:'5px'},

    // frame: true,
    store: Ext.create('Packt.store.privilege.Role'),
    tools:[
        {
            xtype:'button',
            text:'新建',
        }
    ],

    columns: [
        {
            text: '角色代码',  
            dataIndex:'account_id',
            flex: 0.5
        },
        {
            text: '角色名称',  
            dataIndex:'type',
            flex: 1,
            renderer:function(val){
                if(val=='stock') {
                    return '股票';
                }else{
                    return '期权';
                }
            },
        },
        {
            text:'角色描述',
            dataIndex:'code',
            flex: 1,
        },
        {
            text: '创建时间',  
            dataIndex:'create_time',
            flex: 1,
        },
        {
            text: '更新时间',  
            dataIndex:'create_time',
            flex:1,
        },
        {
            text:'操作',
        }
    ]
});