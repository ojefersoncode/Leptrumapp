import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { getURL } from '../utils/helpers';
import '@/styles/main.css';
import { PHProvider } from './providers';
import { ThemeProvider } from '../components/landing/theme-provider';
import { Toaster } from '../components/ui/toaster';
import PostHogPageViewWrapper from '../components/pages/PostHogPageViewWrapper';

const meta = {
  title: 'Leptrum',
  description: 'Crie seus Projetos até 10x mais rapido.',
  cardImage: '/leptrum.png',
  robots: 'follow, index',
  favicon: '/logo.webp',
  url: getURL()
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Leptrum',
      'Supabase',
      'Next.js',
      'Stripe',
      'assets',
      '3d',
      'Assets 3d',
      'blender',
      'curso',
      'game dev',
      'Cooderfy',
      'SaaS',
      'boilerplate',
      'template',
      'templates'
    ],
    authors: [{ name: 'Leptrum', url: 'https://Leptrum.com/' }],
    creator: 'Leptrum',
    publisher: 'Leptrum',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Leptrum',
      creator: 'Leptrum',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>
        <PHProvider>
          <body>
            <PostHogPageViewWrapper />
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            >
              {children}
            </main>
            <Toaster />
          </body>
        </PHProvider>
      </ThemeProvider>
    </html>
  );
}
