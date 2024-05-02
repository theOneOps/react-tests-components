import bathroom from "./assets/bathroom.jpg";
import bedroom from "./assets/bedroom.jpg";
import kitchen from "./assets/kitchen.jpg";
import sitting from "./assets/sitting-room.jpg";
import work from "./assets/work-desk.jpg";

export default function getImages() {
  type imageType = {
    title: string;
    alt: string;
    src: string;
  };

  type allImages = imageType[];

  const obj: allImages = [
    {
      title: "bathroom",
      alt: "bathroom-image",
      src: bathroom,
    },
    {
      title: "bedroom",
      alt: "bedroom-image",
      src: bedroom,
    },
    {
      title: "kitchen",
      alt: "kitchen-image",
      src: kitchen,
    },

    {
      title: "sitting-room",
      alt: "sitting-room-image",
      src: sitting,
    },

    {
      title: "work-desk",
      alt: "work-desk-image",
      src: work,
    },
  ];

  return obj;
}
