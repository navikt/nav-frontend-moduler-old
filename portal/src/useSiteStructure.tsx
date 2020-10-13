import { graphql, useStaticQuery } from "gatsby";

const usePages = () =>
  useStaticQuery(graphql`
    query AllSitePage {
      allSitePage(sort: { fields: context___frontmatter___rank }) {
        edges {
          node {
            context {
              frontmatter {
                title
                rank
                ingress
              }
            }
            path
          }
        }
      }
    }
  `).allSitePage.edges.map((edge) => ({
    ...(edge.node.context.frontmatter || {}),
    slug: edge.node.path.slice(1, -1),
    link: edge.node.path.slice(0, -1),
  }));

export const useBreadcrumb = (location) => {
  const pages = usePages();

  return location.pathname
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .split("/")
    .slice(0, 2)
    .map((_, i, a) => a.slice(0, i + 1).join("/"))
    .map((slug) => pages.find((page) => page.slug === slug));
};

export const useMainMenu = () =>
  usePages().filter(
    ({ rank, slug }) => rank !== null && slug.split("/").length === 1
  );

export const usePageMenu = (location) =>
  usePages().filter(
    ({ slug }) =>
      slug.split("/").length === 2 &&
      slug.split("/")[0] === location.pathname.split("/")[1]
  );

export const useNavigationPage = (location) =>
  usePages().find(
    ({ slug, link }) =>
      slug !== "" &&
      slug.split("/").length === 1 &&
      location.pathname.startsWith(link)
  );

export const useContentPage = (location) => {
  const pages = usePages();
  console.log(pages);
  const page = pages.find(
    ({ slug, link }) =>
      slug.split("/").length === 2 && location.pathname.startsWith(link)
  );

  return page
    ? {
        ...page,
        children: pages.filter(
          ({ slug }) =>
            slug.split("/").length === 3 &&
            slug.startsWith(location.pathname.split("/").slice(1, 3).join("/"))
        ),
      }
    : undefined;
};
