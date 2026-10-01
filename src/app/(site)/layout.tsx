import { SiteFooter } from '@/components/site-footer';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
