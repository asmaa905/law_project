// app/layout.js
import "./globals.css";
import I18nProvider from "./i18n-provider";
import FontAwesomeProvider from "./font-awesome-provider";

export const metadata = {
  title: "شركة رواد الحكمة للمحاماة والاستشارات القانونية – شركة رواد الحكمة للمحاماة والاستشارات القانونية",
  description: "شركة رواد الحكمة للمحاماة والاستشارات القانونية – شركة رواد الحكمة للمحاماة والاستشارات القانونية",
};
// app/layout.js
import { Changa } from 'next/font/google';

const changa = Changa({
  subsets: ['latin'],
  weight: ['200', '500', '800'],
});
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning className={changa.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&family=Noto+Sans+Arabic:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="assets/css/all.min.css"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.webp" type="image/webp" sizes="192x192"></link>

      </head>
      <body>
        <I18nProvider>

          <FontAwesomeProvider>{children}</FontAwesomeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
