import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";

export default function StylesList() {

  const [styles, setStyles] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchStyles() {

      try {

        const q = query(
          collection(db, "styles"),
          orderBy("createdAt", "desc")
        );

        const snapshot =
          await getDocs(q);

        const data =
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

        setStyles(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);
      }
    }

    fetchStyles();

  }, []);

  if (loading) {

    return (

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-3xl">

        Loading Styles...

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Saved Styles
        </h1>

        <p className="text-slate-400 mt-2 text-lg">
          Garment ERP Style Database
        </p>

      </div>

      {styles.length === 0 ? (

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center text-slate-400">

          No styles saved yet.

        </div>

      ) : (

        <div className="grid grid-cols-3 gap-8">

          {styles.map((style) => (

            <div
              key={style.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden"
            >

              {style.imageUrl ? (

                <img
                  src={style.imageUrl}
                  alt="style"
                  className="w-full h-72 object-cover"
                />

              ) : (

                <div className="w-full h-72 bg-slate-800 flex items-center justify-center text-slate-500 text-4xl">

                  No Image

                </div>

              )}

              <div className="p-6">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-3xl font-bold">

                    {style.styleNumber || "-"}

                  </h2>

                  <span className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm">

                    {style.category || "-"}

                  </span>

                </div>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between">

                    <span className="text-slate-400">
                      Buyer
                    </span>

                    <span>
                      {style.buyer || "-"}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">
                      Fabric
                    </span>

                    <span>
                      {style.fabricType || "-"}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">
                      GSM
                    </span>

                    <span>
                      {style.gsm || "-"}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">
                      Width
                    </span>

                    <span>
                      {style.width || "-"}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-slate-400">
                      Gender
                    </span>

                    <span>
                      {style.gender || "-"}
                    </span>

                  </div>

                </div>

                {style.imageUrl && (

                  <a
                    href={style.imageUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 text-emerald-400 underline"
                  >

                    Open Image

                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}