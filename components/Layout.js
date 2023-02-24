import Footer from '@/components/Footer';
import NavTop from '@/components/NavTop';

export default function Layout({ children }) {
  return (
    <>
      <NavTop />
      <div className="container mx-auto px-2 lg:px-10 xl:px-32">
        <main className="pb-[8rem]">{children}</main>
      </div>
      <Footer />
    </>
  );
}
