import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Sección de blog en duda",
    paragraph:
      "Será que dejamos esto?.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Joaquín Osio (CEO)",
      image: "/images/blog/author-01.png",
      designation: "Owner",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "In Progress...",
    paragraph:
      "Changing this things...",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Develop Team",
      image: "/images/blog/author-02.png",
      designation: "Developer",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "In Progress...",
    paragraph:
      "In Progress...",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Develop Team",
      image: "/images/blog/author-03.png",
      designation: "Developer",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
