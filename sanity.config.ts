import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "9pkogndn",
  dataset: "production",
  title: "My personal blog",
  basePath: "/admin",
  apiVersion: "2023-03-04",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
