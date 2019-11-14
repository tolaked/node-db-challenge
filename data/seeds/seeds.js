exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("p_r")
      .truncate()
      .then(() => knex("resources").truncate())
      .then(() => knex("tasks").truncate())
      .then(() => knex("projects").truncate())
      .then(() => {
        return knex("projects").insert([
          {
            id: 1,
            name: "Greetings",
            description: "Hello there!!!"
          },
          {
            id: 2,
            name: "Education",
            description: "Education is not the only key to success"
          },
          {
            id: 3,
            name: "Preach to the people",
            description: "Preach"
          }
        ]);
      })
      .then(() => {
        return knex("resources").insert([
          { id: 1, name: "music", description: " Music is life" },
          {
            id: 2,
            name: "Blueprint",
            description: "For directing the schema to build from scratch."
          },
          { id: 3, name: "Paint", description: "an array of colors available" },
          { id: 4, name: "shoes", description: "nice wears" },
          {
            id: 5,
            name: "Universities",
            description: "Higher institutions"
          }
        ]);
      })
      .then(() => {
        return knex("p_r").insert([
          { project_id: 1, resource_id: 1, location: "Lagos" },
          { project_id: 1, resource_id: 2, location: "Island" },
          { project_id: 2, resource_id: 3, location: "Ibadan" },
          { project_id: 2, resource_id: 4, location: "Ikeja" },
          { project_id: 3, resource_id: 5, location: "Banana island" },
          { project_id: 3, resource_id: 6, location: "Ikoyi" }
        ]);
      })
      //insert tasks here
      .then(() => {
        return knex("tasks").insert([
          {
            project_id: 1,
            description: "watch match",
            notes: "man united game"
          },
          {
            project_id: 1,
            description: "Read",
            notes: "Read for exams."
          },
          {
            project_id: 3,
            description: "shopping",
            notes: "Buy cooking untensils!"
          },
          {
            project_id: 3,
            description: "Play",
            notes: "Play tennis"
          },
          {
            project_id: 3,
            description: "Facilitate",
            notes: "Tutorials with the students"
          }
        ]);
      })
  );
};
