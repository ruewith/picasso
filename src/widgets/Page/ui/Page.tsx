import { memo, ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export const Page = memo((props: PageProps) => {
  const { children } = props;

  return (
    <main>
      <div className="container py-5">{children}</div>
    </main>
  );
});
