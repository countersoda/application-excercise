import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.blogPost.findUnique({ where: { id: input.id } });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPost.findMany({ orderBy: { createdAt: "desc" } });
  }),
  create: publicProcedure
    .input(
      z.object({ title: z.string().nonempty(), content: z.string().nonempty() })
    )
    .mutation(async ({ ctx, input }) => {
      const blogPost = await ctx.prisma.blogPost.create({
        data: { title: input.title, content: input.content },
      });
      return blogPost.id;
    }),
  update: publicProcedure
    .input(
      z.object({
        title: z.string().nonempty(),
        content: z.string().nonempty(),
        id: z.string().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const blogPost = await ctx.prisma.blogPost.update({
        where: { id: input.id },
        data: { title: input.title, content: input.content },
      });
      return blogPost.id;
    }),
  delete: publicProcedure
    .input(
      z.object({
        id: z.string().nonempty(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const blogPost = await ctx.prisma.blogPost.delete({
        where: { id: input.id },
      });
      return blogPost.id;
    }),
});
