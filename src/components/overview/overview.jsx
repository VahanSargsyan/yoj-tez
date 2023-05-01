import React, { useEffect, useRef } from "react";
import { RingProgressChart } from "@opd/g2plot-react";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { getColorByPercent } from "../../helpers/common";

import styles from "./overview.module.css"



const Overview = () => {

	return (
		<section>
			<h3>Overview</h3>
			<div>
				<img src="https://readyxrmblog.files.wordpress.com/2022/05/image-7.png" alt="preview" />
			</div>
			<div>
			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.5} color={
					getColorByPercent(0.4)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.6} color={
					getColorByPercent(0.6)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.8} color={
					getColorByPercent(0.8)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.5} color={
					getColorByPercent(0.4)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.6} color={
					getColorByPercent(0.6)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.8} color={
					getColorByPercent(0.8)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.6} color={
					getColorByPercent(0.6)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>

			<Paper elevation={4} className="chartPaper">
				<Typography>Chart title</Typography>
				<RingProgressChart percent={0.8} color={
					getColorByPercent(0.8)
				} progressStyle={{
					lineCap: 'round',
				}} />
			</Paper>


			</div>
			


		</section>
	);
};

export default Overview;