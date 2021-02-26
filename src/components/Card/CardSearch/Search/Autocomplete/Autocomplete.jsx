import Dropdown from "../Dropdown/Dropdown";
import s from "../CardSearch.module.scss";
import React from 'react';
import searchLogo from "../../../../../assets/img/icons/search.svg";

const Autocomplete = ({suggestions, placeholder, props}) => {
    const [inputValue, setInputValue] = React.useState("");
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = React.useState();
    const [displaySuggestions, setDisplaySuggestions] = React.useState(false);

    const onChange = event => {
        const value = event.target.value;
        setInputValue(value);

        const filteredSuggestions = suggestions.map(Object.values).filter(suggestion =>
            suggestion[0].toLowerCase().includes(value.toLowerCase()) ||
            suggestion[1].toLowerCase().includes(value.toLowerCase())
        ).slice(0, 3);

        setFilteredSuggestions(filteredSuggestions);
        setDisplaySuggestions(true);
    };

    const onSelectSuggestion = index => {
        setSelectedSuggestion(index);
        setInputValue(filteredSuggestions[index]);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);

    };

    return (
        <>
            <input style={{background: `url(${searchLogo}) no-repeat 96% center `}} autoComplete='off' id="searchInput"
                   type="text" className={`${s.card__input}`}
                   placeholder={placeholder} onChange={onChange} value={inputValue}/>
            <Dropdown
                inputValue={inputValue}
                selectedSuggestion={selectedSuggestion}
                onSelectSuggestion={onSelectSuggestion}
                displaySuggestions={displaySuggestions}
                suggestions={filteredSuggestions}
            />
        </>
    );
}

export default Autocomplete;