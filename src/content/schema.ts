import { z } from "astro/zod";
import { notionPageSchema, propertySchema, transformedPropertySchema } from "notion-astro-loader/schemas";

const RelationSchema = z
  .object({
    relation: z.array(z.object({ id: z.string() }))
  })
  .transform((data) => ({
    relation: data.relation.map((item) => item.id)
  }));

export const PageSchema = notionPageSchema({
  properties: z.object({
    Name: transformedPropertySchema.title,
    Created: propertySchema.created_time.optional(),
    Series: RelationSchema,
    Section: transformedPropertySchema.select,
    Status: transformedPropertySchema.status,
    Weight: transformedPropertySchema.number,
    "Publish Date": transformedPropertySchema.date,
    URL: transformedPropertySchema.url,
    "URL Database Links": RelationSchema,
    Type: transformedPropertySchema.select,
    Tags: transformedPropertySchema.multi_select,
    Excerpt: transformedPropertySchema.rich_text,
    "Glossary Links": RelationSchema,
    "Snippet Package": RelationSchema
  })
}).transform((data) => {
  return {
    icon: data.icon,
    cover: data.cover,
    archived: data.archived,
    inTrash: data.in_trash,
    url: data.url,
    publicUrl: data.public_url,
    name: data.properties.Name,
    created: data.properties.Created,
    series: data.properties.Series,
    section: data.properties.Section,
    status: data.properties.Status,
    weight: data.properties.Weight,
    publishData: data.properties["Publish Date"],
    urlDatabaseLinks: data.properties["URL Database Links"],
    type: data.properties.Type,
    tags: data.properties.Tags,
    excerpt: data.properties.Excerpt,
    glossaryLinks: data.properties["Glossary Links"],
    snippetPackage: data.properties["Snippet Package"],
    slug: data.url.split("/").pop()
  };
});

export const SeriesSchema = notionPageSchema({
  properties: z.object({
    Name: transformedPropertySchema.title,
    Excerpt: transformedPropertySchema.rich_text,
    "Content Links": RelationSchema
  })
}).transform((data) => ({
  name: data.properties.Name,
  excerpt: data.properties.Excerpt,
  contentLinks: data.properties["Content Links"]
}));

// export const TagsSchema = notionPageSchema({
//   properties: z.object({
//     Name: transformedPropertySchema.title,
//     Excerpt: transformedPropertySchema.rich_text,
//     "Content Links": RelationSchema
//   })
// }).transform((data) => ({
//   name: data.properties.Name,
//   excerpt: data.properties.Excerpt,
//   contentLinks: data.properties["Content Links"]
// }));
