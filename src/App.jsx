import Warning from './components/warning';
import Nav from './components/Nav';
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from './sections/Index';

const App = () => (
  <main className="relative">
    <Warning />
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding" id="products">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-blue-50">
      <CustomerReviews />
    </section>
    <section className="padding">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
