import "../global.css";
import { Slot, Stack } from "expo-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const apiUrl = process.env.EXPO_PUBLIC_CONVEX_URL;
console.log({ apiUrl });
const convex = new ConvexReactClient(apiUrl);

export default function Layout() {
  return <ConvexProvider client={convex}>
    <Slot />
  </ConvexProvider>;
}
