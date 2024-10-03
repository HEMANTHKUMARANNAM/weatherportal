import React from 'react';

const WeatherHeader = () => {
  return (
    <div className="d-flex justify-content-between">
      <h1 className="text-light">weatherio</h1>
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search city"
          aria-label="Search city"
        />
        <button className="btn btn-primary" type="button">
          Current Location
        </button>
      </div>
    </div>
  );
};

export default WeatherHeader;
