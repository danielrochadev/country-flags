import { Grid, Card, Header, Footer } from "./components";

const countries = [
  {
    id: 1,
    country: "Brazil",
    capital: "Brasília",
    region: "South America",
    population: "213993437"
  },
  {
    id: 2,
    country: "Japan",
    capital: "Tokyo",
    region: "Asia",
    population: "125836021"
  },
  {
    id: 3,
    country: "United States",
    capital: "Washington, D.C.",
    region: "North America",
    population: "331893745"
  },
  {
    id: 4,
    country: "Germany",
    capital: "Berlin",
    region: "Europe",
    population: "83129285"
  },
  {
    id: 5,
    country: "India",
    capital: "New Delhi",
    region: "Asia",
    population: "1417173173"
  },
  {
    id: 6,
    country: "Australia",
    capital: "Canberra",
    region: "Oceania",
    population: "26068744"
  },
  {
    id: 7,
    country: "Canada",
    capital: "Ottawa",
    region: "North America",
    population: "38388419"
  },
  {
    id: 8,
    country: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    population: "59308690"
  }
];


export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex-1">
        <Grid>
          {countries.map(({ id, country, capital, region, population }) =>
            <Card 
              key={id}
              country={country}
              capital={capital}
              region={region}
              population={population}
            />
          )}
        </Grid>
      </main>
      <Footer/>
    </>
  );
}
