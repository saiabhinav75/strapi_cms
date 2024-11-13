import React from "react";
import { Button } from "@strapi/design-system";
import { Bell } from "@strapi/icons";
import { ComponentType } from "react";

import { getTranslation } from "../../../plugins/qb_preview/admin/src/utils/getTranslation";
// import { useCMEditViewDataManager } from '@strapi/helper-plugin';
import { unstable_useContentManagerContext } from '@strapi/strapi/admin';


import Modal from 'react';


export default function HelloWorldButton() {
  // const managerData = useCMEditViewDataManager()
  const { layout, form:modifiedData, isCreatingEntry } = unstable_useContentManagerContext();

  console.log(modifiedData);
  function handleClick(){
    alert(JSON.stringify(modifiedData))
  }
  return (
    <Button onClick={handleClick}>Preview Question</Button>
  )


    // Store the extracted ID in localStorage
   
}
