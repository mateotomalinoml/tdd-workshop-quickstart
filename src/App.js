import React from 'react';
import DatePicker from './components/datepicker/DatePicker'
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "2em" }}>
      Hola ! Bienvenido al workshop de TDD
     <DatePicker weeks={[[], []]} />
    </div>
  );
}

export default App;
