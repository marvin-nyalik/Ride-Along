import { Tabs } from "expo-router";

const SettingsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }}></Tabs.Screen>
      <Tabs.Screen name="bottles" options={{ title: "Bottles" }}></Tabs.Screen>
    </Tabs>
  );
};

export default SettingsLayout;
