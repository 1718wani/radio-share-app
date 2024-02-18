
import { Tabs } from "@mantine/core";
import { RadioShowsList } from "./RadioShowsList";

export const RadioShowsPageComponent = () => {
  return (
    <>
      <Tabs defaultValue="radioshows">
        <Tabs.List>
          <Tabs.Tab value="radioshows">一覧</Tabs.Tab>
          <Tabs.Tab value="favorites">お気に入り</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="radioshows">
          <RadioShowsList />
        </Tabs.Panel>
        <Tabs.Panel value="favorites">Messages tab content</Tabs.Panel>
      </Tabs>
    </>
  );
};
