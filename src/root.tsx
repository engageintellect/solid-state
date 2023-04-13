// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="">
        <Suspense>
          <ErrorBoundary>
            <div class="">
              <div class="bg-zinc-900">
                <div class="flex max-w-5xl mx-auto justify-between p-2 lg:p-4">
                  <div class="flex gap-5 font-semibold text-white uppercase">
                    <A href="/">Home</A>
                    <A href="/cart">Cart</A>
                  </div>

                  <div class="flex gap-5 font-semibold text-white uppercase">
                    <A href="/">User</A>
                  </div>
                </div>
              </div>

              <div class="bg-zinc-100 h-screen">
                <div class="max-w-5xl mx-auto p-2 lg:p-4">
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </div>
              </div>

              <div class="bg-zinc-900">
                <div class="flex max-w-5xl mx-auto justify-center p-2 lg:p-4">
                  <div class="flex gap-5 font-semibold text-white">
                    <A
                      href="https://github.com/engageintellect"
                      target="_blank"
                    >
                      @engageintellect
                    </A>
                  </div>
                </div>
              </div>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
