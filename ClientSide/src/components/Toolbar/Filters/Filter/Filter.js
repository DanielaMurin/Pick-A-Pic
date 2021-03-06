import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'react-toggle'; // https://github.com/aaronshaf/react-toggle
import { Label } from 'reactstrap';

import './Filter.css';
import 'react-toggle/style.css';

const filter = (props) => {
    // console.log('[filter] props: ', props);

    return (
        <Label className={"dropdown-item filtersDropdownLabel"}>
            {/*instead we can use: <CustomInput type="checkbox" defaultChecked {...props} /> */}
            <Toggle
                {...props}
                aria-label={props.label}
                onChange={(e) => {
                    // console.log(e.target.name + " has changed to: " + (e.target.checked ? "checked" : "unchecked"));
                }}
            />
            <span>{props.label}</span>
        </Label>
    );

}

export default filter;

filter.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func
}