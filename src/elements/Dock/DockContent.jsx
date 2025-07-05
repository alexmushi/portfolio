/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "@styles/dock.scss";
import TerminalIcon from "@static/terminal.png";
import ContactIcon from "@static/contact.png";
import FinderIcon from "@static/finder.png";
import CodeIcon from "@static/code.png";
import GithubIcon from "@static/github.png";
import FolderIcon from "@static/folder.png";
import NothingIcon from "@static/NothingIcon.png";
import WiseIcon from "@static/cow.png";
import { Link } from "react-router-dom";
// import { useDockStore } from "@contexts/Dock/Dock";
import DevopsIcon from "@static/DevopsIcon.png";
import mIcon from "@static/mIcon.jpg";

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
							<a>
								<Link to="/projects">
									<li data-title="Projects">
										<img
											src={FinderIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
							</a>
							<div className="separator" />
							<a>
								<Link to="/resume">
									<li data-title="Resume">
										<img
											src={FolderIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
							</a>
							<a>
								<Link to="/contact">
									<li data-title="Contact">
										<img
											src={ContactIcon}
											className="img-fluid"
											alt="mac"
										/>
									</li>
								</Link>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DockContent;
