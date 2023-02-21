import Card from './Card';

type DogArrayProps = {
  amount: number;
};

async function getData() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { revalidate: 2 },
    cache: 'no-store',
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function DogArray({ amount }: DogArrayProps) {
  const data = await getData();

  const dogImageUrl = await data;

  return (
    <div className="mx-auto grid gap-20 grid-cols-2">
      {Array(amount).fill(
        <Card
          title="Door experts beheerd. Voor jou geselecteerd."
          imageUrl={dogImageUrl.message}
        />
      )}
    </div>
  );
}
