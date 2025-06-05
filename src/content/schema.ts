import { z } from "astro/zod";
import { notionPageSchema, propertySchema, transformedPropertySchema } from "notion-astro-loader/schemas";

const PropRelationShema = z.object({
  relation: z.array(z.object({ id: z.string() }))
});

export const PageSchema = notionPageSchema({
  properties: z.object({
    Name: transformedPropertySchema.title,
    Created: propertySchema.created_time.optional(),
    Series: PropRelationShema
  })
})
  .transform((data) => {
    return {
      ...data,
      title: data.properties.Name,
      slug: data.url.split("/").pop(),
      series: data.properties.Series?.relation.map(({ id }) => id) ?? [],
    };
  });
