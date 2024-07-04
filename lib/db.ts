"use server";

import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
import process from 'process'

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function insertUser(email: string){
    const result = supabase.from("users").insert({
        email: email
    });

    console.log(result)
}

export async function getCount(){
    const {count, error} = await supabase.from("users").select("*", {
        count: "estimated",
        head: true
    });
    return count as number;
}