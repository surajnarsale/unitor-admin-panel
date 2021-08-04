import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">UNITOR</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<div alt="profile-image" className="topAvatar" />
				</div>
			</div>
		</div>
	);
}
