export default function Card({ link, title, description, image }) {
  return (
    <a
      href={link}
      target="_blank"
      className="transform transition duration-1000 hover:scale-110"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg hover:bg-[#282828] cursor-pointer project-card">
        <img
          class="w-full rounded object-cover"
          src={image.src}
          alt="Sunset in the mountains"
          style={{ height: 100 }}
        />
        <div>
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </a>
  );
}
