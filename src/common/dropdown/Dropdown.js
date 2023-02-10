import { memo, useState } from "react";

const Dropdown = ({ selected, setSelected, placeholder, options }) => {
	const [isOpen, setIsOpen] = useState(false);

	const selectOption = (option) => {
		setSelected(option);
		localStorage.setItem("selectedFilter", JSON.stringify(option));
		setIsOpen(false);
	};

	return (
		<div className="dropdown-container">
			<button
				className="dropdown-toggle"
				data-testid="stack-dropdown"
				onClick={() => setIsOpen(!isOpen)}
			>
				<table>
					<tbody>
						{selected ? (
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
						) : (
							<tr>
								<td>{placeholder}</td>
							</tr>
						)}
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
								data-testid={option.testId}
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
