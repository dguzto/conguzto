import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-[24px] font-bold text-text-primary tracking-[--tracking-tight-h2] mt-2xl mb-md leading-[1.2]" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="text-[18px] font-semibold text-text-primary tracking-[--tracking-tight-h3] mt-xl mb-sm leading-[1.3]" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="text-[16px] text-text-secondary leading-[1.7] mb-md" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="text-[16px] text-text-secondary leading-[1.7] mb-md list-disc pl-lg" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="text-[16px] text-text-secondary leading-[1.7] mb-md list-decimal pl-lg" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-sm" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => <blockquote className="border-l-2 border-accent pl-lg text-text-secondary italic mb-md" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="text-text-primary font-semibold" {...props} />,
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="max-w-[680px] mx-auto">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
