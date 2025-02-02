import React, { useState } from "react";

const AgriculturalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    region: "",
    soilType: "",
    crop: "",
    rainfall: "",
    temperature: "",
    fertilizerUsed: "",
    irrigationUsed: "",
    daysToHarvest: "",
  });

  const [yieldSize, setYieldSize] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data being sent:", formData);

    const calculatedYieldSize = await determineYieldSize(formData);
    setYieldSize(calculatedYieldSize);
    console.log("test statement 1"); // new test
  };

  const determineYieldSize = async (data: typeof formData) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      return `Estimated Yield Size: ${result.predictedYield.toFixed(
        2
      )} tons/hectare`;
    } catch (error) {
      console.error("Error:", error);
      return "Error calculating yield size.";
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Agricultural Data Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Region</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select a region</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Soil Type</label>
          <select
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select soil type</option>
            <option value="Chalky">Chalky</option>
            <option value="Clay">Clay</option>
            <option value="Loam">Loam</option>
            <option value="Sandy">Sandy</option>
            <option value="Peaty">Peaty</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Crop</label>
          <select
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select a crop</option>
            <option value="Barley">Barley</option>
            <option value="Cotton">Cotton</option>
            <option value="Maize">Maize</option>
            <option value="Rice">Rice</option>
            <option value="Soybean">Soybean</option>
            <option value="Wheat">Wheat</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Rainfall (mm)</label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Temperature (°C)</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Fertilizer Used</label>
          <select
            name="fertilizerUsed"
            value={formData.fertilizerUsed}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select fertilizer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Irrigation Used</label>
          <select
            name="irrigationUsed"
            value={formData.irrigationUsed}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select irrigation method</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Days to Harvest</label>
          <input
            type="number"
            name="daysToHarvest"
            value={formData.daysToHarvest}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      {yieldSize && <div className="mt-4 text-green-600">{yieldSize}</div>}
    </div>
  );
};

export default AgriculturalForm;
