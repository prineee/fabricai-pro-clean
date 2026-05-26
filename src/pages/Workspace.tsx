import { useState } from "react";
import {
  Upload,
  Sparkles,
  FileText,
} from "lucide-react";

// @ts-ignore
import { analyzeGarment } from "../services/openai";

export default function Workspace() {
  const [files, setFiles] = useState<File[]>(
    []
  );

  const [aiResult, setAiResult] =
    useState("");

  const [aiLoading, setAiLoading] =
    useState(false);

  const handleFiles = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setFiles(
        Array.from(e.target.files)
      );
    }
  };

  const processAI = async (
    file: File
  ) => {
    try {
      setAiLoading(true);

      const imageUrl =
        URL.createObjectURL(file);

      const img =
        new Image();

      img.src = imageUrl;

      img.onload = async () => {
        const width = img.width;
        const height = img.height;

        const result =
          await analyzeGarment(
            file.name,
            width,
            height
          );

        setAiResult(result);

        setAiLoading(false);
      };

      img.onerror = async () => {
        const result =
          await analyzeGarment(
            file.name,
            0,
            0
          );

        setAiResult(result);

        setAiLoading(false);
      };
    } catch (error) {
      console.error(error);

      alert("AI Processing Failed");

      setAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* HEADER */}

      <div className="bg-white border-b px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center text-white text-2xl font-black">
            F
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-900">
              FabricAI Pro
            </h1>

            <p className="text-slate-500">
              AI Garment ERP System
            </p>
          </div>
        </div>

        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-2xl font-bold transition-all">
          Demo Account
        </button>
      </div>

      {/* BODY */}

      <div className="grid lg:grid-cols-2 gap-8 p-10">
        {/* LEFT SIDE */}

        <div className="bg-white rounded-3xl border shadow-sm p-8">
          <h2 className="text-5xl font-black text-slate-900 mb-4">
            Upload Garment Techpack
          </h2>

          <p className="text-slate-500 text-xl mb-10">
            Upload PDFs, images,
            sketches or production
            files for AI analysis.
          </p>

          {/* UPLOAD BOX */}

          <label className="border-2 border-dashed border-slate-300 rounded-3xl p-20 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-all">
            <Upload
              size={90}
              className="text-slate-400 mb-6"
            />

            <h3 className="text-5xl font-black text-slate-900 mb-5">
              Upload Files
            </h3>

            <input
              type="file"
              multiple
              onChange={handleFiles}
              className="hidden"
            />

            <span className="bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl text-2xl font-bold">
              Choose Files
            </span>
          </label>

          {files.length > 0 && (
  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-3xl p-6">
    <p className="text-slate-900 text-xl font-black">
      {files.length} file selected
    </p>

    <p className="text-slate-600 mt-2">
      First file: {files[0].name}
    </p>

    <button
      onClick={() => processAI(files[0])}
      disabled={aiLoading}
      className="mt-5 w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-400 text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 text-xl"
    >
      <Sparkles size={24} />
      {aiLoading ? "Processing AI..." : "Process AI"}
    </button>
  </div>
)}

{/* FILES */}

          {/* FILES */}

          <div className="mt-10 space-y-6">
            {files.map((file, index) => (
              <div
                key={index}
                className="bg-slate-50 border rounded-3xl p-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-100 flex items-center justify-center">
                    <FileText
                      size={38}
                      className="text-emerald-700"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-2xl text-slate-900">
                      {file.name}
                    </h3>

                    <p className="text-slate-500 text-lg">
                      {(
                        file.size /
                        1024 /
                        1024
                      ).toFixed(2)}{" "}
                      MB
                    </p>

                    <a
                      href={URL.createObjectURL(
                        file
                      )}
                      target="_blank"
                      className="text-emerald-700 font-bold mt-2 inline-block"
                    >
                      View Uploaded File
                    </a>
                  </div>
                </div>

                <button
                  onClick={() =>
                    processAI(file)
                  }
                  className="bg-emerald-700 hover:bg-emerald-800 transition-all text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 text-xl"
                >
                  <Sparkles size={24} />

                  Process AI
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="bg-white rounded-3xl border shadow-sm p-8">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <Sparkles
                size={32}
                className="text-emerald-700"
              />
            </div>

            <div>
              <h2 className="text-5xl font-black text-slate-900">
                AI Garment Analysis
              </h2>

              <p className="text-slate-500 text-xl">
                BOM, operations,
                SMV, costing &
                production insights.
              </p>
            </div>
          </div>

          {/* LOADING */}

          {aiLoading && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
              <div className="animate-spin w-20 h-20 border-4 border-emerald-700 border-t-transparent rounded-full mx-auto mb-6"></div>

              <h3 className="text-4xl font-black text-emerald-700">
                FabricAI Processing
              </h3>

              <p className="text-slate-500 mt-4 text-xl">
                AI is analyzing
                garment structure,
                BOM, consumption,
                SMV and costing.
              </p>
            </div>
          )}

          {/* RESULT */}

          {!aiLoading && aiResult && (
            <div className="bg-slate-50 border rounded-3xl p-8 overflow-auto max-h-[850px]">
              <pre className="whitespace-pre-wrap text-slate-800 leading-9 text-lg font-medium">
                {aiResult}
              </pre>
            </div>
          )}

          {/* EMPTY */}

          {!aiLoading &&
            !aiResult && (
              <div className="border-2 border-dashed border-slate-200 rounded-3xl h-[750px] flex flex-col items-center justify-center text-center px-10">
                <Sparkles
                  size={90}
                  className="text-slate-300 mb-8"
                />

                <h3 className="text-5xl font-black text-slate-700 mb-5">
                  AI Ready
                </h3>

                <p className="text-slate-500 text-2xl leading-10 max-w-2xl">
                  Upload garment
                  techpacks, images,
                  sketches or PDFs
                  and let FabricAI
                  Pro generate BOM,
                  consumption, SMV,
                  costing and ERP
                  production
                  analysis.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}