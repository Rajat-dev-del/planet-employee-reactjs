import React from "react";

function FamilyDetails(Props) {
  return (
    <div className="single-cv-form">
      <h4>Family Details</h4>

      <form className="cv-forms">
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Father’s Name</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Mother’s Name</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">My Date Of Birth</label>
              <div className="select-field">
                <select>
                  <option value="1">dd/mm/yyyy</option>
                  <option value="2">dd/mm/yyyy</option>
                  <option value="3">dd/mm/yyyy</option>
                </select>
              </div>
            </div>
            <div className="select-box radio-field margin-left">
              <label className="label">Gender</label>
              <div className="d-flex inside-div">
                <div class="custom-control custom-radio radio-btn margin-right right-margin">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="gendermale"
                    name="example1"
                    value="gendermale"
                  />
                  <label class="custom-control-label" for="gendermale">
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
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Country of Birth</label>
              <div className="select-field">
                <select>
                  <option value="1">Select Country</option>
                  <option value="2">India</option>
                  <option value="3">England</option>
                </select>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">State &amp; Town of Birth</label>
              <div className="d-flex inside-div">
                <div className="select-field flex-fill margin-right right-margin">
                  <select>
                    <option value="1">Select State</option>
                    <option value="2">State</option>
                    <option value="3">State</option>
                  </select>
                </div>
                <div className="select-field flex-fill left-margin">
                  <select>
                    <option value="1">Select City</option>
                    <option value="2">City</option>
                    <option value="3">City</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Age</label>
              <div className="select-field">
                <select>
                  <option value="1">mm/yyyy</option>
                  <option value="2">mm/yyyy</option>
                  <option value="3">mm/yyyy</option>
                </select>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Nationality </label>
              <div className="select-field">
                <select>
                  <option value="1">Select Country</option>
                  <option value="2">Select Country</option>
                  <option value="3">Select Country</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Passport Held / Nationality</label>
              <div className="select-field">
                <select>
                  <option value="1">Select Country</option>
                  <option value="2">Select Country</option>
                  <option value="3">Select Country</option>
                </select>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Country of Residence </label>
              <div className="select-field">
                <select>
                  <option value="1">Select Country</option>
                  <option value="2">Select Country</option>
                  <option value="3">Select Country</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box  margin-right">
              <label className="label">Town of Residence</label>
              <div className="d-flex inside-div">
                <div className="select-field flex-fill w-50 margin-right right-margin full-width">
                  <select>
                    <option value="1">Select State</option>
                    <option value="2">State</option>
                    <option value="3">State</option>
                  </select>
                </div>
                <div className="select-field flex-fill w-50 left-margin full-width">
                  <select>
                    <option value="1">Select City</option>
                    <option value="2">City</option>
                    <option value="3">City</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Home Language</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Second Language</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Marital Status</label>
              <div className="select-field">
                <select>
                  <option value="1">Select Marital Status</option>
                  <option value="2">Marital Status</option>
                  <option value="3">Marital Status</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Name</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">No. of Children</label>
              <div className="text-box flex-fill">
                <input type="text" />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box radio-field margin-right">
              <label className="label">Are You Prepared to Relocate</label>
              <div className="d-flex inside-div">
                <div class="custom-control custom-radio radio-btn margin-right right-margin">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="relocateyes"
                    name="example1"
                    value="customEx"
                  />
                  <label class="custom-control-label" for="relocateyes">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-radio radio-btn left-margin">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="relocateno"
                    name="example1"
                    value="customEx"
                  />
                  <label class="custom-control-label" for="relocateno">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Type of Accommodation</label>
              <div class="radio-bar">
                <input type="radio" id="own" name="accommodation" value="own" />
                <label for="own">own</label>

                <input type="radio" id="Lease" name="accommodation" value="Lease" />
                <label for="Lease" className="margin-right margin-left left-margin right-margin mr">Lease</label>

                <input
                  type="radio"
                  id="Rent"
                  name="accommodation"
                  value="Rent"
                  checked
                />
                <label for="Rent">Rent</label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">No of Years </label>
              <div className="select-field">
                <select>
                  <option value="1">0</option>
                  <option value="2">1</option>
                  <option value="3">2</option>
                </select>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Medical Aid</label>
              <div class="radio-bar ">
                <input type="radio" id="Good" name="medical" value="Good" />
                <label for="Good">Good</label>

                <input
                  type="radio"
                  id="Fair"
                  name="medical"
                  value="Fair"
                  checked
                />
                <label for="Fair" className="margin-right margin-left left-margin right-margin mr">Fair</label>

                <input type="radio" id="Poor" name="medical" value="Poor" />
                <label for="Poor">Poor</label>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box margin-right">
              <label className="label">Vision</label>
              <div className="select-field">
                <select>
                  <option value="1">No Spectacles</option>
                  <option value="2">Spectacles</option>
                  <option value="3">Spectacles</option>
                </select>
              </div>
            </div>
            <div className="select-box margin-left">
              <label className="label">Your Transport Licences </label>
              <div className="select-field">
                <select>
                  <option value="1">Select Licences</option>
                  <option value="2">Licences</option>
                  <option value="3">Licences</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldset">
          <div className="field">
            <div className="select-box radio-field margin-right">
              <label className="label">Do You Own a Vehicle</label>
              <div className="d-flex inside-div">
                <div class="custom-control custom-radio radio-btn margin-right right-margin">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="Vehicleyes"
                    name="example1"
                    value="customEx"
                  />
                  <label class="custom-control-label" for="Vehicleyes">
                    Yes
                  </label>
                </div>
                <div class="custom-control custom-radio radio-btn left-margin">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="Vehicleno"
                    name="example1"
                    value="customEx"
                  />
                  <label class="custom-control-label" for="Vehicleno">
                    No
                  </label>
                </div>
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
        <fieldset className="fieldset">
          <input class="save-btn" type="submit" value="Save &amp; Next" />
        </fieldset>
      </form>
    </div>
  );
}

export default FamilyDetails;
