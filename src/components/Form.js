import React from 'react';

const Form = (props) => {
  const { options, value, handleFilter } = props;
  return(
    <form>
      <div className="form-group row">
        <label className="col-md-6 col-form-label" htmlFor="Filter">Filter Pokemon By Type</label>
        <div className="col-md-6">
          <select
            onChange={e => handleFilter(e.target.value)}
            value={value}
            className="form-control"
          >
            {
              options.length > 0 && (
                options.map((option,index) => {
                  return(
                    <option key={index} value={option.name}>{option.name}</option>
                  )
                })
              )
            }
        </select>
        </div>
      </div>
    </form>
  )
}

export default Form;