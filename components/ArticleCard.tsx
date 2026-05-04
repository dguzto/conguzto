import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import type { ArticleMeta } from "@/lib/content";

export async function ArticleCard({ article, featured = false, listItem = false, lastItem = false }: { article: ArticleMeta; featured?: boolean; listItem?: boolean; lastItem?: boolean }) {
  const t = await getTranslations("article");
  if (featured) {
    return (
      <Link
        href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
        className="block bg-bg-white border border-border rounded-card p-xl hover:shadow-card hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
      >
        <div className="flex items-center gap-sm mb-md">
          <span className="text-[11px] font-medium bg-accent/10 text-accent px-sm py-[2px] rounded-full">{article.industry}</span>
          <span className="text-xs text-text-muted">{article.country}</span>
          <span className="text-xs text-text-muted">· {article.readingTime} min</span>
        </div>
        <h3 className="font-heading text-[24px] font-bold text-text-primary leading-[1.2] tracking-[-0.5px]">{article.title}</h3>
        {article.subtitle && (
          <p className="text-[15px] text-text-secondary mt-sm leading-[1.6]">{article.subtitle}</p>
        )}
        <p className="text-[13px] text-accent mt-lg">{t("readAnalysis")}</p>
      </Link>
    );
  }

  if (listItem) {
    return (
      <Link
        href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
        className={`block py-lg hover:opacity-80 transition-opacity ${lastItem ? "" : "border-b border-border"}`}
      >
        <div className="flex items-center gap-sm mb-xs">
          <span className="text-[10px] font-medium bg-accent/10 text-accent px-sm py-[2px] rounded-full">{article.industry}</span>
          <span className="text-xs text-text-muted">{article.readingTime} min</span>
        </div>
        <h3 className="text-[15px] font-semibold text-text-primary tracking-[--tracking-tight-h3] leading-[1.3]">{article.title}</h3>
        {article.subtitle && (
          <p className="text-[13px] text-text-secondary mt-xs leading-[1.5]">{article.subtitle}</p>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
      className="block bg-bg-white border border-border rounded-card p-[20px] hover:shadow-card hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-center gap-sm mb-xs">
        <span className="text-[10px] font-medium bg-accent/10 text-accent px-sm py-[2px] rounded-full">{article.industry}</span>
        <span className="text-xs text-text-muted">{article.readingTime} min</span>
      </div>
      <h3 className="text-[15px] font-semibold text-text-primary tracking-[--tracking-tight-h3] leading-[1.3]">{article.title}</h3>
      {article.subtitle && (
        <p className="text-[13px] text-text-secondary mt-xs line-clamp-1">{article.subtitle}</p>
      )}
    </Link>
  );
}
