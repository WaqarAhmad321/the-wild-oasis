import supabase from "./supabase";

export async function getGuests() {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) throw new Error("Guests could not be loaded.");

  return data;
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
