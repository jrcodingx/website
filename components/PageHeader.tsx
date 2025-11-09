
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">{title}</h1>
      <p className="text-lg text-text-secondary max-w-3xl mx-auto">{subtitle}</p>
    </section>
  );
};

export default PageHeader;
