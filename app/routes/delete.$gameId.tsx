import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";

export async function action({ params }: ActionFunctionArgs) {
  const prisma = new PrismaClient();
  try {
    if (!params.gameId) {
      return json({ error: "Missing gameId" }, { status: 400 });
    }

    await prisma.game.delete({
      where: {
        id: params.gameId,
      },
    });

    return redirect("/"); // Redirect after deletion
  } catch (error) {
    return json({ error: "Failed to delete game" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
