export default function Card({ link, title, description, image }) {
  return (
    <a
      href={link}
      target="_blank"
      className="transform transition duration-500 hover:scale-105"
    >
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg hover:bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 animate-gradient-x p-2 cursor-pointer scale-101 project-card">
        <img
          class="w-full rounded-lg object-cover"
          src={image.src}
          alt="Sunset in the mountains"
          style={{ height: 110 }}
        />
        <div class="pl-0.5">
          <div class="font-bold text-xl mt-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </a>
  );
}
