// src/admin/extensions/components/HelloWorldButton/index.js

import React from "react";
import { Button } from "@strapi/design-system";
import {Bell} from "@strapi/icons";

const HelloWorldButton = () => {
  return (
    <Button
      variant="secondary"
      startIcon={<Bell />}
      onClick={() => alert("Hello World")}
    >
      Hello World
    </Button>
  );
};

export default HelloWorldButton as React.ComponentType;