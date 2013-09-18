/*
 * File: app/view/MainViewport.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainviewport',

    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        pack: 'center',
                        padding: 10,
                        type: 'hbox'
                    },
                    manageHeight: false,
                    title: 'Countdown',
                    items: [
                        {
                            xtype: 'container',
                            html: {
                                
                            },
                            width: 700,
                            items: [
                                {
                                    xtype: 'container',
                                    height: 45,
                                    itemId: 'timerDisplay',
                                    margin: '0 0 20',
                                    style: {
                                        'font-size': '1.5em',
                                        border: '1px solid #ccc;',
                                        padding: '5px',
                                        'text-align': 'center'
                                    }
                                },
                                {
                                    xtype: 'container',
                                    layout: {
                                        align: 'middle',
                                        pack: 'center',
                                        type: 'hbox'
                                    },
                                    items: [
                                        {
                                            xtype: 'datefield',
                                            flex: 1,
                                            itemId: 'dateField',
                                            fieldLabel: 'Date',
                                            labelAlign: 'right',
                                            labelWidth: 60,
                                            name: 'date'
                                        },
                                        {
                                            xtype: 'timefield',
                                            flex: 1,
                                            itemId: 'timeField',
                                            margin: '0 10 0 0',
                                            fieldLabel: 'Time',
                                            labelAlign: 'right',
                                            labelWidth: 50
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            itemId: 'startButton',
                                            margin: '0 10 0 0',
                                            text: 'Start'
                                        },
                                        {
                                            xtype: 'button',
                                            flex: 1,
                                            margins: '0 10 0 0',
                                            disabled: true,
                                            itemId: 'resetButton',
                                            text: 'Reset'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});