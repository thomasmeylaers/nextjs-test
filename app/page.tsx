import Card from './components/Card';
import DogArray from './components/DogArray';

export default function Home() {
  return (
    <main className="w-[75%] mx-auto mt-[5rem]">
      <DogArray amount={3} />
    </main>
  );
}
