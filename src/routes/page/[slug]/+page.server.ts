export const prerender = true;
export const trailingSlash = "always";

// generate 1000 random pages
const pages = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Page ${i + 1}`,
}));

export const load = async ({ params }) => {
  // find the page of the slug
  const page = pages.find((p) => p.id.toString() === params.slug);

  return {
    page,
    pages,
  };
};
