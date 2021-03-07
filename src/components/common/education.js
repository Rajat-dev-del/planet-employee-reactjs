import React, { Component } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { FiChevronDown } from "react-icons/fi";

class Education extends Component {
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
        <h4>Education &amp; Qualification</h4>
        <form className="cv-forms">
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>
              Your Primary Schooling
              <span>(typically pre-junior school upto age of 6yrs)</span>
            </h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Which Country?</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">What Year Did You Left?</label>
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
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box ">
                  <label className="label">School</label>
                  <div className="text-box flex-fill">
                    <input type="text" placeholder="Your School Name" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Subject</label>
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
            <h5>Your Senior / Secondry Schooling</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Which Country?</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Graduating Year (Left)</label>
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
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box ">
                  <label className="label">School</label>
                  <div className="text-box flex-fill">
                    <input type="text" placeholder="Your School Name" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Subject Taken</label>
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
            <fieldset className="fieldset radio-bar-education">
              <div className="field">
                <div className="select-box">
                  <label className="label">Grade Level (Achieved)</label>
                  <div class="radio-bar ">
                    <input
                      type="radio"
                      id="A"
                      name="Grade"
                      value="(A): 80% - 100%"
                    />
                    <label for="A" className="margin-right">
                      (A): 80% - 100%
                    </label>

                    <input
                      type="radio"
                      id="B"
                      name="Grade"
                      value="(B): 70% - 79%"
                      checked
                    />
                    <label for="B" className="margin-right">
                      (B): 70% - 79%
                    </label>

                    <input
                      type="radio"
                      id="C"
                      name="Grade"
                      value="(C): 60% - 69%"
                    />
                    <label for="C" className="margin-right">
                      (C): 60% - 69%
                    </label>

                    <input
                      type="radio"
                      id="D"
                      name="Grade"
                      value="(D): 50% - 59%"
                    />
                    <label for="D" className="margin-right">
                      (D): 50% - 59%
                    </label>

                    <input
                      type="radio"
                      id="E"
                      name="Grade"
                      value="(E): 40% - 49%"
                    />
                    <label for="E" className="margin-right">
                      (E): 40% - 49%
                    </label>

                    <input
                      type="radio"
                      id="F"
                      name="Grade"
                      value="(F): 35% - 39%"
                    />
                    <label for="F" className="margin-right">
                      (F): 35% - 39%
                    </label>
                    <input
                      type="radio"
                      id="FF"
                      name="Grade"
                      value="(FF): 30% - 34%"
                    />
                    <label for="FF" className="margin-right">
                      (FF): 30% - 34%
                    </label>
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
            <h5>Graduate Education</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form secondary-schooling-form">
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box margin-right">
                  <label className="label">Which Country?</label>
                  <div className="select-field">
                    <select>
                      <option value="1">Select Country</option>
                      <option value="2">Country</option>
                      <option value="3">Country</option>
                    </select>
                  </div>
                </div>
                <div className="select-box margin-left">
                  <label className="label">Year Entering University</label>
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
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box ">
                  <label className="label">Institution</label>
                  <div className="text-box flex-fill">
                    <input type="text" placeholder="Your Institution" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Subject Taken</label>
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
            <fieldset className="fieldset radio-bar-education">
              <div className="field">
                <div className="select-box">
                  <label className="label">Grade Level (Achieved)</label>
                  <div class="radio-bar ">
                    <input
                      type="radio"
                      id="Undergraduate"
                      name="GradeLevel"
                      value="Undergraduate"
                    />
                    <label for="Undergraduate" className="margin-right">
                      Undergraduate
                    </label>

                    <input
                      type="radio"
                      id="Postgraduate"
                      name="GradeLevel"
                      value="Postgraduate"
                      checked
                    />
                    <label for="Postgraduate" className="margin-right">
                      Postgraduate
                    </label>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" for="customFile">
                        +
                      </label>
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
          <div className="primary-schooling" onClick={this.accordian}>
            <h5>Course / Diploma</h5>
            <span className="chevron">
              <FiChevronDown />
            </span>
          </div>
          <div className="primary-schooling-form" >
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box">
                  <label className="label">Course / Diploma Name</label>
                  <div className="text-box flex-fill">
                    <input
                      type="text"
                      placeholder="Type Name of Diploam/Course"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="field">
                <div className="select-box">
                  <label className="label">Institution</label>
                  <div className="text-box flex-fill">
                    <input type="text" placeholder="Your Institution" />
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset">
              <div className="multiselect-box">
                <label className="label">Subject Taken</label>
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

export default Education;
