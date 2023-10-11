import { Header } from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen bg-white text-black">
      <Header />
      <div className="grid grid-flow-col">
        <section className="bg-red-50 h-[1024px] sticky top-12 left-0 overflow-y-scroll w-48">
          <article className="my-20 w-48">
            {[...new Array(10)].map((_, i) => (
              <div key={i}>
                <Image
                  alt="Picture"
                  width={300}
                  height={200}
                  className="w-40 mx-auto mb-4"
                  src="https://placehold.jp/300x200.png"
                />
              </div>
            ))}
          </article>
        </section>
        <section className="bg-white w-auto m-20">
          <div className="flex flex-wrap gap-4">
            {[...new Array(30)].map((_, i) => (
              <div key={i}>
                <Image
                  alt="Picture"
                  width={300}
                  height={200}
                  className="w-80 mx-auto mb-4"
                  src="https://placehold.jp/300x200.png"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="bg-yellow-100 p-40">
        <div className="flex flex-wrap gap-4">
          {[...new Array(30)].map((_, i) => (
            <div key={i}>
              <Image
                alt="Picture"
                width={300}
                height={200}
                className="w-30 mx-auto mb-4"
                src="https://placehold.jp/300x200.png"
              />
            </div>
          ))}
        </div>
      </section>
      <footer className="w-full bg-black">Footer</footer>
    </main>
  );
}
