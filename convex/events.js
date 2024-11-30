import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("events").order("desc").collect();
  },
});

export const createEvent = mutation({
  args: {
    name: v.string(),
    date: v.string(),
    description: v.string(),
    location: v.string(),
    organizer: v.string(),
  },
  handler: async (ctx, args) => {
    const event = {
      name: args.name,
      date: args.date,
      description: args.description,
      location: args.location,
      organizer: args.organizer,
    };
    const newEvent = await ctx.db.insert("events", event);

    return await ctx.db.get(newEvent);
  },
});

export const deleteEvent = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
