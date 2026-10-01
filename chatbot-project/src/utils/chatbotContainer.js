export function getContainerPosition(isSwitchToTop) {
    let containerClass;
    isSwitchToTop
        ? containerClass = "app-container .chatbot-container-top"
        : containerClass = "app-container .chatbot-container-bottom";
    return containerClass
}

export function handlePositionSwitch(isSwitchToTop,
    setIsSwitchToTop, setPositionSwitcherText) {
    isSwitchToTop
        ? setPositionSwitcherText('Move textbox to top')
        : setPositionSwitcherText('Move textbox to bottom');
    setIsSwitchToTop(!isSwitchToTop);
}