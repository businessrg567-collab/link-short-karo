import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blogData'
import { businessIdeasArticles } from '@/data/businessIdeasData'
import { onlineShopArticles } from '@/data/onlineShopData'
import { loanGuideArticles } from '@/data/loanGuideData'
import { locationArticles } from '@/data/locationBusinessData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://moneygen.online'

    const staticPages = [
        '',
        '/small-business-ideas',
        '/online-shop-ideas',
        '/loan-credit-card-guide',
        '/budget-planner',
        '/business-profit-calculator',
        '/loan-emi-calculator',
        '/savings-goal-calculator',
        '/gst-calculator',
        '/sip-calculator',
        '/blog',
        '/about',
        '/contact',
        '/privacy',
        '/terms',
        '/disclaimer',
        '/locations',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const blogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    const businessPages = businessIdeasArticles.map((article) => ({
        url: `${baseUrl}/small-business-ideas/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const shopPages = onlineShopArticles.map((article) => ({
        url: `${baseUrl}/online-shop-ideas/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const loanPages = loanGuideArticles.map((article) => ({
        url: `${baseUrl}/loan-credit-card-guide/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const locationPages = locationArticles.map((article) => ({
        url: `${baseUrl}/locations/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [
        ...staticPages, 
        ...blogPages, 
        ...businessPages, 
        ...shopPages, 
        ...loanPages, 
        ...locationPages
    ]
}
