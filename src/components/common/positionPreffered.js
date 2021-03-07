import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";

class PositionPreffered extends Component {
  render() {
    this.state = {
      options: [{ name: 'Ui Design', id: 1 }, { name: 'Web Design', id: 2 }]
  };
    return (
      <div className="single-cv-form">
        <h4>Position Preffered</h4>

        <form className="cv-forms">
          <fieldset className="fieldset">
            <div className="field">
              <div className="select-box margin-right">
                <label className="label">The Industry</label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Industry</option>
                    <option value="2">Select Industry1</option>
                    <option value="3">Select Industry2</option>
                  </select>
                </div>
              </div>
              <div className="select-box margin-left">
                <label className="label">Job Category </label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Industry</option>
                    <option value="2">Select Industry1</option>
                    <option value="3">Select Industry2</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="textarea-box">
              <label className="label">Job Description</label>
              <textarea></textarea>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="multiselect-box">
              <label className="label">What Macro Skill Level</label>
              <div className="multiselect-box">
              <Multiselect
                  options={this.state.options} // Options to display in the dropdown
                  selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  onSelect={this.onSelect} // Function will trigger on select event
                  onRemove={this.onRemove} // Function will trigger on remove event
                  displayValue="name" // Property name to display in the dropdown options
                  closeIcon="cancel"
                  placeholder=""
                  />
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="field">
              <div className="select-box margin-right">
                <label className="label">
                  How Many Years Experience Do You Have
                </label>
                <div className="select-field">
                  <select>
                    <option value="1">mm/yyyy</option>
                    <option value="2">mm/yyyy</option>
                    <option value="3">mm/yyyy</option>
                  </select>
                </div>
              </div>
              <div className="select-box margin-left">
                <label className="label">What Position</label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Position</option>
                    <option value="2">Select Position</option>
                    <option value="3">Select Position</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="field">
              <div className="select-box margin-right">
                <label className="label">Any Country Specifically?</label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Country</option>
                    <option value="2">India</option>
                    <option value="3">England</option>
                  </select>
                </div>
              </div>
              <div className="select-box margin-left ">
                <label className="label">Any Town Preference?</label>
                <div className="d-flex inside-div">
                  <div className="select-field flex-fill margin-right right-margin">
                    <select>
                      <option value="1">Select Position</option>
                      <option value="2">Select Position</option>
                      <option value="3">Select Position</option>
                    </select>
                  </div>
                  <div className="select-field flex-fill left-margin">
                    <select>
                      <option value="1">Select Position</option>
                      <option value="2">Select Position</option>
                      <option value="3">Select Position</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="field">
              <div className="select-box  margin-right">
                <label className="label">
                  What Would Your Cost to Company Be?
                </label>
                <div className="d-flex inside-div">
                  <div className="text-box flex-fill margin-right w-50 right-margin full-width">
                    <input type="text" />
                  </div>
                  <div className="select-field flex-fill w-50 left-margin full-width">
                    <select>
                      <option value="1">Select Hundred</option>
                      <option value="2">100</option>
                      <option value="3">100</option>
                    </select>
                    <span className="per-year">Per Year</span>
                  </div>
                </div>
              </div>
              <div className="select-box margin-left ">
                <label className="label">Which Currency?</label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Country</option>
                    <option value="2">India</option>
                    <option value="3">England</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <div className="field">
              <div className="select-box margin-right">
                <label className="label">What Work Type?</label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Work Type</option>
                    <option value="2">Select Work Type</option>
                    <option value="3">Select Work Type</option>
                  </select>
                </div>
              </div>
              <div className="select-box margin-left">
                <label className="label">What Is Your Availability? </label>
                <div className="select-field">
                  <select>
                    <option value="1">Select Availability</option>
                    <option value="2">Select Industry1</option>
                    <option value="3">Select Industry2</option>
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="fieldset">
            <input class="save-btn" type="submit" value="Save &amp; Next" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default PositionPreffered;
