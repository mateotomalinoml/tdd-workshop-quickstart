import React from 'react';

const DatePicker = (props) => {
  const { weeks, onDateClicked } = props;
  return (
    <table>
      <tbody>
        {weeks.map((week) => <tr className="date-picker__week">
          {week.map(
            (date) => {
              const { day, month, year } = date
              return (<td id={`date-${day}-${month}-${year}`} onClick={() => onDateClicked(date)}>{day}</td>)
            })
          }
        </tr>)}
      </tbody>
    </table>
  );
}

export default DatePicker;
