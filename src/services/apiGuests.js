import { PAGE_SIZE } from "../utils/constants";
import supabase from "./supabase";

export async function getGuests({ page }) {
  let query = supabase.from("guests").select("*", { count: "exact" });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) throw new Error("Guests could not be loaded.");

  return { data, count };
}

export async function addEditGuest(newGuest, id) {
  let query = supabase.from("guests");

  if (!id) query = query.insert([{ ...newGuest }]);

  if (id) query = query.update({ ...newGuest }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("Guest could not be created");

  return data;
}

export async function deleteGuest(id) {
  const { data, error } = await supabase.from("guests").delete().eq("id", id);

  if (error) throw new Error("Guest could not be deleted");

  return data;
}
