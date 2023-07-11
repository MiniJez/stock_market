import { ChangeEvent, FormEvent, useState } from "react";
import { AssetCategory, AssetType, Operation, OperationType } from "../../../../domain/interfaces/entities/Operation";
import { v4 as uuidv4 } from "uuid";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

interface OperationFormProps {
	onAddOperation: (operation: Operation) => void;
}

export const OperationForm = (props: OperationFormProps) => {
	const { onAddOperation } = props;
	const initialOperationState: Operation = {
		id: uuidv4(),
		type: OperationType.ACHAT,
		assetType: AssetType.ETF,
		assetName: "",
		assetCategory: AssetCategory.OFFENSIVE,
		quantity: 0,
		price: 0,
		date: new Date(),
	};
	const [operation, setOperation] = useState<Operation>(initialOperationState);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		onAddOperation(operation);
		setOperation({ ...initialOperationState, id: uuidv4() });
		
	};

	const handleInputChange = (
		e: ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setOperation({ ...operation, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<Grid2 container spacing={2} columns={{ xs: 1, sm: 2}}>
				<Grid2 xs={1}>
					<FormControl fullWidth>
						<InputLabel id="type">Opération</InputLabel>
						<Select
							size="small"
							labelId="type"
							name="type"
							label="Opération"
							value={operation.type}
							onChange={(e) =>
								handleInputChange(
									e as unknown as ChangeEvent<HTMLSelectElement>
								)
							}
						>
							<MenuItem value="achat">Achat</MenuItem>
							<MenuItem value="vente">Vente</MenuItem>
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 xs={1}>
					<TextField
						size="small"
						name="date"
						variant="outlined"
						type="date"
						label="Date"
						hiddenLabel
						value={operation.date}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid2>
				<Grid2 xs={1}>
					<FormControl fullWidth>
						<InputLabel id="assetType">Type d'actif</InputLabel>
						<Select
							size="small"
							labelId="assetType"
							name="assetType"
							label="Type d'actif"
							value={operation.assetType}
							onChange={(e) =>
								handleInputChange(
									e as unknown as ChangeEvent<HTMLSelectElement>
								)
							}
						>
							<MenuItem value="action">Action</MenuItem>
							<MenuItem value="crypto">Crypto</MenuItem>
							<MenuItem value="etf">ETF</MenuItem>
							<MenuItem value="or">Or</MenuItem>
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 xs={1}>
					<FormControl fullWidth>
						<InputLabel id="assetCategory">Categorie</InputLabel>
						<Select
							size="small"
							labelId="assetCategory"
							name="assetCategory"
							label="Category"
							value={operation.assetCategory}
							onChange={(e) =>
								handleInputChange(
									e as unknown as ChangeEvent<HTMLSelectElement>
								)
							}
						>
							<MenuItem value="offensive">Offensive</MenuItem>
							<MenuItem value="defensive">Deffensive</MenuItem>
						</Select>
					</FormControl>
				</Grid2>
				<Grid2 xs={2}>
					<TextField
						size="small"
						name="assetName"
						label="Nom de l'actif"
						variant="outlined"
						value={operation.assetName}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid2>
				<Grid2 xs={1}>
					<TextField
						size="small"
						name="quantity"
						label="Quantité"
						type="number"
						variant="outlined"
						value={operation.quantity}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid2>
				<Grid2 xs={1}>
					<TextField
						size="small"
						name="price"
						label="Prix"
						type="number"
						variant="outlined"
						value={operation.price}
						onChange={handleInputChange}
						fullWidth
					/>
				</Grid2>
				<Grid2 xs={0.5}>
					<Button type="submit" variant="contained" fullWidth>
						Ajouter
					</Button>
				</Grid2>
			</Grid2>
		</form>
	);
};
