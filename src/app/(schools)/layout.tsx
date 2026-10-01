import { SiteFooter } from '@/components/site-footer';

// The Early School, Primary School and College pages carry the "Our schools" footer column.
export default function SchoolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main id="main">{children}</main>
      <SiteFooter variant="schools" />
    </>
  );
}
