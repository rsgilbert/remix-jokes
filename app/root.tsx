import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";
import globalStylesUrl from '~/styles/global.css'
import globalLargeStylesUrl from '~/styles/global-large.css'
import globalMediumStylesUrl from '~/styles/global-medium.css'



export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta 
                    name='viewport'
                    content='width=device-width,initial-scale=1'
                    />
                <title>Remix : So great, it's funny!</title>
                <Links />
            </head>
            <body>
                <Outlet />
                <LiveReload />
            </body>
        </html>
    )
}

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: globalLargeStylesUrl
    },
    {
        rel: 'stylesheet',
        href: globalMediumStylesUrl,
        media: "print, (min-width: 640px)",
    },
    {
        rel: 'stylesheet',
        href: globalStylesUrl,
        media: "screen and (min-width: 1024px)",
    },
]