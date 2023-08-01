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
  create: publicProcedure
    .input(
      z.object({ title: z.string().nonempty(), content: z.string().nonempty() })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.blogPost.create({
        data: { title: input.title, content: input.content },
      });
    }),
});
