import React, { useState, useEffect } from "react";

const baseUrl = "https://api.brawlapi.com/v1/brawlers";

export const GetRequest = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error.message));
};
