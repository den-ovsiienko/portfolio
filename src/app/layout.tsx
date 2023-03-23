import Navbar from '@/components/Navbar';
import './globals.css';
import { NAVBAR_HEIGHT } from '@/utils/constants';

export const metadata = {
  title: 'Denys Ovsiienko | Protfolio',
  description: 'Denys Ovsiiienko portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">
        {children}
        </main>
      </body>
    </html>
  );
}
