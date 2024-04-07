import { useSearchParams } from "next/navigation";
import paramChart from "../../components/paramchart";

export default function chartWrapper() {
    const searchParams = useSearchParams();
    const packageId = searchParams.get("packageId");
    const resourceId = searchParams.get("resourceId");
    const xRows = searchParams.get("xRows");
    const yRow = searchParams.get("yRow");
    const Chart = paramChart(packageId, resourceId, xRows, yRow);
      return <Chart />
  }