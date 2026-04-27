import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// ১. মঙ্গোডিবি কানেকশন হ্যান্ডলিং (Vercel-এ বারবার কানেকশন লিক রোধ করতে)
const client = new MongoClient(process.env.DB_URI);
const db = client.db("dragonNews");

export const auth = betterAuth({
    // ২. URL কনফিগারেশন
    baseURL: process.env.BETTER_AUTH_URL || "https://dragon-news-tau-ten.vercel.app",

    // ৩. ডাটাবেজ অ্যাডাপ্টার
    database: mongodbAdapter(db, {
        client: client
    }),

    emailAndPassword: {
        enabled: true,
    },

    // ৪. প্রোডাকশন ডোমেইন ট্রাস্টেড লিস্ট
    trustedOrigins: [
        "http://localhost:3000",
        "https://dragon-news-tau-ten.vercel.app",
    ],

    // ৫. সোশ্যাল প্রোভাইডার (Error handling সহ)
    socialProviders: {
        google: {
            // || "" যোগ করা হয়েছে যাতে ভেরিয়েবল মিসিং থাকলেও বিল্ড ক্রাশ না করে
            clientId: process.env.GOOGLE_ClIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        },
        github: {
            clientId: process.env.GITHUB_ClIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});