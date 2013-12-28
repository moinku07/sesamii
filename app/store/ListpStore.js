/*
 * File: app/store/ListpStore.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('Sesamii.store.ListpStore', {
    extend: 'Ext.data.Store',
    alias: 'store.listpstore',

    requires: [
        'Sesamii.model.ListModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        model: 'Sesamii.model.ListModel',
        storeId: 'ListpStore',
        proxy: {
            type: 'jsonp',
            url: 'http://sesamii-api.tk/api/venues/',
            reader: {
                type: 'json'
            }
        }
    }
});