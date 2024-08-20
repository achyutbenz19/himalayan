import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export type BlogPost = {
  id: string | number;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
  readTime?: string;
  description?: string;
};

const fetchBlogPost = (id: string): BlogPost => {
  return {
    id,
    title: "The Future of Web Development",
    author: "Jane Doe",
    date: "August 19, 2024",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    imageUrl: "/logo1.png",
    readTime: "5 min read",
    description:
      "Exploring the latest trends and technologies in web development.",
  };
};

export default function BlogIdPage({ params }: { params: { blogId: string } }) {
  const { blogId } = params;
  const post = fetchBlogPost(blogId);

  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta
          name="description"
          content={post.description || post.content.substring(0, 160)}
        />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-normal mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <Image
            src={"/logo2.png"}
            alt={post.author}
            width={40}
            height={40}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-semibold">{post.author}</p>
            <p className="text-gray-600">
              {post.date} · {post.readTime}
            </p>
          </div>
        </div>
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover mb-6 rounded-lg"
        />
        <div className="prose lg:prose-xl">
          <p>{post.content}</p>
        </div>
        <div className="mt-8">
          <Link href="/blog">
            <Button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-2xl">
              ← Back to all posts
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
