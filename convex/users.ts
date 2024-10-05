import { v } from "convex/values";
import { internalMutation } from "./_generated/server";


export const createUser = internalMutation({
    args:{
        clerkid: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        name: v.string(),
    }, handler: async(ctx, args)=>{
        await ctx.db.insert('users',{
            clerkid: args.clerkid,
            email: args.email,
            imageUrl: args.imageUrl,
            name: args.name,
        })
    }
})