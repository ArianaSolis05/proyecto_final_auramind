import { useState } from "react";

const CLOUD_NAME = "drej9nf3u";
const UPLOAD_PRESET = "imageness";

export default function ImageUploader({ onUploadSuccess }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setImageUrl(data.secure_url);
      onUploadSuccess(data.secure_url); // 👈 ENVÍA URL AL PADRE
    } catch (error) {
      console.error("Error subiendo imagen:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {loading && <p>Subiendo imagen...</p>}

      {imageUrl && (
        <div>
          <p>Imagen subida:</p>
          <img src={imageUrl} alt="Actividad" width={300} />
        </div>
      )}
    </div>
  );
}
