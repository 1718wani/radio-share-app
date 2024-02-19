import { Card, Image, Text } from "@mantine/core";
import { Link } from "@tanstack/react-router";

type props = {
  imageUrl: string;
  title: string;
  description: string;
};

export const RadioShowsCard = (props: props) => {
  const { imageUrl, title, description } = props;


  return (
    <Link  to="/$radioshowId" params={{ radioshowId: "1" }} >
      <Card shadow="sm" padding="xl" component="a" withBorder>
        <Card.Section>
          <Image src={imageUrl} h={160} />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          {title}
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          {description}
        </Text>
      </Card>
    </Link>
  );
};
