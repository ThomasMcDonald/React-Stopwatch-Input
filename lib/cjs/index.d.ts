import { ChangeEvent } from 'react';
interface ITimeSeriesInputProps {
    name: string;
    value?: string;
    required: boolean;
    id?: string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare function TimeSeriesInput(props: ITimeSeriesInputProps): JSX.Element;
export default TimeSeriesInput;
