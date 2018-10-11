import React from 'react';

const MsgDate = ({ date }) => {
  const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const d = new Date(date);
  const mo = month[d.getMonth()];
  let day = d.getDate();

  if (day.length === 1) {
    day = `0${day}`;
  }

  const yr = d.getFullYear();
  return (
    <div className="ml-2 mr-2">
      <div className="day">{day}</div>
      <div>{mo}</div>
      <div>{yr}</div>
    </div>
  );
};
export default MsgDate;
