const {app} = require("electron");
const addWindow = require('./controllers/createAddWindow');


const mainMenuTemplate = [
    {
        label: 'file',
        submenu: [
            {
                label: 'Add Item',
                click(){
                    addWindow();
                }
            },
            {
                label: 'Clear Items'
            },
            {
                label: 'Quit',
                accelerator: process.platform ==="darwin" ? 'Command+Q':
                    'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

module.exports = mainMenuTemplate;