//command lookup
const commonLookup = {
    actlist: {
        copySelectedPuretext: "3",
        copyPagePuretext: "7",
        toolbarButtonAction: "A",
        keyboardShortcutAction: "B"
    },
    defaultTltSetting: {
        toolbarButtonAction: "3",
        keyboardShortcutAction: "3",
        fixUrlQuotEnd: true,
        puretextFormat: {
            delAroundSpace: true,
            delInvisibleSpace: true,
            convertQuotation: true,
            convertApostrophe: true,
            convertDash: false,
            convertSpace: false,
            mergeNewline: true,
            mergeSpace: false,
            mergeFullwidthSpace: false,
            mergeTabulation: false,
            mergeAllTypeSpace: false
        }
    },
    getUserTltSetting() {
        return browser.storage.local.get({
            userTltSetting: commonLookup.defaultTltSetting
        });
    }
};