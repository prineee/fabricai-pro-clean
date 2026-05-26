import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConsumptionCalculator() {
  const navigate = useNavigate();
  const [garmentType, setGarmentType] = useState("Shirt");
  const [fabricCategory, setFabricCategory] = useState("Woven");
  const [patternType, setPatternType] = useState("Solid");

  const [fabricWidth, setFabricWidth] = useState(58);
  const [fabricRate, setFabricRate] = useState(180);
  const [gsm, setGsm] = useState(180);

  const [chest, setChest] = useState(40);
  const [bodyLength, setBodyLength] = useState(30);
  const [sleeveLength, setSleeveLength] = useState(24);

  const [outseam, setOutseam] = useState(42);
  const [inseam, setInseam] = useState(32);
  const [waist, setWaist] = useState(36);
  const [hip, setHip] = useState(40);
  const [bottom, setBottom] = useState(20);

  const [dressLength, setDressLength] = useState(44);
  const [flare, setFlare] = useState(50);
  const [lining, setLining] = useState(true);

  const [kidsAge, setKidsAge] = useState(8);

  const [markerEfficiency, setMarkerEfficiency] = useState(85);
  const [shrinkage, setShrinkage] = useState(5);
  const [wastage, setWastage] = useState(3);

  const [availableFabric, setAvailableFabric] = useState(5000);
  const [orderQty, setOrderQty] = useState(1000);

  const calculations = useMemo(() => {
    let perPiece = 0;
    let unit = fabricCategory === "Knit" ? "Kg" : "Meter";
    let benchmark = "";
    let aiSuggestion = "Consumption within normal range.";

    const width = Number(fabricWidth);

    const shrinkFactor = 1 + Number(shrinkage) / 100;
    const wasteFactor = 1 + Number(wastage) / 100;

    let patternFactor = 1;

    if (patternType === "Stripe") patternFactor = 1.07;
    if (patternType === "Checks") patternFactor = 1.1;
    if (patternType === "Print") patternFactor = 1.08;

    /* =====================================
       SHIRT ENGINE
    ===================================== */

    if (garmentType === "Shirt") {
      let base = 1.7;

      if (width <= 45) {
        base = 2.15;
        benchmark = "Industry benchmark: 2.1m–2.2m";
      } else if (width <= 60) {
        base = 1.7;
        benchmark = "Industry benchmark: 1.6m–1.8m";
      } else {
        base = 1.58;
        benchmark = "Industry benchmark: 1.5m–1.6m";
      }

      const sizeImpact =
        ((Number(chest) - 40) * 0.03) +
        ((Number(bodyLength) - 30) * 0.02);

      perPiece =
        (base + sizeImpact) *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      if (patternType === "Checks") {
        aiSuggestion =
          "Checks selected. Added 10% matching allowance.";
      }
    }

    /* =====================================
       TROUSER ENGINE
    ===================================== */

    else if (garmentType === "Trouser") {
      const formula =
        (((Number(outseam) + 4) *
          (Number(hip) / 4 + 3) *
          4) /
          36) /
        Number(fabricWidth);

      perPiece =
        (formula + 0.058) *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      benchmark =
        width <= 45
          ? "Industry benchmark: 1.5m–1.8m"
          : "Industry benchmark: 1.2m–1.4m";

      aiSuggestion =
        "Trouser logic includes zipper, pocket facing, and belt loop allowance.";
    }

    /* =====================================
       PAJAMA ENGINE
    ===================================== */

    else if (garmentType === "Pajama") {
      if (width <= 45) {
        perPiece = 1.9;
        benchmark = "Industry benchmark: 1.8m–2.0m";
      } else {
        perPiece = 1.45;
        benchmark = "Industry benchmark: 1.3m–1.6m";
      }

      perPiece =
        perPiece *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      aiSuggestion =
        "Relaxed fit pajama marker optimized for straight cutting.";
    }

    /* =====================================
       SALWAR ENGINE
    ===================================== */

    else if (garmentType === "Salwar") {
      let base = width <= 45 ? 2.8 : 2.2;

      const flareImpact = Number(flare) / 100;

      perPiece =
        (base + flareImpact) *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      benchmark =
        "Industry benchmark: 2.2m–3.0m depending flare";

      aiSuggestion =
        "Flare and bottom width significantly affect salwar consumption.";
    }

    /* =====================================
       WOMEN DRESS ENGINE
    ===================================== */

    else if (garmentType === "Dress") {
      let outer = width <= 45 ? 2.6 : 2.3;

      outer =
        outer *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      let liningConsumption = 0;

      if (lining) {
        liningConsumption = 1.8 * 1.07;
      }

      perPiece = outer + liningConsumption;

      benchmark =
        "Industry benchmark: 2.2m–2.8m plus lining";

      aiSuggestion =
        "Gathered panels and lining increase dress consumption.";
    }

    /* =====================================
       KIDSWEAR ENGINE
    ===================================== */

    else if (garmentType === "Kidswear") {
      let base = width <= 45 ? 1.1 : 0.9;

      const ageImpact = Number(kidsAge) * 0.03;

      perPiece =
        (base + ageImpact) *
        shrinkFactor *
        wasteFactor *
        patternFactor;

      benchmark =
        "Industry benchmark: 0.9m–1.4m";

      aiSuggestion =
        "Kidswear optimized using compact marker placement.";
    }

    /* =====================================
       KNIT ENGINE
    ===================================== */

    else {
      unit = "Kg";

      const knitFormula =
        (((Number(bodyLength) * Number(chest)) +
          (Number(bottom) * Number(sleeveLength))) *
          2 *
          Number(gsm)) /
        100000;

      perPiece =
        knitFormula *
        shrinkFactor *
        wasteFactor;

      benchmark = "Industry benchmark varies by GSM";

      aiSuggestion =
        "Knit formula based on GSM weight calculation.";
    }

    const totalFabric = perPiece * Number(orderQty);

    const singlePieceCost =
      perPiece * Number(fabricRate);

    const totalOrderCost =
      totalFabric * Number(fabricRate);

    const remainingFabric =
      Number(availableFabric) - totalFabric;

    return {
      perPiece: perPiece.toFixed(2),
      totalFabric: totalFabric.toFixed(2),
      singlePieceCost: singlePieceCost.toFixed(2),
      totalOrderCost: totalOrderCost.toFixed(0),
      remainingFabric: Math.abs(remainingFabric).toFixed(2),
      shortage: remainingFabric < 0,
      benchmark,
      aiSuggestion,
      unit,
    };
  }, [
    garmentType,
    fabricCategory,
    patternType,
    fabricWidth,
    fabricRate,
    gsm,
    chest,
    bodyLength,
    sleeveLength,
    outseam,
    inseam,
    waist,
    hip,
    bottom,
    dressLength,
    flare,
    lining,
    kidsAge,
    markerEfficiency,
    shrinkage,
    wastage,
    availableFabric,
    orderQty,
  ]);

  const inputClass =
    "w-full mt-2 p-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-yellow-200";

  return (
    <div className="min-h-screen bg-slate-950 p-8" style={{ color: "#fef08a" }}>
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#fef9c3",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "28px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-5xl font-bold mb-10">
        FabricAI ERP V5
      </h1>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 bg-slate-900 rounded-3xl p-8 border border-slate-800">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Garment Type</label>
              <select
                value={garmentType}
                onChange={(e) =>
                  setGarmentType(e.target.value)
                }
                className={inputClass}
              >
                <option>Shirt</option>
                <option>Trouser</option>
                <option>Pajama</option>
                <option>Salwar</option>
                <option>Dress</option>
                <option>Kidswear</option>
                <option>T-Shirt</option>
              </select>
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Fabric Category</label>
              <select
                value={fabricCategory}
                onChange={(e) =>
                  setFabricCategory(e.target.value)
                }
                className={inputClass}
              >
                <option>Woven</option>
                <option>Knit</option>
              </select>
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Pattern Type</label>
              <select
                value={patternType}
                onChange={(e) =>
                  setPatternType(e.target.value)
                }
                className={inputClass}
              >
                <option>Solid</option>
                <option>Stripe</option>
                <option>Checks</option>
                <option>Print</option>
              </select>
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Fabric Width</label>
              <input
                type="number"
                value={fabricWidth}
                onChange={(e) =>
                  setFabricWidth(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>
                Fabric Rate ₹/
                {fabricCategory === "Knit"
                  ? "Kg"
                  : "Meter"}
              </label>
              <input
                type="number"
                value={fabricRate}
                onChange={(e) =>
                  setFabricRate(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            {fabricCategory === "Knit" && (
              <div>
                <label style={{ color: "#fef08a", fontWeight: 600 }}>GSM</label>
                <input
                  type="number"
                  value={gsm}
                  onChange={(e) =>
                    setGsm(Number(e.target.value))
                  }
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Chest</label>
              <input
                type="number"
                value={chest}
                onChange={(e) =>
                  setChest(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Body Length</label>
              <input
                type="number"
                value={bodyLength}
                onChange={(e) =>
                  setBodyLength(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Sleeve Length</label>
              <input
                type="number"
                value={sleeveLength}
                onChange={(e) =>
                  setSleeveLength(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Outseam</label>
              <input
                type="number"
                value={outseam}
                onChange={(e) =>
                  setOutseam(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Hip</label>
              <input
                type="number"
                value={hip}
                onChange={(e) =>
                  setHip(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>Order Quantity</label>
              <input
                type="number"
                value={orderQty}
                onChange={(e) =>
                  setOrderQty(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>

            <div>
              <label style={{ color: "#fef08a", fontWeight: 600 }}>
                Available Fabric Stock
              </label>
              <input
                type="number"
                value={availableFabric}
                onChange={(e) =>
                  setAvailableFabric(Number(e.target.value))
                }
                className={inputClass}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#fef08a" }}>
              Results
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "#fef08a" }}>Per Piece</span>
                <span className="text-emerald-400 font-bold">
                  {calculations.perPiece} {calculations.unit}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "#fef08a" }}>Single Piece Cost</span>
                <span className="text-emerald-400 font-bold">
                  ₹ {calculations.singlePieceCost}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "#fef08a" }}>Total Fabric</span>
                <span style={{ color: "#fef08a" }}>
                  {calculations.totalFabric} {calculations.unit}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "#fef08a" }}>Total Order Cost</span>
                <span className="text-emerald-400 font-bold">
                  ₹ {calculations.totalOrderCost}
                </span>
              </div>

              <div className="flex justify-between">
                <span style={{ color: "#fef08a" }}>Fabric Balance</span>
                <span
                  className={`font-bold ${
                    calculations.shortage
                      ? "text-red-400"
                      : "text-emerald-400"
                  }`}
                >
                  {calculations.shortage
                    ? `${calculations.remainingFabric} ${calculations.unit} Shortage`
                    : `${calculations.remainingFabric} ${calculations.unit} Remaining`}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#fef08a" }}>
              Industry Benchmark
            </h2>

            <p className="text-emerald-400 leading-7">
              {calculations.benchmark}
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#fef08a" }}>
              AI Suggestions
            </h2>

            <p className="text-emerald-400 leading-7">
              {calculations.aiSuggestion}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
