import { useEffect, useMemo, useState } from "react";
import { twitterServices } from "@/service/twitterServices";
import { revalidatePath } from "next/cache";

export function useGetClaimedPoint(id : string) {
  const [point, setPoint] = useState<any>(null);

  const getClaimedPoints = async () => {
    if (!id) return; 
    const response = await twitterServices.getPoints(id);
    setPoint(response);
  };

  useEffect(() => {
    getClaimedPoints();
  }, [id]);

  return useMemo(() => {
    return {
      point,getClaimedPoints
    };
  }, [point]);
}