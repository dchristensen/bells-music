import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from "@remix-run/react";
import Layout from "./components/Layout";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Christmas Bell Songs",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  { rel: "icon", href: "/favicon.ico", type: "image/ico" },
];

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <html lang="en" className="h-screen">
      <head>
        {title === undefined ? null : <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-gray-600">
        <Layout>{children}</Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <ErrorDisplay title={`${caught.status} ${caught.statusText}`} />
        </Document>
      );

    default:
      throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <ErrorDisplay title="Application Error" message={error.message} />
    </Document>
  );
}

interface ErrorDisplayProps {
  title: string;
  message?: string;
}

function ErrorDisplay({ title, message }: ErrorDisplayProps) {
  return (
    <div className="bg-white sm:mt-4 sm:rounded-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-100 sm:mx-0 sm:h-20 sm:w-20">
            <ExclamationTriangleIcon className="h-20 w-20 text-red-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{title}</h2>
            {message === undefined ? null : (
              <div className="mt-2">
                <p className="mt-5 text-xl text-gray-500">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
