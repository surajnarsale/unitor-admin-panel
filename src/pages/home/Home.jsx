import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../dummyData';
import Chart from '../../components/chart/Chart';

export default function Home() {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart
				data={userData}
				title="User Analytics"
				grid
				dataKey="Active User"
			/>
		</div>
	);
}
