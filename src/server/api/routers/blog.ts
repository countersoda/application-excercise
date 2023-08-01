import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.blogPost.findUnique({ where: { id: input.id } });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany();
  }),
});
