import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft"></div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
					</div>
					<div className="topbarIconContainer">
						<Language />
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
				</div>
			</div>
		</div>
	);
}
