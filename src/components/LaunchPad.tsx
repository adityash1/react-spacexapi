import React from "react";
import { Card, Text, Spacer, Collapse } from "@nextui-org/react";
import { Link } from "react-router-dom";

const LaunchPad = ({ launchpads, setClickedLaunch }) => {
  const handleClick = (launchId) => {
    setClickedLaunch(launchId);
  };

  return (
    <>
      {launchpads.map((launchpad, i) => (
        <>
          <Card variant="shadow">
            <Card.Body>
              <Text b>Name :</Text>
              <Text> {launchpad.name}</Text>
              <Text b>Details :</Text>
              <Text> {launchpad.details}</Text>
              <Text b>Status :</Text>
              <Text transform="uppercase">{launchpad.status}</Text>
              <Collapse title="Launches" shadow>
                {launchpad.launches.length === 0 ? (
                  <Text>No Launch Available</Text>
                ) : (
                  launchpad.launches.slice(0, 3).map((launch) => (
                    <Text key={launch.id} onClick={() => handleClick(i)}>
                      <Link to={`/launchdetail`}>{launch}</Link>
                    </Text>
                  ))
                )}
              </Collapse>
            </Card.Body>
          </Card>
          <Card css={{ $$cardColor: "white" }} variant="flat">
            <Card.Body>
              <Spacer y={1} />
            </Card.Body>
          </Card>
        </>
      ))}
    </>
  );
};

export default LaunchPad;
