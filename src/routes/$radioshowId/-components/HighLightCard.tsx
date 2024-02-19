import { Card, Text, Badge, Group, Accordion } from "@mantine/core";

export const HighLightCard = () => {
  return (
    <>
      <Card withBorder padding="lg" radius="md" mx={"sm"}>
        <Group justify="space-between">
          <Badge>12 days left</Badge>
        </Group>

        <Text fz="lg" fw={500} mt="md">
          5.3 minor release (September 2022)
        </Text>
        <Accordion>
          <Accordion.Item value="test">
            <Accordion.Control>説明</Accordion.Control>
            <Accordion.Panel>
              <Text fz="sm" c="dimmed" mt={5}>
                Form context management, Switch, Grid and Indicator components
                improvements, new hook and 10+ other changes
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>

        <Text c="dimmed" fz="sm" mt="md">
          Tasks completed:{" "}
          <Text span fw={500} c="bright">
            23/36
          </Text>
        </Text>
      </Card>
    </>
  );
};
