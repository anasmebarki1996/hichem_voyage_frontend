import React from "react";

import Index from "screens";
import { Provider } from "react-redux";
import store from "store";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
