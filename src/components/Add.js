import React from 'react';

const Messages = ({
  handleChange,
  handleSubmit,
  name,
  txt,
  goBack,
}) => (
  <div>
    <hr />
    <div className="add-wrapper">
      <form onSubmit={handleSubmit} className="mt-5 mb-5">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" value={name} onChange={handleChange} className="form-control" id="name" required/>
        </div>
        <div className="form-group">
          <label htmlFor="txt">Message:</label>
          <textarea name="txt" value={txt} onChange={handleChange} className="form-control" rows="8" id="txt" required/>
        </div>
        <div className="d-flex flex-row-reverse">
          <button type="submit" className="btn btn-info">Submit</button>
          <button type="button" className="btn btn-basic mr-2" onClick={event => goBack(event)} >Cancel</button>
        </div>
      </form>
    </div>
  </div>
);
export default Messages;
