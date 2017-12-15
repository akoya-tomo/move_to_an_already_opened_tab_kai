let disable = false;
//let last_update_tab_id = 0;

function moveAndClose(tab_id_to_move, tab_id_to_close, active){
    //last_update_tab_id = tab_id_to_move;
    
    // move to opened tab
    browser.tabs.update(tab_id_to_move,{active:active});

    // close tab to open
    browser.tabs.remove(tab_id_to_close);
}

function process(tabs, updated_tab_id, url, active){
    for(let tab of tabs){
        if(url == tab.url && tab.id != updated_tab_id && url != "about:blank"){
            moveAndClose(tab.id, updated_tab_id, active);
        }
    }
}

function onTabUpdated(tab_id, change_info, tab){
    if(disable){
        return;
    }

    //if(tab_id == last_update_tab_id){
    //    return;
    //}

    let query = browser.tabs.query({
        currentWindow:true
    });

    query.then((tabs) => {
        process(tabs, tab_id, change_info.url, tab.active);
    })
}

function setActionIcon(){
    let path = browser.extension.getURL(`icons/${disable ? `disable.png` : `enable.png`}`);
    browser.browserAction.setIcon({
        path:path
    });
}

function onActionButton(tab){
    disable = !disable;
    setActionIcon();    
}

function main(){
    browser.browserAction.onClicked.addListener(onActionButton);
    browser.tabs.onUpdated.addListener(onTabUpdated);
    setActionIcon();   
}

main();

function onError(error){
    //
}
