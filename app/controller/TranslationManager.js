Ext.define('Packt.controller.TranslationManager', {
    extend: 'Ext.app.Controller',

    views: [
        'Translation'
    ],

    refs: [
        {
            ref: 'translation',
            selector: 'translation'
        }
    ],

    onMenuitemClick: function(item, e, options) {
        var menu = this.getTranslation();

        menu.setIconCls(item.iconCls);
        menu.setText(item.text);

        localStorage.setItem("user-lang", item.iconCls);

        window.location.reload();
    },

    onSplitbuttonBeforeRender: function(abstractcomponent, options) {
        var lang = localStorage ? (localStorage.getItem('user-lang') || 'cn') : 'cn';
        abstractcomponent.iconCls = lang;

        if (lang == 'en'){
            abstractcomponent.text = 'English';
        } else if (lang == 'es'){
            abstractcomponent.text = 'Español';
        } else if (lang == 'cn'){
            abstractcomponent.text = '中文';
        } else {
            abstractcomponent.text = 'Português';
        }
    },

    init: function(application) {
        this.control({
            "translation menuitem": {
                click: this.onMenuitemClick
            },
            "translation": {
                beforerender: this.onSplitbuttonBeforeRender
            }
        });
    }

});
