import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">Hi, I'm Akash</h1>
      <p className="lead">
        Software Developer at HCL | React | OutSystems | Power Platform
      </p>
      <div className="mt-4">
        <a
          href="https://akashbabu-resume.tiiny.site"
          className="btn btn-secondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
