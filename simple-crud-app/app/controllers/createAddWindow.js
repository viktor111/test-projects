const electron = require('electron');
const path = require('path');
const url = require('url');
const db = require('../database/test');


const {app, BrowserWindow} = electron;

let window;

require('electron-handlebars')({
    title: 'Handlebars Worked!',
    test: db.test
});

function addWindow() {
    window = new BrowserWindow(
        {
            width: 500,
            height: 300
        }
    );

    window.loadURL(url.format({
        pathname: '../views/add-window.hbs',
        protocol: 'file:',
        slashes: true
    }));
}

module.exports = addWindow;