/*
 * File: app/store/Searches.js
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

Ext.define('Feed.store.Searches', {
    extend: 'Ext.data.Store',
    alias: 'store.search',

    requires: [
        'Feed.model.Search',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        data: [
            {
                url: 'http://siteone.com/rss',
                title: 'Mock Blog One',
                description: 'A blog with lots of words and stuff.'
            },
            {
                url: 'http://sitetwo.com/rss',
                title: 'Mock Blog Two',
                description: 'A blog with lots of words and stuff.'
            },
            {
                url: 'http://sitethree.com/rss',
                title: 'Mock Blog Three',
                description: 'A blog with lots of words and stuff.'
            }
        ],
        model: 'Feed.model.Search',
        storeId: 'Searches',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/find?v=1.0',
            reader: {
                type: 'json',
                rootProperty: 'responseData.entries'
            }
        }
    },

    search: function(keywords) {
            this.load({
                params:{
                    q: keywords
                }
            });

    }

});