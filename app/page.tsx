import "./styles/page.scss";
import Hero from './sections/Hero/Hero'
import Resource from './sections/Resource/Resource'
import ResourceCard from "./components/ResourceCard/ResourceCard";
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Resource></Resource>
    </main>
  );
}
