import { Link } from "@/i18n/navigation";
import type { ArticleMeta } from "@/lib/content";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={{ pathname: "/newsletter/[slug]", params: { slug: article.slug } }}
      className="block bg-bg-white border border-border rounded-card p-[20px] hover:shadow-card hover:border-accent transition-all"
    >
      <h3 className="text-[15px] font-semibold text-text-primary tracking-[--tracking-tight-h3] leading-[1.3]">{article.title}</h3>
      <p className="text-xs text-text-muted mt-sm">{article.industry} · {article.country}</p>
    </Link>
  );
}
