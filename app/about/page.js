import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function About() {
  const bandMembers = [
    {
      name: "Luna Rivers",
      role: "Lead Vocals & Guitar",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
      bio: "Luna's ethereal voice and intricate guitar work form the backbone of our sound. Growing up in the Pacific Northwest, she draws inspiration from the region's mystical landscapes."
    },
    {
      name: "Ash Bennett",
      role: "Drums & Percussion",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      bio: "Ash brings rhythm and heart to our music, blending traditional percussion with innovative electronic elements."
    },
    {
      name: "River Chen",
      role: "Bass & Synth",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "River's deep bass lines and atmospheric synth create the dreamy foundation of our sound."
    },
    {
      name: "Sky Martinez",
      role: "Keys & Backing Vocals",
      image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d",
      bio: "Sky's classical piano training and ethereal harmonies add layers of complexity to our arrangements."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee"
            alt="Band performing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate/80 to-mauve/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center text-linen z-10">
          <h1 className="font-amatic font-bold text-6xl mb-6">Our Story</h1>
          <p className="font-lato text-xl mb-8 max-w-2xl mx-auto">
            From misty coffee shops to festival stages, our journey is a testament to the power of dreams and determination
          </p>
        </div>
      </section>

      {/* Band Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="font-lato text-lg text-slate leading-relaxed mb-6">
              The Wandering Echoes began as a chance encounter at a rain-soaked music festival in 2022. 
              Luna's impromptu acoustic performance drew a crowd, including fellow musicians Ash, River, and Sky. 
              What started as an informal jam session evolved into something magical.
            </p>
            <p className="font-lato text-lg text-slate leading-relaxed mb-6">
              Our sound emerged from the misty corners of the Pacific Northwest, where dreams and reality intertwine. 
              We weave together threads of folk tradition with modern dream-pop sensibilities, creating a tapestry of 
              sound that reflects the landscapes that inspired us.
            </p>
            <p className="font-lato text-lg text-slate leading-relaxed">
              Today, we continue to push the boundaries of our music, experimenting with new sounds while staying true 
              to our roots. Each performance is a journey, and we invite our listeners to wander with us through the 
              echoes of our shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-20 px-4 bg-slate/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate text-center">Meet the Band</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <div key={index} className="bg-white/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-amatic font-bold text-2xl mb-1 text-slate">{member.name}</h3>
                  <p className="text-sm text-mauve mb-3">{member.role}</p>
                  <p className="font-lato text-slate text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-amatic font-bold text-4xl mb-12 text-slate text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative aspect-video w-full md:w-1/2 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1501612780327-45045538702b"
                  alt="Early days"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-amatic font-bold text-2xl mb-2 text-slate">2022 - The Beginning</h3>
                <p className="font-lato text-slate">First meeting at Rainforest Music Festival, followed by months of late-night rehearsals and songwriting sessions.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="relative aspect-video w-full md:w-1/2 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
                  alt="First album"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-amatic font-bold text-2xl mb-2 text-slate">2023 - Echo Chamber</h3>
                <p className="font-lato text-slate">Release of our debut album, followed by our first West Coast tour.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative aspect-video w-full md:w-1/2 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
                  alt="Festival performance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="font-amatic font-bold text-2xl mb-2 text-slate">2024 - Breaking Through</h3>
                <p className="font-lato text-slate">Headline performances at major festivals and release of our sophomore album "Midnight Reverie".</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
