export default function ProjectCard({ title, description, imageUrl, link }: { title: string, description: string, imageUrl: string, link?: string }) {
    const CardContent = (
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 min-h-[96px]">{description}</p>
        </div>
      </div>
    );
    return link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    ) : (
      <div className="block cursor-default">
        {CardContent}
      </div>
    );
}