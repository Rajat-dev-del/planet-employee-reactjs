import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { FiChevronDown } from "react-icons/fi";

class Sports extends Component {
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
        { name: "Accounting", id: 1 },
        { name: "Biology", id: 2 },
        { name: "Business Studies", id: 3 },
        { name: "Chemistry", id: 4 },
      ],
    };
    return (
      <div className="single-cv-form education-page">
        <h4>Sports, Hobbies &amp; Interests</h4>
        <form className="cv-forms">
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>Your Sports</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">
                    Which School Sports Did You Participate in?
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Sport</option>
                      <option value="2">Sport</option>
                      <option value="3">Sport</option>
                    </select>
                  </div>
                </div>
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
            <h5>
              Junior Sports <span>(Typically U20 Level)</span>
            </h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>

          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">
                    Which School Sports Did You Participate in?
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Sport</option>
                      <option value="2">Sport</option>
                      <option value="3">Sport</option>
                    </select>
                  </div>
                </div>
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
            <h5>
              Senior Sport <span>(Open Level ofter Schooling)</span>
            </h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">
                    Which School Sports Did You Participate in?
                  </label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                </div>
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
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>Clubs, Associations &amp; Bodies</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Memberships</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Memberships</option>
                      <option value="2">Memberships</option>
                      <option value="3">Memberships</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Role &amp; Responsibilites</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Role</option>
                      <option value="2">Role</option>
                      <option value="3">Role</option>
                    </select>
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
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>Hobbies &amp; Extramural Activities</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form">
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Hobbies &amp; Extramural</label>
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
          </div>
          <fieldset className="fieldset">
            <div className="custom-file last-file">
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

export default Sports;
