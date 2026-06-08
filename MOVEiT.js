/*
Draw a border round the document.body.
*/
const piecematch = /^([wb][prkbnq])$/gm

function getPiece(node) {
    if (node === undefined || node.classList === undefined) {
        return null;
    }
    for (let i = 0; i < node.classList.length; i++) {
        b = piecematch.exec(node.classList[i])
        if (b === null) {
            continue
        }
        return b[1]
    }
    return null
}

function changeElement(node) {
    piece = getPiece(node)
    if (piece === null) {
        return
    }
    node.style.backgroundImage = `url('${browser.runtime.getURL(`pieces/${piece}.png`)}')`
}

// Select the node that will be observed for mutations
const targetNode = document;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                let node = mutation.addedNodes[i];
                if (node.tagName === "WC-CHESS-BOARD") {
                    reloadBoard(node)
                } else {
                changeElement(mutation.addedNodes[i])
                }
            }
        } else if (mutation.type === "attributes" && mutation.attributeName === "class") {
            changeElement(mutation.target)
        }

    }
};

function reloadBoard(node) {
    if (node === undefined) {
        return
    }
    for (let i = 0; i < node.childNodes.length; i++) {
        changeElement(node.childNodes[i])
    }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
document.body.style.border = "5px solid blue";

reloadBoard(document.getElementsByTagName("wc-chess-board")[0]);
