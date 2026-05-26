import { generateAI } from "./aiService";

export async function analyzeGarment(
  fileName: string,
  width: number,
  height: number
) {
  return generateAI(`
Analyze this garment file for FabricAI Pro.

File name: ${fileName}
Image width: ${width}
Image height: ${height}

Return a practical garment manufacturing analysis with:

1. Garment/category assumption
2. Fabric consumption considerations
3. BOM items
4. Costing considerations
5. Cutting and marker efficiency suggestions
6. Production risks
7. Factory action steps
`);
}