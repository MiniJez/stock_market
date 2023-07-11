import { useEffect, useState } from "react";
import {
	AssetType,
	Operation,
	OperationType,
} from "../../../domain/interfaces/entities/Operation";
import { useCases } from "../../../domain/usecases";

interface ChartDatas {
	name: AssetType;
	value: number;
}

const HomeViewModel = () => {
	const [operations, setOperations] = useState<Operation[]>([]);

	useEffect(() => {
		useCases.getAllOperations.execute().then((operations) => {
			setOperations(operations);
		});
	}, []);

	const addOperation = (operation: Operation) => {
		console.log(operation);
		useCases.createOperation.execute(operation).then((operation) => {
			setOperations([...operations, operation]);
		});
	};

	const getAllocation = (): ChartDatas[] => {
		let data = operations.map((item) => {
			return {
				name: item.assetType,
				value:
					item.type === OperationType.VENTE
						? -item.quantity * item.price
						: item.quantity * item.price,
			};
		});
		let reducedData = reduceByAssetType(data);
		return reducedData;
	};

	const reduceByAssetType = (data: ChartDatas[]) => {
		return data.reduce((acc: ChartDatas[], item: ChartDatas) => {
			let typeElem = acc.find((elem) => elem.name == item.name);
			if (typeElem) {
				acc[acc.indexOf(typeElem)].value += item.value;
			} else {
				acc.push(item);
			}
			return acc;
		}, [] as Array<ChartDatas>);
	};

	return {
		operations,
		addOperation,
		getAllocation,
	};
};

export default HomeViewModel;
