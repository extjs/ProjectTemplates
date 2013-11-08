/*
 * File: app/view/AddFeed.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Feed.view.AddFeed', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addfeed',

    config: {
        styleHtmlContent: true,
        items: [
            {
                xtype: 'fieldset',
                title: 'Enter URL',
                items: [
                    {
                        xtype: 'urlfield',
                        id: 'urlField',
                        label: 'URL',
                        placeHolder: 'http://example.com'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'or',
                styleHtmlContent: true
            },
            {
                xtype: 'fieldset',
                title: 'Search',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'searchField',
                        label: 'Keyword'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        flex: 1,
                        height: 40,
                        id: 'doneButton',
                        ui: 'confirm',
                        width: 100,
                        text: 'Done'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }

});