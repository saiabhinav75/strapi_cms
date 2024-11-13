import React from "react";
import { Button } from "@strapi/design-system";
import { Bell } from "@strapi/icons";
import { ComponentType } from "react";

export default function HelloWorldButton() {
  const handleClick = () => {
    // Get the current URL from the browser's address bar
    const url = window.location.href;

    // Use URL API to extract the ID
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split('/');
    const id = pathSegments[pathSegments.length - 1]; // Get the last segment

    // Store the extracted ID in localStorage
    localStorage.setItem('questionId', id);
console.log(url)
    // Navigate to the preview page directly
    window.location.href = "http://localhost:1337/admin/plugins/qb_preview"; // Direct navigation
  };

  return (
    <>
      <Button onClick={handleClick}>preview</Button>
      <a onClick={handleClick} href="http://localhost:1337/admin/plugins/qb_preview">link to preview</a>
    </>
  );
}
