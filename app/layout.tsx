import '../styles/globals.css';
import 'spinners-react/lib/SpinnerCircular.css';
import { unstable_getServerSession } from 'next-auth';
import Providers from './Providers';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
