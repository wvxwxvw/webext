//Menus Combine
browser.contextMenus.create({
    id: commonLookup.actlist.copySelectedPuretext,
    title: "Искать в Everything",
    contexts: ["selection"]
});
browser.contextMenus.create({
    id: commonLookup.actlist.copyPagePuretext,
    title: browser.i18n.getMessage("copyPagePuretext"),
    contexts: ["page"]
});

//Main Methods
browser.contextMenus.onClicked.addListener((info, tab) => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then((acttabs) => {
        let acttab = acttabs[0];
        switch (info.menuItemId) {
            case commonLookup.actlist.copySelectedPuretext:
            case commonLookup.actlist.copyPagePuretext:
                executeCommand(acttab, {
                    cmd: info.menuItemId
                });
                break;
            default:
                console.log("no use");
        }
    });
});
browser.browserAction.onClicked.addListener((tab) => {
    executeCommand(tab, {
        cmd: commonLookup.actlist.toolbarButtonAction
    });
});
browser.commands.onCommand.addListener((command) => {
    browser.tabs.query({
        currentWindow: true,
        active: true
    }).then((acttabs) => {
        let acttab = acttabs[0];
        executeCommand(acttab, {
            cmd: commonLookup.actlist.keyboardShortcutAction
        });
    });
});

//Common Method
//execute command on page
function executeCommand(tab, msg) {
    browser.tabs.sendMessage(tab.id, msg)
        .then(() => {
            console.log("Command executed.");
        })
        .catch((errmsg) => {
            console.error(`Command failed: ${errmsg}`);
        });
}