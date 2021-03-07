import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { FiChevronDown } from "react-icons/fi";

class Employment extends Component {
  accordian = () => {
    var acc = document.getElementsByClassName("primary-schooling");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };
  render() {
    this.state = {
      options: [
        { name: "Administration", id: 1 },
        { name: "Board Level", id: 2 },
        { name: "CEO", id: 3 },
      ],
      options2: [
        { name: "Ambitious", id: 1 },
        { name: "Appreciation", id: 2 },
        { name: "Excellent", id: 3 },
        { name: "Self Motivated", id: 4 },
      ],
      options3: [
        { name: "Administration", id: 1 },
        { name: "Board Level", id: 2 },
        { name: "CEO", id: 3 },
      ],
    };
    return (
      <div className="single-cv-form education-page">
        <h4>Employment &amp; Experience</h4>
        <form className="cv-forms">
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>Conscription Service</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box radio-field margin-right ">
                  <label className="label">
                    Have You Been Conscripted for Any Form of Government / State
                    or Military Service?
                  </label>
                  <div className="d-flex inside-div">
                    <div class="custom-control custom-radio radio-btn margin-right right-margin">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="serviceYes"
                        name="example1"
                        value="gendermale"
                      />
                      <label class="custom-control-label" for="serviceYes">
                        Male
                      </label>
                    </div>
                    <div class="custom-control custom-radio radio-btn left-margin">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="genderfemale"
                        name="example1"
                        value="genderfemale"
                      />
                      <label class="custom-control-label" for="genderfemale">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Conscription Service</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Conscription Service</option>
                      <option value="2">Service</option>
                      <option value="3">Service</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-left">
                  <label className="label">
                    What Was the Highest Team You Played In?
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Year</option>
                      <option value="2">Year</option>
                      <option value="3">Year</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left Opacity">
                  <label className="label">My Date Of Birth</label>
                  <div class="radio-toolbar">
                    <div className="radio-typebtn">
                      <input type="radio" id="xyz" name="own" value="own" />
                      <label for="own">own</label>
                    </div>

                    <div className="radio-typebtn margin-left margin-right">
                      <input type="radio" id="qwe" name="Lease" value="Lease" />
                      <label for="Lease">Lease</label>
                    </div>

                    <div className="radio-typebtn ">
                      <input type="radio" id="zxc" name="Rent" value="Rent" />
                      <label for="Rent">Rent</label>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" for="customFile">
                + Add More
              </label>
            </div>
          </fieldset>

          <div className="primary-schooling secondary-schooling" onClick={this.accordian}>
            <h5>Your Current Employment</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>

          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Started Month &amp; Year</label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Worked Till Month &amp; Year</label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Industry</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Industry</option>
                      <option value="2">Industry</option>
                      <option value="3">Industry</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Job Category</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Industry</option>
                      <option value="2">Industry</option>
                      <option value="3">Industry</option>
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
                <label className="label">What Makro Skill Level</label>
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
                  <label className="label">Position Held</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Position</option>
                      <option value="2">Position</option>
                      <option value="3">Position</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Country</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">State &amp; Town</label>
                  <div className="d-flex inside-div">
                    <div className="select-field flex-fill margin-right right-margin">
                      <select>
                        <option value="1">Select State</option>
                        <option value="2"> State</option>
                        <option value="3"> State</option>
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
                <div className="select-box margin-left">
                  <label className="label">
                    How Many Years Service Do You Have
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box ">
                  <label className="label">Region of Responsibility</label>
                  <div className="text-box flex-fill">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box  margin-right">
                  <label className="label">OTE (On Traget Earnings)</label>
                  <div className="d-flex inside-div">
                    <div className="text-box flex-fill margin-right w-50 right-margin">
                      <input type="text" />
                    </div>
                    <div className="select-field flex-fill w-50 left-margin">
                      <select>
                        <option value="1">Select Hundred</option>
                        <option value="2">100</option>
                        <option value="3">100</option>
                      </select>
                      <span className="per-year">Per Year</span>
                    </div>
                  </div>
                </div>
                <div className="select-box  margin-left">
                  <label className="label">Annual Remuneration</label>
                  <div className="d-flex inside-div">
                    <div className="text-box flex-fill margin-right w-50 right-margin">
                      <input type="text" />
                    </div>
                    <div className="select-field flex-fill w-50 left-margin">
                      <select>
                        <option value="1">Select Hundred</option>
                        <option value="2">100</option>
                        <option value="3">100</option>
                      </select>
                      <span className="per-year">Per Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Abilities</label>
                <div className="multiselect-box">
                  <Multiselect
                    options={this.state.options2} // Options to display in the dropdown
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
          </div>
          <fieldset className="fieldset">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" for="customFile">
                + Add More
              </label>
            </div>
          </fieldset>
          <div className="primary-schooling graduate" onClick={this.accordian}>
            <h5>Courses &amp; Diplomas</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Started Month &amp; Year</label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Worked Till Month &amp; Year</label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Industry</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Industry</option>
                      <option value="2"> Industry</option>
                      <option value="3"> Industry</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Job Category</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Industry</option>
                      <option value="2">Industry</option>
                      <option value="3">Industry</option>
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
                <label className="label">What Makro Skill Level</label>
                <div className="multiselect-box">
                  <Multiselect
                    options={this.state.options3} // Options to display in the dropdown
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
                  <label className="label">Position Held</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Position</option>
                      <option value="2"> Position</option>
                      <option value="3"> Position</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Country</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2"> Country</option>
                      <option value="3"> Country</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">State &amp; Town</label>
                  <div className="d-flex">
                    <div className="select-field flex-fill margin-right right-margin">
                      <select>
                        <option value="1">Select State</option>
                        <option value="2"> State</option>
                        <option value="3"> State</option>
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
                <div className="select-box margin-left">
                  <label className="label">
                    How Many Years Service Do You Have
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">mm/yyyy</option>
                      <option value="2">mm/yyyy</option>
                      <option value="3">mm/yyyy</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box ">
                  <label className="label">Region of Responsibility</label>
                  <div className="text-box flex-fill">
                    <input type="text" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box  margin-right">
                  <label className="label">OTE (On Traget Earnings)</label>
                  <div className="d-flex inside-div">
                    <div className="text-box flex-fill margin-right w-50 right-margin">
                      <input type="text" />
                    </div>
                    <div className="select-field flex-fill w-50 left-margin">
                      <select>
                        <option value="1">Select Hundred</option>
                        <option value="2">100</option>
                        <option value="3">100</option>
                      </select>
                      <span className="per-year">Per Year</span>
                    </div>
                  </div>
                </div>
                <div className="select-box  margin-left">
                  <label className="label">Annual Remuneration</label>
                  <div className="d-flex inside-div">
                    <div className="text-box flex-fill margin-right w-50 right-margin">
                      <input type="text" />
                    </div>
                    <div className="select-field flex-fill w-50 left-margin">
                      <select>
                        <option value="1">Select Hundred</option>
                        <option value="2">100</option>
                        <option value="3">100</option>
                      </select>
                      <span className="per-year">Per Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Abilities</label>
                <div className="multiselect-box">
                  <Multiselect
                    options={this.state.options2} // Options to display in the dropdown
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
          </div>
          <fieldset className="fieldset">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" for="customFile">
                + Add More
              </label>
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

export default Employment;
