import React, { ChangeEvent } from 'react';

interface ITimeSeriesInputProps {
	name: string;
	value?: string;
	required: boolean;
	id?: string;
	className?: string;
	onChange?: (e:ChangeEvent<HTMLInputElement>) => void
}

function StopwatchInput(props:ITimeSeriesInputProps): JSX.Element {
	const { name, value, required, id, className, onChange } = props;

	const inputChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
		let { value } = e.target;
		// only allow users to enter numbers
		value = value.replace(/[^0-9]/g, '');

		const valueSplit = value.match(/.{1,2}/g);

		if(valueSplit && valueSplit.length){
			
			value = valueSplit.join(':');

			if (valueSplit.length > 2) {
				value = `${valueSplit.slice(0, -1).join(':')}.${valueSplit.slice(-1)}`
			}
		}

		e.target.value = value;

		if(onChange){
			onChange(e)
		}
	}
	
	return (
		<input
			id={id} 
			className={className} 
			value={value} 
			name={name} 
			placeholder={"mm:ss.ms"} 
			required={required} 
			maxLength={8} 
			onChange={inputChangeEvent}
		/>
	)
}

export default StopwatchInput;