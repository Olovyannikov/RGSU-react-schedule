import React, { useState, useCallback } from "react";
import s from './CardWeeks.module.scss';
function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const handleActiveTab = useCallback(label => setActiveTab(label), []);

    const tabs = children.map(child => (
        <button
            onClick={e => {
                e.preventDefault();
                handleActiveTab(child.props.label);
            }}
            className={
                child.props.label === activeTab
                    ? [`${s.tabs__tab}`, `${s.tabs__tab_active}`].join(" ")
                    : `${s.tabs__tab}`
            }
            key={child.props.label}
        >
            {child.props.tabName}
        </button>
    ));
    const tabContent = children.filter(child => child.props.label === activeTab);
    return (
        <>
            <div className={`${s.tabs__box}`}>{tabs}</div>
            <>{tabContent}</>
        </>
    );
}

function Tab(props) {
    return <>{props.children}</>;
}

export { Tabs, Tab };