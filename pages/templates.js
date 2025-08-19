import TemplateCard from "../components/TemplateCard"

export default function Templates() {
  // Sample template data grouped by categories
  const categories = [
    {
      name: "Business",
      templates: [
        { id: 1, title: "Business Pro", image: "/templates/business1.jpg" },
        { id: 2, title: "Business Lite", image: "/templates/business2.jpg" },
      ],
    },
    {
      name: "Doctor",
      templates: [
        { id: 3, title: "Doctor Care", image: "/templates/doctor1.jpg" },
        { id: 4, title: "Clinic Plus", image: "/templates/doctor2.jpg" },
      ],
    },
    {
      name: "Restaurant",
      templates: [
        { id: 5, title: "Restaurant Deluxe", image: "/templates/restaurant1.jpg" },
        { id: 6, title: "Cafe Modern", image: "/templates/restaurant2.jpg" },
      ],
    },
    {
      name: "SaaS",
      templates: [
        { id: 7, title: "SaaS Starter", image: "/templates/saas1.jpg" },
        { id: 8, title: "SaaS Pro", image: "/templates/saas2.jpg" },
      ],
    },
    {
      name: "Portfolio",
      templates: [
        { id: 9, title: "Portfolio Modern", image: "/templates/portfolio1.jpg" },
        { id: 10, title: "Portfolio Classic", image: "/templates/portfolio2.jpg" },
      ],
    },
  ]

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-center mb-8">Templates</h1>

      {categories.map((cat) => (
        <section key={cat.name}>
          <h2 className="text-2xl font-semibold mb-6">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cat.templates.map((temp) => (
              <TemplateCard key={temp.id} title={temp.title} image={temp.image} />
            ))}
          </div>
        </section>
      ))}

    </div>
  )
}
