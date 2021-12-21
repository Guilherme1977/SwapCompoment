import React from "react";
import { storiesOf } from "@storybook/react";

import { App } from "../App";

const stories = storiesOf("Test App", module);

stories.add("First story", () => {
  return <App />;
});
