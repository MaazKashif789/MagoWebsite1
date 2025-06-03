import React from 'react';
import spmIcon from '../../assets/services/spm.png';
import srcIcon from '../../assets/services/src.png';
import srqcIcon from '../../assets/services/srqc.png';
import csIcon from '../../assets/services/cs.png';

const Services = () => {
  const services = [
    {
      title: "SALES & PRODUCT MANAGEMENT",
      icon: spmIcon,
      points: [
        "Dedicated team of highly experienced professionals administering entire distribution process from sourcing to sales and customer service",
        "Custom-tailored solutions designed to meet customer needs",
        "Efficient warehousing of chemicals based on customers' demand cycle"
      ]
    },
    {
      title: "SOURCING",
      icon: srcIcon,
      points: [
        "Full-time teams in four locations across pakistan",
        "Daily interaction with manufacturing partners",
        "Synergy across sales offices and sourcing offices",
        "Auditing of new manufacturing partners for quality and reliability"
      ]
    },
    {
      title: "SAFETY, REGULATORY & QUALITY CONTROL",
      icon: srqcIcon,
      points: [
        "Committed to compliance with NACD Responsible Distribution",
        "Dedicated managers ensure products meet all required standards",
        "Quality control system for all product samples",
        "Compliance with all international safety and regulatory requirements"
      ]
    },
    {
      title: "CUSTOMER SERVICE",
      icon: csIcon,
      points: [
        "Dedicated regional teams focused on servicing customer orders",
        "Unique solutions based on customers' logistical requirements",
        "Proactive communication of product and shipment information with customers"
      ]
    }
  ];

  return (
    <section className="py-10 bg-[var(--color-background-light)] px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <div className="flex justify-center mb-4">
                <img src={service.icon} alt={service.title} className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-[var(--color-primary)]">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx} className="text-[var(--color-text-dark)] text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 