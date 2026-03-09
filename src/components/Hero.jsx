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
          href="https://drive.google.com/file/d/1oW_NHRD-tNdbTTkb8YRl9bF5kb93p3aT/view"
          target="_blank"
          className="btn btn-outline-primary me-2"
        >
          View Resume
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1oW_NHRD-tNdbTTkb8YRl9bF5kb93p3aT"
          className="btn btn-secondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
