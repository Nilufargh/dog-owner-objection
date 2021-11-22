
exports.seed = async function(knex) {

  await knex("dog_owner").del()
  await knex("dog").del()
  await knex("owner").del()
  
  const Ashkan_id = await knex("owner").insert({
    name: "Ashkan"
  }).returning("id")
  const Nil_id = await knex("owner").insert({
    name: "Nil"
  }).returning("id")

  const Fidel_id = await knex("dog").insert({
    name: "Fidel"
  }).returning("id")
  const Bugzi_id = await knex("dog").insert({
    name: "Bugzi"
  }).returning("id")
  
  await knex("dog_owner").insert([{
    owner_id:Ashkan_id,
    dog_id:Fidel_id},
  {
    owner_id:Ashkan_id,
    dog_id:Bugzi_id
  },{
    owner_id:Nil_id,
    dog_id:Bugzi_id
  }
])
  
  console.log(Ashkan_id,Nil_id,Bugzi_id,Fidel_id)

  return True
};

