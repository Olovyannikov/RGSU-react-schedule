import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import s from "./LinkedTabs.module.scss";

function LinkedTabs({ children, defaultTab, route}) {
    const queryTabExist = children.find(
        child => child.props.label === defaultTab
    );
    const initialTab = queryTabExist
        ? queryTabExist.props.label
        : children[0].props.label;

    const [activeTab, setActiveTab] = useState(initialTab);
    const handleActiveTab = useCallback(label => setActiveTab(label), []);

    const tabs = children.map(child => (
        <Link
            to={`/${route}?tabs=${child.props.label.split(' ')[0]}`}
            onClick={_ => handleActiveTab(child.props.label)}
            className={
                child.props.label === activeTab
                    ? [`${s.tabs__tab}`, `${s.tabs__tab_active}`].join(" ")
                    : `${s.tabs__tab}`
            }
            key={(child.props.label).split(' ')[0]}
            data-value={(child.props.label).split(' ')[0]}
        >
            {child.props.tabName}
        </Link>
    ));
    const tabContent = children.filter(child => child.props.label === activeTab);
    return (
        <>
            <div className={`${s.tabs__box}`}>
                <div className={`${s.tabs__wrapper}`}>
                    {tabs}
                </div>
            </div>
            <div className={`${s.tabs__content}`}>{tabContent}</div>
        </>
    );
}

function Tab(props) {
    return <>{props.children}</>;
}

export { LinkedTabs, Tab };
