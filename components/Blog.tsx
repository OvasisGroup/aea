'use client';

import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { truncateText } from '@/lib/utils';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Corporate Governance Training Highlights',
      description:
        'We are excited to share highlights from our recent Transformative Directors Corporate Governance Training. This impactful event, organized by TransCentury Plc and facilitated by Strathmore University Business School, united visionary leaders eager to enhance their governance skills. Participants engaged in interactive sessions on Environmental, Social, and Governance (ESG) practices, gaining insights into the regulatory landscape and effective leadership. A heartfelt thank you to all facilitators and participants for contributing to the success of this event! Together, we are dedicated to fostering strong leadership and ethical governance in our organizations. ',
      image: '/images/sbs_training.jpeg',
      link: '/blog/post1',
    },
    {
      id: 2,
      title: 'Blog Post Title 1',
      description:
        'We are excited to share highlights from our recent Transformative Directors Corporate Governance Training...',
      image: '/images/sbs_training.jpeg',
      link: '/blog/post1',
    },
    {
      id: 3,
      title: 'Blog Post Title 1',
      description:
        'We are excited to share highlights from our recent Transformative Directors Corporate Governance Training...',
      image: '/images/sbs_training.jpeg',
      link: '/blog/post1',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-6">
      <motion.div
        className="md:flex items-center justify-between my-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.h2
          className="md:text-3xl font-black"
          variants={fadeUp}
        >
          Explore Our Insights and Expert Advice
        </motion.h2>
        <motion.div variants={fadeUp}>
          <Link
            href="/blog"
            className="text-white bg-primary flex gap-2 items-center justify-center px-6 py-3 mt-4"
          >
            View All <ArrowRightIcon />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-6"
            variants={fadeUp}
          >
            <Image
              src={post.image}
              width={1000}
              height={500}
              alt={post.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-black mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">
              {truncateText(post.description, 150)}
            </p>
            <Link
              href={post.link}
              className="text-primary hover:underline flex items-center gap-2"
            >
              Read More <ArrowRightIcon/>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
