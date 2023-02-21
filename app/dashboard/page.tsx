import Link from 'next/link';
import Counter from '../components/Counter';

export default function Page() {
  return (
    <div>
      DASHBOARD
      <Link className="block text-blue-600" href="/dashboard/settings">
        Settings
      </Link>
      <Counter />
    </div>
  );
}
