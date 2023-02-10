import { memo, useState } from "react";

const Dropdown = ({ placeholder, options }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);

	const selectOption = (option) => {
		setSelected(option);
		setIsOpen(false);
	};

	return (
		<div className="dropdown-container">
			<button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
				<table>
					<tbody>
						<tr style={{ width: "100%" }}>
							<td>
								<img
									src={selected.icon}
									alt=""
									style={{ width: "22px", height: "22px" }}
								/>
							</td>

							<td>
								<span>{selected.title}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</button>
			{isOpen && (
				<ul className="dropdown-menu">
					{options.map((option) => {
						return (
							<li
								key={option.title}
								className="dropdown-item"
								onClick={() => selectOption(option)}
							>
								<img
									src={option.icon}
									alt=""
									style={{ width: "22px", height: "22px" }}
								/>
								<span>{option.title}</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default memo(Dropdown);
