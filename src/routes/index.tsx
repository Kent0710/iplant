import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { GrowthCard } from "~/components/card/growth-card";
import Logo from "../../public/logo.jpeg";

import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* background image  */}
      <div class="relative h-screen bg-[url('/hero-bg-image.png')] bg-cover bg-center pt-12 text-white">
        <small class="absolute top-0 right-0 m-4 text-[#38B001]">
          Learn more
        </small>

        <section
          class="flex items-center justify-between bg-blue-500 px-[4rem] py-[2rem]"
          style="background: linear-gradient(rgba(40,125,1,0.6), rgba(56,178,0,0.6));"
        >
          <nav class="flex items-center gap-12">
            <h1 class="text-lg font-bold"> iPLANT </h1>
            <ul class="flex items-center gap-8">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Design</li>
            </ul>
          </nav>
          <div class="space-x-4">
            <Button variant="dark">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </section>

        <main class="flex flex-col items-center justify-center pt-[3rem]">
          <h2 class="text-[3rem] font-bold">
            {" "}
            Helping you grow behind the screen.{" "}
          </h2>
          <p class="text-[1.5rem] italic">
            {" "}
            Less screen time. More green time.{" "}
          </p>
          <div class="mt-8 space-x-4">
            <Link href="/app">
              <Button variant="secondary">Download</Button>
            </Link>
            <Button>Learn More</Button>
          </div>
        </main>
      </div>

      <section class="flex flex-col items-center justify-center py-[5rem] text-[#38B100]">
        <h3 class="text-[2.5rem] font-bold"> Your True Growth Begins Here. </h3>
        <p class="text-[1.2rem] font-semibold">
          {" "}
          Experience the Benefits of Using iPlant{" "}
        </p>

        <div class="mt-8 flex justify-center gap-9">
          <GrowthCard
            title="Improved Physical Health"
            imageUrl="/growth-image1.jpeg"
          />
          <GrowthCard
            title="Enhanced Mental Well-being"
            imageUrl="/growth-image2.png"
          />
          <GrowthCard
            title="Improved Sleep Quality"
            imageUrl="/growth-image3.jpeg"
          />
        </div>
      </section>

      <footer class="flex h-[12rem] items-center justify-around bg-gradient-to-b from-[#2E8E01] to-[#0D2800] text-white">
        <div class="flex items-center gap-4">
          <img src={Logo} alt="logo" width={100} height={100} />
          <h5 class="text-4xl font-bold"> iPlant </h5>
        </div>

        <nav>
          <ul class="flex items-center gap-8 font-semibold">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Design</li>
          </ul>
        </nav>

        <div>
          <p>Get it on Google Play</p>
          <p>Download on the Apple Store</p>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
