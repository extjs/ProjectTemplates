/*
 * File: app/view/FormPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TasksList.view.FormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formpanel',

    config: {
        items: [
            {
                xtype: 'fieldset',
                id: 'taskFormField',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        labelWidth: '35%',
                        name: 'description',
                        required: true
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Priority',
                        labelWidth: '35%',
                        name: 'priority',
                        required: true,
                        options: [
                            {
                                text: 'Normal',
                                value: 'Normal'
                            },
                            {
                                text: 'High',
                                value: 'High'
                            },
                            {
                                text: 'Low',
                                value: 'Low'
                            }
                        ],
                        usePicker: true
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Due Date',
                        labelWidth: '35%',
                        name: 'dueDate'
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Completed',
                        labelWidth: '35%',
                        name: 'completed'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'saveButton',
                margin: 10,
                ui: 'action',
                text: 'Save'
            },
            {
                xtype: 'button',
                id: 'deleteButton',
                margin: 10,
                ui: 'decline',
                text: 'Delete'
            }
        ]
    }

});