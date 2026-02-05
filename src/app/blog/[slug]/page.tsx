import { notFound } from 'next/navigation';
import { getPostBySlug, blogPosts } from '../../../data/blogData';
import BlogPostClient from './BlogPostClient';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Get adjacent posts for navigation
    const currentIndex = blogPosts.findIndex(p => p.slug === slug);
    const prevPost = currentIndex > 0 ? { id: blogPosts[currentIndex - 1].id, slug: blogPosts[currentIndex - 1].slug, location: blogPosts[currentIndex - 1].location } : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? { id: blogPosts[currentIndex + 1].id, slug: blogPosts[currentIndex + 1].slug, location: blogPosts[currentIndex + 1].location } : null;

    // Get related posts
    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 3)
        .map(p => ({ id: p.id, slug: p.slug, title: p.title, location: p.location, readTime: p.readTime }));

    return (
        <BlogPostClient
            post={post}
            prevPost={prevPost}
            nextPost={nextPost}
            relatedPosts={relatedPosts}
        />
    );
}
