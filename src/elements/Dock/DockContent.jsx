import React from "react";
import "@styles/dock.scss";
import TerminalIcon from "@static/terminal.png";
import ContactIcon from "@static/contact.png";
import FinderIcon from "@static/finder.png";
import FolderIcon from "@static/folder.png";
import { Link } from "react-router-dom";



const DockContent = () => {
	return (
		<div className="main-contain">
			<div className="container">
				<div className="dock">
					<span></span>
					<div className="dock-nav">
						<ul>
							<Link to="/">
								<li
									data-title="Home"
									className="full-width-icon"
								>
									<img
										src={TerminalIcon}
										className="img-fluid"
										alt="mac"
									/>
								</li>
							</Link>
								<Link to="/projects">
									<li data-title="Projects">
										<img
											src={FinderIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
							<div className="separator" />
								<Link to="/resume">
									<li data-title="Resume">
										<img
											src={FolderIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
								<Link to="/contact">
									<li data-title="Contact">
										<img
											src={ContactIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
