'use client';

import { Work_Sans } from 'next/font/google';
import { createTheme } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

const Work_Sans_font = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontstyle = Work_Sans_font.style;

  const DefaultMUITheme = createTheme({
    typography: {
      ...fontstyle,
    },
    direction: 'rtl',
  });

  return (
    <body className={`${Work_Sans_font.className}`}>
      <MUIThemeProvider theme={DefaultMUITheme}>{children}</MUIThemeProvider>
    </body>
  );
}
