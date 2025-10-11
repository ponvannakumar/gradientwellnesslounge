import React from 'react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

interface SimpleServicesGridProps {
  services: Service[];
}

const SimpleServicesGrid: React.FC<SimpleServicesGridProps> = ({ services }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="service-card text-center h-full">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(90deg, #b91c1c 0%, #8a1111 88%, #111111 100%)' }}>
              {React.createElement(service.icon, { size: 32, className: 'text-white' })}
            </div>
          </div>
          <h3 className="gradient-text mb-4" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            lineHeight: '1.75rem',
            color: '#b91c1c',
            whiteSpace: 'nowrap',
            '@media (max-width: 768px)': {
              fontSize: '1rem', // Reduce font size for mobile
              lineHeight: '1.25rem',
            },
          }}>
            {service.title}
          </h3>
          <p className="text-black leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1.375rem', lineHeight: '1.75rem', color: '#050505ff' }}>
            {service.description}
          </p>

        </div>
      ))}
    </div>
  );
};

export default SimpleServicesGrid;
