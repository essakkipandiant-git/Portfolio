import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

const title = "Thevar Essakki Pandian — Software Engineer";
const description =
  "Portfolio of Thevar Essakki Pandian Murugan, an IT engineering student focused on software, full-stack development, AI/ML, and problem solving.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});
