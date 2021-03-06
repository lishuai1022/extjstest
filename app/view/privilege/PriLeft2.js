Ext.define('Packt.view.privilege.PriLeft2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.prileft2',
    title:'角色相关用户管理',
    // border:false,

    // frame: true,
    store: Ext.create('Packt.store.privilege.RoleUser'),

    columns: [
        {
            text: '账户ID',  
            dataIndex:'account_id',
            flex: 0.5
        },
        {
            text: '类型',  
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
            text:'代码',
            dataIndex:'code',
            flex: 1,
        },
        {
            text: '名称',  
            dataIndex:'name',
            flex: 1,
        },
        {
            text: '禁用',  
            dataIndex:'disable',
            width:70,
            renderer:function(val){
                if(val==0) {
                    return '否';
                }else{
                    return '是';
                }
            },
        },
        {
            text: '创建时间',  
            dataIndex:'create_time',
            flex: 1,
            // menuDisabled:true,
        },
    ]
});