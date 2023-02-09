import '../styles/globals.css';
import 'spinners-react/lib/SpinnerCircular.css';
import { getServerSession } from 'next-auth';
import Providers from './Providers';
import { authOptions } from '../db/auth';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
