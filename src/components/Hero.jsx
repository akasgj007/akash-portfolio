import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

export default function Hero() {
  const [resumeURL, setResumeURL] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      const url = await getDownloadURL(ref(storage, "resume/resume.pdf"));
      setResumeURL(url);
    };
    fetchResume();
  }, []);

  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">Hi, I'm Akash</h1>
      <p className="lead">
        Software Developer at HCL | React | OutSystems | Power Platform
      </p>
      <div className="mt-4">
        <a href={resumeURL} className="btn btn-secondary">
          Download Resume
        </a>
      </div>
    </section>
  );
}
