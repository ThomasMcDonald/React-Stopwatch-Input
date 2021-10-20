import React from 'react';
function StopwatchInput(props) {
    var name = props.name, value = props.value, required = props.required, id = props.id, className = props.className, onChange = props.onChange;
    var inputChangeEvent = function (e) {
        var value = e.target.value;
        // only allow users to enter numbers
        value = value.replace(/[^0-9]/g, '');
        var valueSplit = value.match(/.{1,2}/g);
        if (valueSplit && valueSplit.length) {
            value = valueSplit.join(':');
            if (valueSplit.length > 2) {
                value = valueSplit.slice(0, -1).join(':') + "." + valueSplit.slice(-1);
            }
        }
        e.target.value = value;
        if (onChange) {
            onChange(e);
        }
    };
    return (React.createElement("input", { id: id, className: className, value: value, name: name, placeholder: "mm:ss.ms", required: required, maxLength: 8, onChange: inputChangeEvent }));
}
export default StopwatchInput;
