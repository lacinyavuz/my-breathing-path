import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "../components/Seo";
import { BreathOrb } from "../components/BreathOrb";

export default function NotFound() {
  return (
    <>
      <Seo title="Not found" path="/404" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32">
        <BreathOrb className="absolute inset-0 m-auto h-[30rem] w-[30rem]" />
        <div className="container-narrow relative text-center">
          <span className="eyebrow">404</span>
          <h1 className="mt-6 text-display-lg">
            This path is
            <span className="italic text-terracotta-400"> a little quiet.</span>
          </h1>
          <p className="prose-lede mx-auto mt-6 max-w-md">
            The page you’re looking for isn’t here. Let’s take a breath
            and return to the start.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={16} /> Back home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
