//copy text to clipboard

//get selected context
function getSelectedObject() {
    let body = document.body;
    let actelement = document.activeElement;
    let selection = window.getSelection();
    if (selection.rangeCount === 0 || selection.toString() === "") {
        if (actelement.value === undefined) {
            return body;
        }
        body = document.createElement("div");
        body.appendChild(actelement.cloneNode(true));
    } else {
        body = document.createElement("div");
        body.appendChild(selection.getRangeAt(0).cloneContents().cloneNode(true));
    }
    return body;
}

//copy selected context to pure text
function copySelectedPureText() {
    commonLookup.getUserTltSetting().then((tlt) => {
        let txt = window.getSelection().toString();
		var txt2=txt.toString();
	 if (txt2 === "") {
            txt2 = document.activeElement.value.substring(document.activeElement.selectionStart, document.activeElement.selectionEnd);
		//alert(txt2);
		var txt2=txt2.replace(/[<]|[>]|[\]|[/]|[?]|[*]|["]|[:]|[|]/g," ");
		top.location.href='es:'+txt2;
		//void(0);
        }
		else
		{
		var txt2=txt.toString();
		var txt2=txt2.replace(/[<]|[>]|[\]|[/]|[?]|[*]|["]|[:]|[|]/g," ");
		top.location.href='es:'+txt2;
		//alert(txt2);
		}
    });
}

//execute command
function executeCommand(msg) {
    switch (msg.cmd) {
        case commonLookup.actlist.copySelectedPuretext:
        case commonLookup.actlist.copyPagePuretext:
            copySelectedPureText();
            break;
        case commonLookup.actlist.toolbarButtonAction:
		 copySelectedPureText();
		 //****
		 break;
        case commonLookup.actlist.keyboardShortcutAction:
           copySelectedPureText();
            break;
        default:
            console.log("no use");
    }
}

//page listener
browser.runtime.onMessage.addListener(executeCommand);
