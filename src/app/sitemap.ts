import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";

const siteUrl = "https://www.charelizng.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/projects", "/team", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
