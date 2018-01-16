Ext.define('Packt.view.security.TestLeft', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.testleft',
    title:'交易账户列表',

    frame: true,
    store: Ext.create('Packt.store.security.Tests'),

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