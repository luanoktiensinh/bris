import type { Metadata } from "next";
import '@/styles/globals.scss';
import { ApolloWrapper } from "@/wrapper/ApolloWrapper";
import { Header } from "@/components/Header";
import { ReduxProvider } from "@/providers/reduxProvider";
import { GlobalModal } from "@/components/GlobalModal";
import Script from 'next/script';
import { Footer } from "@/components/Footer";
import { GlobalLoading } from "@/components/GlobalLoading";
import { Toast } from "@/components/Toast";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} id="html-body">
      <body>
        <ReduxProvider>
          <ApolloWrapper>
            <Toast />
            <Header />
            {children}
            <Footer />
            <GlobalModal />
            <GlobalLoading />
          </ApolloWrapper>
        </ReduxProvider>
        <Script id="bris-font">
          {`
            (function(d) {
              var config = {
                      kitId: 'fnh4omr',
                      scriptTimeout: 3000,
                      async: true
                  },
                  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
