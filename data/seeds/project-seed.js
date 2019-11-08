exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project").insert([
    {
      id: 0,
      project_name: "Safety",
      description: "Importance of safety in Industries"
    },
    { id: 0, project_name: "Politics", description: "Political parties" }
  ]);
};
