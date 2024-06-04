import PropTypes from "prop-types";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex flex-wrap gap-4 justify-center mt-4">
			<div className="form-control flex items-center">
				<label className={`label cursor-pointer ${selectedGender === "male" ? "font-semibold text-green-500" : ""}`}>
					<input
						type="checkbox"
						className="checkbox border-slate-900 mr-2"
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className="label-text">Male</span>
				</label>
			</div>
			<div className="form-control flex items-center">
				<label className={`label cursor-pointer ${selectedGender === "female" ? "font-semibold text-green-500" : ""}`}>
					<input
						type="checkbox"
						className="checkbox border-slate-900 mr-2"
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
					<span className="label-text">Female</span>
				</label>
			</div>
		</div>
	);
};

GenderCheckbox.propTypes = {
	onCheckboxChange: PropTypes.func.isRequired,
	selectedGender: PropTypes.string.isRequired,
};

export default GenderCheckbox;
