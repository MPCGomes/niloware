import Head from 'next/head';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "default, keywords",
    ogTitle = title,
    ogDescription = description,
    ogImage = '/default-og-image.jpg',
    ogUrl = 'https://your-default-url.com'
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:site_name" content="Your Site Name" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle} />
            <meta name="twitter:description" content={ogDescription} />
            <meta name="twitter:image" content={ogImage} />
        </Head>
    );
};

export default SEO;
