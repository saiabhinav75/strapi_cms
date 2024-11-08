// src/admin/extensions/components/HelloWorldButton/index.js

import React from "react";
import { Button, Main } from "@strapi/design-system";
import {Bell} from "@strapi/icons";
import { ComponentType } from "react";
import { getTranslation } from "../../../plugins/qb_preview/admin/src/utils/getTranslation";

function handleClick(){
  alert("Clicked")
}

export default function HelloWorldButton() {
  return (
    <Button onClick={handleClick}>Preview</Button>
  )
}


function useIntl(): { formatMessage: any; } {
  throw new Error("Function not implemented.");
}
