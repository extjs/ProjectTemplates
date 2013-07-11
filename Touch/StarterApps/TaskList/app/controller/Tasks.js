/*
 * File: app/controller/Tasks.js
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

Ext.define('MyApp.controller.Tasks', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'mainview',
            addButton: 'mainview #addButton'
        },

        control: {
            "tasklist": {
                select: 'view',
                show: 'onTaskListShow'
            },
            "mainview #addButton": {
                tap: 'add'
            },
            "list": {
                itemtaphold: 'edit'
            },
            "formpanel #saveButton": {
                tap: 'save'
            }
        }
    },

    view: function(dataview, record, eOpts) {
        
        // Prevent the default select action
        if (this.holdSelect) {
        
            // Remove current hold
            this.holdSelect = false;
        
        }
        
        else {
        
        
            // Navigate to details
            this.getMainView().push({
                xtype: 'detailpanel',
                title: 'Task Details',
                data: record.data
            });
            this.getAddButton().hide();
        
        }
        
        
    },

    add: function(button, e, eOpts) {
        // Navigate to form
        this.getMainView().push({
            xtype: 'formpanel',
            title: 'Add task'
        });
        
        this.getAddButton().hide();
    },

    edit: function(dataview, index, target, record, e, eOpts) {
        // Navigate to form
        this.getMainView().push({
            xtype: 'formpanel',
            title: 'Edit Task'
        });
        
        this.getAddButton().hide();
        
        this.holdSelect = true;
    },

    save: function(button, e, eOpts) {
        var mainView = this.getMainView();
        
        // Navigate back to list
        mainView.pop();
    },

    onTaskListShow: function(component, eOpts) {
        this.getAddButton().show();
    }

});