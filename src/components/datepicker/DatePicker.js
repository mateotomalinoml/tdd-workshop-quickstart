import React from 'react';

const DatePicker = (props) => {
  const { weeks } = props;
  return (
    <table>
      <tbody>
        {weeks.map((week) => <tr className="date-picker__week">
          {week.map(({ day, month, year }) => <td id={`date-${day}-${month}-${year}`}>{day}</td>)}
        </tr>)}
      </tbody>
    </table>
  );
}

export default DatePicker;
