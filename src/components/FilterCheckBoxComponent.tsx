import * as React from "react";
import styled from "styled-components";

interface IProps {
	id: string,
	name: string,
	filter: number[],
	onChangeFunction(checked: boolean, filterValue: number, previousFilter: number[]): void,
	labelName: string,
	filterValue: number
}

const Block: any = styled.div`
	height: 100%;
	width: 100%;
`;

const FilterCheckBoxComponent: React.FC<IProps> = (props) => {

	const { labelName, onChangeFunction, filter, name, id, filterValue} = props;

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

		</Block>
		)
};

export default FilterCheckBoxComponent;