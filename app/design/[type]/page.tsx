import Commercial from "@/components/Projects/Commercial";
import Residential from "@/components/Projects/Residential";

const page = async ({ params }: { params: Promise<{ type: string }> }) => {
  const { type } = await params;
  if (type === "residential") {
    return <Residential />;
  } else if (type === "commercial") {
    return <Commercial />;
  }
};

export default page;
