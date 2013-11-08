/*
 * File: app/controller/Feeds.js
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

Ext.define('Feed.controller.Feeds', {
    extend: 'Ext.app.Controller',
    alias: 'controller.feeds',

    config: {
        models: [
            'Search'
        ],
        stores: [
            'Searches',
            'Feeds'
        ],
        views: [
            'AddFeed',
            'FeedsList'
        ],

        refs: {
            doneButton: '#doneButton',
            urlField: '#urlField',
            searchField: '#searchField',
            postsNav: '#postsNav',
            addButton: '#addButton',
            feedsButton: '#feedsButton',
            postsList: '#postsList'
        },

        control: {
            "feedsadd button": {
                tap: 'onButtonTap'
            },
            "feedslist": {
                itemtap: 'onFeedsListItemTap',
                itemswipe: 'onFeedsListItemSwipe'
            },
            "#addButton": {
                tap: 'onAddFeedButtonTap'
            },
            "#feedsButton": {
                tap: 'onViewFeedsButtonTap'
            },
            "navigationview": {
                activeitemchange: 'onNavigationviewActiveItemChange'
            }
        }
    },

    onButtonTap: function(button, e, eOpts) {

        var postsNav = this.getPostsNav(),
            urlString = this.getUrlField().getValue(),
            searchString = this.getSearchField().getValue();

        if (!(Ext.isEmpty(urlString))){
            console.log('Adding feed with url: ' + urlString);

            Ext.getStore('Feed').loadFeed(urlString);
            postsNav.pop();
        }
        else if (!(Ext.isEmpty(searchString))){
            console.log('Searching feed with keywords: ' + searchString);

            var searchStore = Ext.getStore('Searches');

            searchStore.search(searchString);

            var feedsList = Ext.create('widget.feedslist',{
                title: 'Search - ' + searchString
            });
            feedsList.setStore(searchStore);
            postsNav.push(feedsList);

        }
    },

    onFeedsListItemTap: function(dataview, index, target, record, e, eOpts) {
        Ext.getStore('Feed').loadFeed(record.data.url);
        this.getPostsNav().pop(2);


    },

    onFeedsListItemSwipe: function(dataview, index, target, record, e, eOpts) {
        Ext.Msg.confirm("Remove feed", ["Are you sure you want to remove ",
        record.get('title'),
        "?"].join(''), function(buttonId){
            if (buttonId === 'yes'){
                Ext.getStore('Feeds').remove(record);
            }
        });
    },

    onAddFeedButtonTap: function(button, e, eOpts) {
        var addFeed = Ext.create('widget.addfeed', {
            title: 'Add feed'
        });

        this.getPostsNav().push(addFeed);
    },

    onViewFeedsButtonTap: function(button, e, eOpts) {
        var feedsList = Ext.create('widget.feedslist',{
            title: 'Tap to select/swipe to delete'
        });
        feedsList.setStore(Ext.getStore('Feeds'));
        this.getPostsNav().push(feedsList);
    },

    onNavigationviewActiveItemChange: function(container, value, oldValue, eOpts) {
        if (value === this.getPostsList()){
            this.getAddButton().show();
            this.getFeedsButton().show();
        }
        else{
            this.getAddButton().hide();
            this.getFeedsButton().hide();
        }

    }

});