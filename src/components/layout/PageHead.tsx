import React from 'react';

interface PageHeadProps {
  title: string;
  description: string;
}

export default function PageHead({ title, description }: PageHeadProps) {
  React.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
