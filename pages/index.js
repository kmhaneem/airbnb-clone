import Head from 'next/head'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCards from '../components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, distance, location}) => (
            <SmallCards 
            img={img}
            distance={distance}
            location={location}
            />
            ))}
          </div>
        </section>
        <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex overflow-scroll space-x-3 scrollbar-hide p-3 -m-3'>
            {cardsData?.map(({img, title}) => (
              <MediumCard img={img} title={title} />
            ))}
            </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoor"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G')
    .then((res) => res.json());

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  .then((res) => res.json())

    return{
      props: {
        exploreData,
        cardsData
      }
    }
}