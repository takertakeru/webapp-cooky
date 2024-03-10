import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import View from "./view-recipe";

const RecipeView = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <>
      <View />
    </>
  );
};

export default RecipeView;
