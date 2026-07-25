import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Editorial metadata carried over from the Docusaurus site. Not rendered,
        // but kept so authors can keep tracking how finished a page is.
        status: z.enum(["draft", "stable"]).optional(),
      }),
    }),
  }),
};
