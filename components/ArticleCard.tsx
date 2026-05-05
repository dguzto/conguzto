import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { CompanyLogo } from "./CompanyLogo";
import type { ArticleMeta } from "@/lib/content";

export async function ArticleCard({ article, featured = false, listItem = false, lastItem = false }: { article: ArticleMeta; featured?: boolean; listItem?: boolean; lastItem?: boolean }) {
  const t = await getTranslations("article");
  if (featured) {
    return (
      <Link
        href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
        className="block h-full bg-bg-white border border-border rounded-card p-xl hover:shadow-card hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
      >
        <CompanyLogo slug={article.slug} />
        <div className="flex items-center gap-[10px] text-[12px] text-text-muted mt-md mb-md">
          <span>{article.industry}</span>
          <span>&middot;</span>
          <span>{article.country}</span>
          <span>&middot;</span>
          <span>{article.readingTime} min</span>
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
        className={`flex items-start gap-md py-lg hover:opacity-80 transition-opacity ${lastItem ? "" : "border-b border-border"}`}
      >
        <CompanyLogo slug={article.slug} size={32} />
        <div>
          <div className="flex items-center gap-[8px] text-[11px] text-text-muted mb-xs">
            <span>{article.industry}</span>
            <span>&middot;</span>
            <span>{article.readingTime} min</span>
          </div>
          <h3 className="text-[15px] font-semibold text-text-primary tracking-[--tracking-tight-h3] leading-[1.3]">{article.title}</h3>
          {article.subtitle && (
            <p className="text-[13px] text-text-secondary mt-xs leading-[1.5]">{article.subtitle}</p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
      className="block h-full bg-bg-white border border-border rounded-card p-xl hover:shadow-card hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
    >
      <CompanyLogo slug={article.slug} />
      <div className="flex items-center gap-[10px] text-[12px] text-text-muted mt-md mb-md">
        <span>{article.industry}</span>
        <span>&middot;</span>
        <span>{article.readingTime} min</span>
      </div>
      <h3 className="text-[15px] font-semibold text-text-primary tracking-[--tracking-tight-h3] leading-[1.3]">{article.title}</h3>
      {article.subtitle && (
        <p className="text-[13px] text-text-secondary mt-sm leading-[1.5]">{article.subtitle}</p>
      )}
    </Link>
  );
}
