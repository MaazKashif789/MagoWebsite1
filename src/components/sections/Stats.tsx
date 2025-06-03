// src/components/sections/Stats.tsx
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <section id="stats" className="py-10 bg-[var(--color-background-light)]">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] text-center mb-8">
          Our Records
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="p-4 md:p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <CountUp end={1000} duration={2.5} />+
            </h3>
            <p className="text-neutral-dark text-base md:text-lg">Total Clients</p>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <CountUp end={5000} duration={2.5} />+
            </h3>
            <p className="text-neutral-dark text-base md:text-lg">Orders Completed</p>
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              <CountUp end={100} duration={2.5} />+
            </h3>
            <p className="text-neutral-dark text-base md:text-lg">Total Suppliers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;