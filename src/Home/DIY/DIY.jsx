

const ToyDIYProjects = () => {
  const projects = [
    {
      title: 'Cardboard Castle',
      image: 'https://www.kixcereal.com/wp-content/uploads/2014/07/recycled-cardboard-castle-craft-2.jpg',
      description: 'Build a magnificent castle using cardboard boxes and paint.',
    },
    {
      title: 'Paper Airplane Race',
      image: 'https://i.ibb.co/XsBnZfN/Full-paper-airplane-instructions-tutorial-with-astrobright-colored-teal-paper.jpg',
      description: 'Organize a fun paper airplane race with your friends and see whose plane flies the farthest.',
    },
    {
      title: 'Sock Puppets',
      image: 'https://supersimple.com/wp-content/uploads/2022/04/p1320503-1200w.jpg',
      description: 'Create your own adorable sock puppets and put on a puppet show.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Toy DIY Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyDIYProjects;
