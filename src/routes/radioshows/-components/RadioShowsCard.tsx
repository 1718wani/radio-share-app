import { Card, Image, Text } from "@mantine/core";

type props = {
  imageUrl: string;
  title: string;
  description: string;
};

export const RadioShowsCard = (props: props) => {
  const { imageUrl, title, description } = props;
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
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
  );
};
