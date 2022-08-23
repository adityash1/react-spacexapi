import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Container, Text } from "@nextui-org/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LaunchPad from "./components/LaunchPad";
import LaunchDetail from "./components/LaunchDetail";

const App = () => {
  const [launchpads, setLaunchpads] = useState([]);
  const [clickedLaunch, setClickedLaunch] = useState(null);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launchpads").then((response) => {
      console.log("promise fulfilled");
      setLaunchpads(response.data);
    });
  }, []);

  const handleClick = (id) => {
    setClickedLaunch(id);
  };

  return (
    <div>
      <NextUIProvider>
        <Container fluid>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            SpaceX Launchpads
          </Text>
          <Routes>
            <Route
              path="/"
              element={
                <LaunchPad
                  launchpads={launchpads}
                  setClickedLaunch={handleClick}
                />
              }
            />
            <Route
              path="/launchdetail"
              element={<LaunchDetail launchpad={launchpads[clickedLaunch]} />}
            />
          </Routes>
        </Container>
      </NextUIProvider>
    </div>
  );
};

export default App;
