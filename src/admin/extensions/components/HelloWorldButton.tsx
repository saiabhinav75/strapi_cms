// src/admin/extensions/components/HelloWorldButton/index.js

import React from "react";
import { Button, Main } from "@strapi/design-system";
import {Bell} from "@strapi/icons";
import { ComponentType } from "react";
import { getTranslation } from "../../../plugins/qb_preview/admin/src/utils/getTranslation";
// import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import Modal from 'react';


export default function HelloWorldButton() {
  // const managerData = useCMEditViewDataManager()
  function handleClick(){
    alert("managerData")
  }
  return (
    <Button onClick={handleClick}>Preview</Button>
  )
}


function useIntl(): { formatMessage: any; } {
  throw new Error("Function not implemented.");
}
