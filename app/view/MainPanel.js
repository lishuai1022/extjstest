Ext.define('Packt.view.MainPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainpanel',

    requires: [
        'Ext.ux.IFrame'
    ],

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            closable: false,
            iconCls: 'home',
            title: '首页',
            layout: 'fit',
            // html:'<div id="titleHeader">财富桥策略平台管理系统<span style="font-size:12px;"> - 1.0版</span></div>',
            // items: [{
            //     xtype: 'uxiframe',
            //     src: 'http://www.packtpub.com/mastering-ext-javascript/book'
            // }]
        }
    ]
});