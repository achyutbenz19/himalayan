import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Flavors of the Himalayas",
      author: "Manu Arora",
      readTime: "5 min read",
      date: "August 18, 2024",
      description:
        "Discover the rich and diverse flavors that the Himalayan region has to offer, from spicy curries to sweet delicacies.",
      image:
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    },
    {
      id: 2,
      title: "The Art of Himalayan Cooking",
      author: "Nina Sharma",
      readTime: "4 min read",
      date: "August 10, 2024",
      description:
        "Learn the secrets of Himalayan cooking, a blend of aromatic spices and traditional techniques passed down through generations.",
      image:
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    },
    {
      id: 3,
      title: "Traditional Dishes from the Mountain Region",
      author: "Rajesh Singh",
      readTime: "6 min read",
      date: "July 25, 2024",
      description:
        "Explore the traditional dishes of the Himalayan region, known for their unique flavors and health benefits.",
      image:
        "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
    },
  ];

  return (
    <main className="flex-1 md:mt-12 px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto grid gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href="#"
            className="grid grid-cols-[120px_1fr] gap-4 items-start hover:bg-muted/10 rounded-2xl p-4 transition-colors"
            prefetch={false}
          >
            <Image
              src={blog.image}
              width={120}
              height={80}
              alt={blog.title}
              className="rounded-2xl object-cover"
              style={{ aspectRatio: "120/80", objectFit: "cover" }}
            />
            <div>
              <h2 className="text-lg font-medium">{blog.title}</h2>
              <p className="text-sm text-muted-foreground">
                {blog.description}
              </p>
              <div className="text-sm text-muted-foreground">
                <span>{blog.author}</span> &middot; <span>{blog.date}</span>{" "}
                &middot; <span>{blog.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
