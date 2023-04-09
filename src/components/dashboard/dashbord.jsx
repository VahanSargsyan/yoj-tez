import React, { useEffect, useRef } from "react";
import { LineChart } from "@opd/g2plot-react";
import Paper from '@mui/material/Paper';

import { config, config1 } from "../../const/dummy";


const Dashboard = () => {
	const lineChartRef = useRef();
	useEffect(() => {
		if (lineChartRef.current) {
			const plot = lineChartRef.current;
			plot.on("line:click", (e) => {
				console.log(e);
			});
		}
	}, []);

	return (
		<section>
			<Paper elevation={4} className="chartPaper">
				<LineChart chartRef={lineChartRef} {...config} />
			</Paper>
			
			<Paper elevation={4} className="chartPaper">
				<LineChart {...config1} />
			</Paper>
		</section>
	);
};

export default Dashboard;