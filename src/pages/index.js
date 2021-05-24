import Head from 'next/head'
import Image from 'next/image'
import SearchInput from "../components/SearchInput/SearchInput";
import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'
import CountriesTable from '../components/CountriesTable/CountriesTable';


export default function Home({countries}) {
  console.log();
  return <Layout>
  <div className = {styles.counts}>Found {countries.length} countries</div>
 

  <SearchInput placeholder ="Filterby Name, region or SubRegion"  />

  <CountriesTable countries ={countries}></CountriesTable>
  </Layout>


}


export const getStaticProps = async () => {

  const res  = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();


  return {
    props: {
      countries,
      
    },
  };
};