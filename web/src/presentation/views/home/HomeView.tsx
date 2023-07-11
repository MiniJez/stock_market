import { OperationForm } from "./components/OperationForm";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import HomeViewModel from "./HomeViewModel";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "type", headerName: "Type", minWidth: 100, flex: 1, },
	{ field: "assetName", headerName: "Asset Name", flex: 1, minWidth: 100 },
	{
		field: "assetType",
		headerName: "Asset Type",
		minWidth: 100,
		flex: 1,
	},
	{
		field: "quantity",
		headerName: "Quantity",
		type: "number",
		minWidth: 100,
		flex: 1,
	},
	{
		field: "price",
		headerName: "Price",
		type: "number",
		minWidth: 100,
		flex: 1,
	},
	/*{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},*/
];

const HomeView = () => {
	const { operations, addOperation, getAllocation } = HomeViewModel();

	return (
		<main className="w-screen px-10 mt-5">
			<h1 className="mb-5">Stock market</h1>
			<div className="w-full">
				<DataGrid
					rows={operations}
					columns={columns}
					pageSizeOptions={[5, 10]}
					className="mb-5"
				/>
			</div>
			<OperationForm onAddOperation={addOperation} />
			<ResponsiveContainer width="100%" height={400}>
				<PieChart>
					<Pie
						data={getAllocation()}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius={2}
						outerRadius="50%"
						fill="#82ca9d"
						label={(props) => {
							return props.name.toUpperCase();
						}}
					/>
				</PieChart>
			</ResponsiveContainer>
		</main>
	);
};

export default HomeView;
