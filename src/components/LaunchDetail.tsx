import { Card, Image, Text } from "@nextui-org/react";

const LaunchDetail = ({ launchpad }) => {
  return (
    <Card variant="shadow">
      <Card.Body>
        <Image
          showSkeleton
          src={launchpad.images.large[0]}
          alt={launchpad.name}
          height={400}
          width={400}
          maxDelay={10000}
          objectFit="cover"
          css={{
            borderRadius: "5%",
          }}
        />
        <Text b>Name :</Text>
        <Text>{launchpad.name}</Text>
        <Text b>Full Name :</Text>
        <Text>{launchpad.full_name}</Text>
        <Text b>Locality :</Text>
        <Text>{launchpad.locality}</Text>
        <Text b>Region :</Text>
        <Text>{launchpad.region}</Text>
        <Text b>Latitude :</Text>
        <Text>{launchpad.latitude}</Text>
        <Text b>Longitude :</Text>
        <Text>{launchpad.longitude}</Text>
        <Text b>Status :</Text>
        <Text transform="uppercase">{launchpad.status}</Text>
        <Text b>TimeZones :</Text>
        <Text>{launchpad.timezone}</Text>
        <Text b>Details :</Text>
        <Text> {launchpad.details}</Text>
      </Card.Body>
    </Card>
  );
};

export default LaunchDetail;
