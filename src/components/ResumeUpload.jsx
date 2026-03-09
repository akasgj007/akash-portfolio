import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const storageRef = ref(storage, "resume/resume.pdf");
    await uploadBytes(storageRef, file);
    alert("Resume uploaded successfully!");
  };

  return (
    <div className="container py-5">
      <h3>Upload Resume</h3>
      <input
        type="file"
        className="form-control mb-3"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;
