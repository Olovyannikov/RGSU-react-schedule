import s from "./Dropdown.module.scss";

const Dropdown = props => {
    const {
        suggestions,
        inputValue,
        onSelectSuggestion,
        displaySuggestions,
        selectedSuggestion
    } = props;

    if (inputValue && displaySuggestions) {
        if (suggestions.length > 0) {
            return (
                <ul className={s.card__dropdown}>
                    {suggestions.map((suggestion, index) => {
                        const isSelected = selectedSuggestion === index;
                        const classname = `${s.card__dropitem} ${isSelected ? "selected" : ""}`;
                        return (
                            <li
                                key={index}
                                className={classname}
                                onClick={() => onSelectSuggestion(index)}
                            >
                                <span className={s.groupName}>{suggestion[0]}</span>
                                <span className={s.groupFaculty}>{suggestion[1]}</span>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return <div>Не найдено :(</div>;
        }
    }
    return <></>;
};



export default Dropdown;




