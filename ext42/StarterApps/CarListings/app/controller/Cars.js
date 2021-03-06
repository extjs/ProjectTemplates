/*
 * File: app/controller/Cars.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
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

Ext.define('MyApp.controller.Cars', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'detailPanel',
            selector: '#detailPanel'
        },
        {
            ref: 'qualityChart',
            selector: '#qualityChart'
        }
    ],

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {

        // Get view references
        var detailPanel = this.getDetailPanel(),
            chart = this.getQualityChart();

        // Update details panel with data
        detailPanel.update(record.data);

        // Get the quality field from record
        var qualityData = record.get('quality');
        // Update chart with data
        chart.store.loadData(qualityData);

    },

    init: function(application) {
        this.control({
            "#carGrid": {
                select: this.onGridpanelSelect
            }
        });
    }

});
