/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tr6AXNedopn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col items-center justify-center space-y-4 text-center px-4 md:px-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sanat Galerileri
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                İzmir Büyükşehir Belediyesi Açık Veri Portalı'ndan elde edilen
                veri setlerini kullanarak, erişilebilir ve kullanımı kolay bir
                şekilde Sanat Galerileri verilerini işledim.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/artCenters/1"
              >
                Beni Sanat Galerilerine Götür
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://www.linkedin.com/in/ali-yorulmaz-1a67a518a/"
              >
                Hazırlayan Kimdir?
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Başlıca Özellikler
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3 bg-white p-5 rounded-xl">
                <Label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  İzmir Büyükşehir Belediyesi Açık Veri Portalı tarafından
                  sağlanan sanat galerileri API endpointini, oluşturmuş olduğum
                  NextJS API Endpointine bağlayarak gerçek zamanlı sayfalama,
                  hatalı karakterleri düzeltme işlemlerini gerçekleştirdim.
                </Label>
              </div>
              <div className="space-y-3 bg-white p-5 rounded-xl">
                <Label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Yine aynı endpoint üzerinden sağlanan ENLEM ve BOYLAM
                  noktalarına göre gerçek zamanlı olarak Harita üzerinde
                  konumlarını gösterdim.
                </Label>
              </div>
              <div className="space-y-3 bg-white p-5 rounded-xl">
                <Label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  React-Speech-Kit kullanarak API tarafından sağlanan açıklama
                  kısımlarına sesli okuma özelliği ekledim.
                </Label>
              </div>
              <div className="space-y-3 bg-white p-5 rounded-xl">
                <Label className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sağlanan ENLEM ve BOYLAM noktalarına Google Maps Üzerinden
                  anlık olarak yol tarifi hizmeti alabilmelerini sağladım.
                </Label>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm space-y-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Projeye eklemek istediğiniz özellikler için
                <Link
                  className="underline underline-offset-2 ml-1"
                  href="mailto:aliyrlmz@gmail.com"
                >
                  iletişime geçebilirsiniz.
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/aliyorulmazdev/izmir-sanat">
            © 2024 Ali Yorulmaz - Açık Kaynak Proje Kodlarına buradan
          </Link>{" "}
          ulaşabilirsiniz.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://www.izmir.bel.tr/"
          >
            İzmir Büyükşehir Belediyesi
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://acikveri.bizizmir.com/"
          >
            Açık Veri Portalı
          </Link>
        </nav>
      </footer>
    </div>
  );
}
