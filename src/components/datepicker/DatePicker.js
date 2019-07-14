import React from 'react';

const DatePicker = (props) => {
  const { weeks } = props;
  return (
    <table>
      <tbody>
        {
          weeks.map(() => <tr className="date-picker__week"></tr>)
        }
      </tbody>
    </table>
  );
}

export default DatePicker;
