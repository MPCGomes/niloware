import "./styles/page.scss";
import Hero from './sections/Hero/Hero'
import Process from './sections/Process/Process'
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Process></Process>
    </main>
  );
}
