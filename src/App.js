import React from 'react';


function App() {

const [value, setState] = React.useState(0)

function minus (){
  return setState(prev => prev-1 )
}
function add (){
  return setState(prev => prev+1 )
}
  return (
    <div className="App">
      <div className="App--operator" onClick={minus}>
-
      </div>
      <div className="App--value">
{value}
      </div>
      <div className="App--operator" onClick={add}>
+
</div>
    </div>
  );
}

export default App;
