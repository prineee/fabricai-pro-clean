import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Loader2 } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "../lib/cloudinary";

const inputStyle: React.CSSProperties = {
  width: "100%",
  marginTop: "8px",
  padding: "14px 16px",
  borderRadius: "12px",
  background: "#1e293b",
  border: "1px solid #334155",
  color: "#ffffff",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  color: "#fef08a",
  fontSize: "14px",
  fontWeight: 600,
  marginTop: "18px",
};

export default function StyleMaster() {
  const navigate = useNavigate();

  const [styleNumber, setStyleNumber] = useState("");
  const [buyer, setBuyer] = useState("");
  const [category, setCategory] = useState("T-Shirt");
  const [fabricType, setFabricType] = useState("");
  const [gsm, setGsm] = useState("");
  const [width, setWidth] = useState("");
  const [season, setSeason] = useState("Summer");
  const [gender, setGender] = useState("Men");
  const [notes, setNotes] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await response.json();
    return data.secure_url as string;
  }

  async function handleSave() {
    try {
      setLoading(true);
      let imageUrl = "";
      if (imageFile) imageUrl = await uploadToCloudinary(imageFile);

      await addDoc(collection(db, "styles"), {
        styleNumber, buyer, category, fabricType,
        gsm, width, season, gender, notes, imageUrl,
        createdAt: serverTimestamp(),
      });

      alert("Style Saved Successfully");
      setStyleNumber(""); setBuyer(""); setCategory("T-Shirt");
      setFabricType(""); setGsm(""); setWidth("");
      setSeason("Summer"); setGender("Men"); setNotes("");
      setImageFile(null); setImagePreview(null);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "#ffffff", padding: "40px" }}>

      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#94a3b8",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Dashboard
      </button>

      {/* Page title */}
      <div style={{ marginBottom: "36px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, color: "#fef08a" }}>Style Master</h1>
        <p style={{ color: "#fef08a", marginTop: "6px", fontSize: "16px" }}>
          AI Powered Garment Style Management
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>

        {/* Left — form */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "24px", padding: "36px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fef08a", marginBottom: "8px" }}>
            Style Details
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>

            <div>
              <label style={labelStyle}>Style Number</label>
              <input style={inputStyle} value={styleNumber} onChange={(e) => setStyleNumber(e.target.value)} />
            </div>

            <div>
              <label style={labelStyle}>Buyer Name</label>
              <input style={inputStyle} value={buyer} onChange={(e) => setBuyer(e.target.value)} />
            </div>

            <div>
              <label style={labelStyle}>Garment Category</label>
              <select style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>T-Shirt</option>
                <option>Polo</option>
                <option>Hoodie</option>
                <option>Jogger</option>
                <option>Shirt</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Fabric Type</label>
              <input style={inputStyle} value={fabricType} onChange={(e) => setFabricType(e.target.value)} />
            </div>

            <div>
              <label style={labelStyle}>GSM</label>
              <input style={inputStyle} type="number" value={gsm} onChange={(e) => setGsm(e.target.value)} />
            </div>

            <div>
              <label style={labelStyle}>Fabric Width (inches)</label>
              <input style={inputStyle} type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>

            <div>
              <label style={labelStyle}>Season</label>
              <select style={inputStyle} value={season} onChange={(e) => setSeason(e.target.value)}>
                <option>Summer</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Autumn</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Gender</label>
              <select style={inputStyle} value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
                <option>Unisex</option>
              </select>
            </div>

          </div>

          <div style={{ marginTop: "18px" }}>
            <label style={labelStyle}>Notes</label>
            <textarea
              rows={5}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            style={{
              marginTop: "28px",
              padding: "16px 32px",
              background: loading ? "#065f46" : "#10b981",
              color: "white",
              border: "none",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {loading && <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />}
            {loading ? "Saving..." : "Save Style"}
          </button>
        </div>

        {/* Right — image upload */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "24px", padding: "36px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fef08a", marginBottom: "24px" }}>
            Style Image
          </h2>

          <label
            style={{
              border: "2px dashed #334155",
              borderRadius: "20px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <input type="file" hidden onChange={handleImage} accept="image/*" />
            {imagePreview ? (
              <img src={imagePreview} alt="preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <>
                <Upload size={56} color="#475569" />
                <p style={{ color: "#94a3b8", marginTop: "16px", fontSize: "16px" }}>Upload Garment Image</p>
              </>
            )}
          </label>
        </div>

      </div>
    </div>
  );
}
