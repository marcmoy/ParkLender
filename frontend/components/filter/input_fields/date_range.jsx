import React from 'react';
import { DateField } from 'react-date-picker';

class DateRange extends React.Component {

  render() {
    return (
      <div>
        <DateField dateFormat="MM-DD-YYYY" />
      </div>
    );
  }
}

export default DateRange;
