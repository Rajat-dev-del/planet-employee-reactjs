import React from "react";

function Personality(Props) {
  return (
    <div className="single-cv-form">
      <h4>Personality</h4>
      <div className="personality-traits">
        <h5>Personality Traits</h5>
        <div className="personality-content">
          <p>
            Have original minds and great drive for implementing their ideas and
            achieving their goals. Quickly see patterns in external events and
            develop long-range explanatory perspectives. When committed,
            organize a job and carry it through. Skeptical and independent, have
            high standards of competence and performance - for themselves and
            others.
          </p>
        </div>
      </div>
      <form className="cv-forms">
        <fieldset className="fieldset">
          <div className="custom-file last-file">
            <input type="file" className="custom-file-input" id="customFile" />
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
export default Personality;
