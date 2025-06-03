import teamImage from '../../assets/team.jpeg';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kashif Maqbool',
    role: 'CEO',
    email: 'magoon33@hotmail.com',
    phone: '03008402932',
  },
  {
    name: 'Furqan Kashif',
    role: 'Sales Manager',
    email: 'furqank95@gmail.com',
    phone: '03238498256',
  },
  {
    name: 'Mustafa Kashif',
    role: 'Sourcing Manager',
    email: 'mustafaalsdf@gmail.com',
    phone: '03074024953',
  },
  {
    name: 'Maaz Kashif',
    role: 'Accounts Manager',
    email: 'mustafakshf12345@gmail.com',
    phone: '03364336527',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-6 bg-[var(--color-background-light)]" aria-label="Our Team">
      <div className="container mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div 
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 order-2 md:order-1"
            data-aos="fade-right"
          >
            <img
              src={teamImage}
              alt="Mago International Team Members"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          {/* Text Content */}
          <div className="space-y-4 order-1 md:order-2 md:ml-8" data-aos="fade-left">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-3xl font-bold text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-2 inline-block text-center">
                Our Leadership Team
              </h1>
            </div>
            <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <article key={member.name} className="mb-6 text-center md:text-left">
                  <h2 className="text-xl font-bold text-black mb-1">{member.name}</h2>
                  <div className="font-semibold text-base text-black/80 mb-1">{member.role}</div>
                  <address className="not-italic">
                    <div className="flex items-center text-base text-[var(--color-text-dark)] leading-relaxed mb-1 justify-center md:justify-start">
                      <Mail className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
                      <a href={`mailto:${member.email}`} className="hover:text-[var(--color-primary)]">{member.email}</a>
                    </div>
                    <div className="flex items-center text-base text-[var(--color-text-dark)] leading-relaxed justify-center md:justify-start">
                      <Phone className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
                      <a href={`tel:${member.phone}`} className="hover:text-[var(--color-primary)]">{member.phone}</a>
                    </div>
                  </address>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 