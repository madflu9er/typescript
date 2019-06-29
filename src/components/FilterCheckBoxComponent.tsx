import * as React from "react";
import styled from "styled-components";

interface IProps {
	id: string,
	name: string,
	filter: number[],
	onChangeFunction(checked: boolean, filterValue: number, previousFilter: number[]): void,
	labelName: string,
	filterValue: number,
	setSingleFilter(filter: number): void
}

const Block: any = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const FilterCheckBoxComponent: React.FC<IProps> = (props) => {

	const { labelName, onChangeFunction, filter, name, id, filterValue, setSingleFilter} = props;

	return (
		<Block>
			<input
				onChange={(e) => { onChangeFunction(e.target.checked, filterValue, filter) } }
				type="checkbox"
				id={id}
				name={name}
				checked={filter.includes(filterValue)}
			/>
			<label htmlFor={id}><span/>
				{labelName}
			</label>
			<button onClick={() =>{setSingleFilter(filterValue)}}>
				только
			</button>
		</Block>
		)
};

export default FilterCheckBoxComponent;