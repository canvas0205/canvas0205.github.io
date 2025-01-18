import Image from "next/image";

interface WorkItemProps {
  title: string;
  logo: string;
  description: string[];
  images: string[];
}

export default function WorkItem({ title, logo, description, images }: WorkItemProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <figure className="flex mb-4">
        <Image src={logo} alt="logo" width={100} height={100} />
        <figcaption className="ml-4">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </figcaption>
      </figure>
      <div className="flex mb-4 space-x-4">
        {images.map((src, index) => (
          <Image key={index} src={src} alt={`image-${index}`} width={200} height={200} />
        ))}
      </div>
    </div>
  );
}
