
exports.up = async function(knex) {
    await knex.schema.createTable("dog", table =>{
        table.increments()
        table.string("name")
    })

    await knex.schema.createTable("owner", table =>{
        table.increments()
        table.string("name")
    })

    await knex.schema.createTable("dog_owner", table =>{
        table.increments()
        table.integer("dog_id").refrences("id").inTable("dog")
        table.integer("owner_id").refrences("id").inTable("owner")
    })
    return true
  
};

exports.down = async function(knex) {
    //we should first drop the join-table
    await knex.schema.dropTableIfExists("dog_owner");
    await knex.schema.dropTableIfExists("dog");
    await knex.schema.dropTableIfExists("owner");

    return True
  
};
