import { Link } from 'react-router-dom';
import {
  Bell, BookOpen, CalendarCheck, Coffee, CreditCard, FileText,
  Heart, Home as HomeIcon, MessageSquare, Moon, Play, Shield,
  Sparkles, Star, Users, Utensils,
} from 'lucide-react';
import { RoseberyPlayHero } from '@/components/RoseberyPlayHero';
import { Button } from '@/components/ui/Button';

const dayStages = [
  { title: 'Arrival', icon: HomeIcon, desc: 'A calm welcome, familiar faces and gentle settling in.' },
  { title: 'Breakfast', icon: Coffee, desc: 'Warm routines and healthy starts where applicable.' },
  { title: 'Learning', icon: BookOpen, desc: 'Small-group discovery through stories, sounds and play.' },
  { title: 'Play', icon: Sparkles, desc: 'Blocks, role play and creative movement shaped by each child.' },
  { title: 'Lunch', icon: Utensils, desc: 'A steady pause for food, conversation and care.' },
  { title: 'Quiet Time', icon: Moon, desc: 'Soft spaces for rest, comfort and reset.' },
  { title: 'Creative Activities', icon: Star, desc: 'Painting, making, building and confident expression.' },
  { title: 'Home Time', icon: Heart, desc: 'Clear updates so parents know how the day unfolded.' },
];

const insideCards = [
  { title: 'Story Time', label: 'Care Moment', caption: 'Language, confidence and calm connection.' },
  { title: 'Creative Learning', label: 'Discovery', caption: 'Hands-on play that feels joyful and purposeful.' },
  { title: 'Healthy Meals', label: 'Daily Routine', caption: 'Food routines handled with warmth and attention.' },
  { title: 'Parent Updates', label: 'Parent Update', caption: 'Transparent communication after everyday moments.' },
  { title: 'Quiet Spaces', label: 'Comfort', caption: 'Gentle corners for rest and emotional regulation.' },
  { title: 'Small Group Care', label: 'Small Group', caption: 'Children known by name, rhythm and need.' },
];

const portalItems = [
  { title: 'Daily Updates', icon: Bell },
  { title: 'Attendance', icon: CalendarCheck },
  { title: 'Invoices', icon: CreditCard },
  { title: 'Messages', icon: MessageSquare },
  { title: 'Activities', icon: Sparkles },
  { title: 'Announcements', icon: FileText },
];

const childminders = [
  { name: 'Maryam Ibrahim', quals: 'DBS, safeguarding, first aid', experience: '8 years', group: 'Up to 12', values: 'Calm routines, stories, belonging' },
  { name: 'Khadija Noor', quals: 'Early years, food hygiene', experience: '6 years', group: 'Up to 10', values: 'Creative play, confidence, care' },
  { name: 'Amina Farooq', quals: 'First aid, SEND awareness', experience: '7 years', group: 'Up to 8', values: 'Small groups, trust, gentle learning' },
];

const reasons = [
  { title: 'Safe', icon: Shield, desc: 'Safeguarding, risk assessments and clear house procedures.' },
  { title: 'Small Groups', icon: Users, desc: 'Independent childminders create warmer group relationships.' },
  { title: 'Flexible', icon: CalendarCheck, desc: 'Sessions are shaped around availability and setup approval.' },
  { title: 'Community-Focused', icon: Heart, desc: 'Operating under Liverpool Muslim Society for local benefit.' },
  { title: 'Digital Updates', icon: Bell, desc: 'Parent portal previews make care visible and transparent.' },
  { title: 'Professional Support', icon: FileText, desc: 'Admin, room allocation, invoices and shared systems.' },
];

const futurePlans = ['Holiday Club', 'Nursery', 'Training', 'Apprenticeships', 'Community Hub'];

export function HomePage() {
  return (
    <>
      <RoseberyPlayHero />
      <IntroSection />
      <DayAtRosebery />
      <InsideRosebery />
      <ParentPortalPreview />
      <MeetChildminders />
      <WhyParentsChoose />
      <FutureVision />
      <FinalCta />
    </>
  );
}

function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="font-display text-sm uppercase tracking-[0.28em] text-rose">{eyebrow}</p>
      <h2 className="mt-3 font-display text-5xl leading-[0.92] text-berry md:text-7xl">{title}</h2>
      {children && <div className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-berry/68 md:text-lg">{children}</div>}
    </div>
  );
}

function IntroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-cream py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(230,90,122,0.12),transparent_28rem),radial-gradient(circle_at_88%_68%,rgba(167,199,163,0.18),transparent_30rem)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="font-display text-rose">care, play, grow</p>
          <h2 className="mt-3 font-display text-6xl leading-[0.9] text-berry md:text-8xl">
            HELLO!<br />WE ARE ROSEBERY
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-berry/70">
            Rosebery is a facility-based childminding hub operating under Liverpool Muslim Society,
            designed to support families and independent childminders through safe spaces,
            clear coordination and community values.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {['Warm rooms', 'Trusted routines', 'Parent clarity', 'Community care'].map((label, index) => (
            <div key={label} className="liquid-glass min-h-[220px] rounded-[34px] p-6 text-berry hover-lift">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/70 text-rose shadow-lg">
                <Sparkles className="h-7 w-7" />
              </div>
              <p className="font-display text-3xl">{label}</p>
              <p className="mt-3 text-sm leading-relaxed text-berry/62">Designed to feel calm, transparent and parent-friendly from the first visit.</p>
              <p className="mt-8 font-display text-5xl text-berry/8">0{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DayAtRosebery() {
  return (
    <section className="section-pad surface-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="A Day At Rosebery" title="A rhythm children can trust">
          Every day is built around warmth, safety, small-group attention and simple routines parents can understand.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dayStages.map((stage, index) => (
            <div key={stage.title} className="liquid-glass group rounded-[32px] p-6 text-berry transition-smooth hover:-translate-y-2 hover:bg-white/28">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/70 text-rose shadow-lg">
                  <stage.icon className="h-7 w-7" />
                </div>
                <span className="font-display text-4xl text-berry/12">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="mt-10 aspect-[4/3] rounded-[28px] bg-gradient-to-br from-white/70 via-cream/80 to-sky/20 p-4 shadow-inner">
                <div className="flex h-full items-end rounded-[22px] bg-[radial-gradient(circle_at_30%_20%,rgba(230,90,122,0.22),transparent_8rem)] p-4">
                  <p className="font-display text-3xl text-berry">{stage.title}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-berry/68">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsideRosebery() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Inside Rosebery" title="Video-first care moments">
          Designed thumbnail cards give parents a feeling for the day without using random stock images or real children's faces.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {insideCards.map((card, index) => (
            <div key={card.title} className="liquid-glass group rounded-[32px] p-4 text-white transition-smooth hover:-translate-y-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-gradient-to-br from-rose/55 via-beige/70 to-sky/45 p-5">
                <div className="absolute inset-0 animate-slow-pan bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.48),transparent_12rem),radial-gradient(circle_at_80%_80%,rgba(122,31,77,0.22),transparent_14rem)]" />
                <div className="absolute left-5 top-5 rounded-full bg-white/25 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-xl">{card.label}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/22 shadow-2xl ring-1 ring-white/45 transition-smooth group-hover:scale-110">
                    <Play className="ml-1 h-9 w-9 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[24px] bg-white/18 p-4 backdrop-blur-xl ring-1 ring-white/25">
                  <p className="font-display text-3xl">{card.title}</p>
                  <p className="mt-1 text-sm text-white/82">{card.caption}</p>
                </div>
                <span className="absolute right-5 top-5 font-display text-5xl text-white/16">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParentPortalPreview() {
  return (
    <section className="section-pad relative overflow-hidden bg-berry text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,90,122,0.32),transparent_26rem),radial-gradient(circle_at_80%_70%,rgba(169,216,245,0.22),transparent_28rem)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="font-display text-sm uppercase tracking-[0.28em] text-rose">Parent Portal Preview</p>
          <h2 className="mt-3 font-display text-5xl leading-[0.92] md:text-7xl">Modern clarity for busy parents</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/76">
            A beautiful portal preview shows the kind of transparency parents expect: daily updates,
            attendance, invoices, messages, activities and announcements.
          </p>
        </div>
        <div className="relative mx-auto flex min-h-[560px] w-full max-w-[620px] items-center justify-center">
          <PhoneMock className="left-0 top-16 rotate-[-8deg] scale-90 opacity-85" title="Daily Updates" />
          <PhoneMock className="z-10" title="Attendance" primary />
          <PhoneMock className="right-0 top-20 rotate-[8deg] scale-90 opacity-85" title="Invoices" />
        </div>
      </div>
    </section>
  );
}

function PhoneMock({ className, title, primary }: { className?: string; title: string; primary?: boolean }) {
  return (
    <div className={`absolute h-[520px] w-[255px] rounded-[44px] border border-white/35 bg-white/14 p-3 shadow-2xl backdrop-blur-2xl ${className ?? ''}`}>
      <div className="h-full rounded-[34px] bg-cream p-4 text-berry">
        <div className="mx-auto mb-5 h-6 w-24 rounded-full bg-berry/12" />
        <p className="font-display text-3xl">{title}</p>
        <div className="mt-5 space-y-3">
          {(primary ? portalItems : portalItems.slice(0, 4)).map((item) => (
            <div key={item.title} className="rounded-3xl bg-white/80 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose/12 text-rose">
                  <item.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MeetChildminders() {
  return (
    <section className="section-pad surface-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Meet Our Childminders" title="Independent providers, shared values">
          Profile cards show the model clearly: childminders operate independently within Rosebery's supported premises.
        </SectionHeader>
        <div className="grid gap-6 lg:grid-cols-3">
          {childminders.map((person) => (
            <div key={person.name} className="liquid-glass rounded-[32px] p-7 text-berry hover-lift">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-br from-rose to-berry font-display text-3xl text-white shadow-xl">
                  {person.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div>
                  <h3 className="font-display text-3xl">{person.name}</h3>
                  <p className="text-sm font-semibold text-rose">Independent childminder</p>
                </div>
              </div>
              <div className="mt-8 grid gap-3 text-sm">
                <InfoRow label="Qualifications" value={person.quals} />
                <InfoRow label="Experience" value={person.experience} />
                <InfoRow label="Group size" value={person.group} />
                <InfoRow label="Values" value={person.values} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/50 p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-berry/45">{label}</p>
      <p className="mt-1 font-semibold text-berry">{value}</p>
    </div>
  );
}

function WhyParentsChoose() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Why Parents Choose Rosebery" title="Safe, modern, transparent">
          The site should feel like the service: calm, professional, community-rooted and emotionally warm.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="liquid-glass rounded-[30px] p-6 text-berry hover-lift">
              <reason.icon className="h-8 w-8 text-rose" />
              <h3 className="mt-8 font-display text-4xl">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-berry/66">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureVision() {
  return (
    <section className="section-pad surface-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Future Vision" title="Growing with the community">
          These are future plans only, subject to approval, setup, funding, staffing and legal requirements.
        </SectionHeader>
        <div className="grid gap-5 md:grid-cols-5">
          {futurePlans.map((plan) => (
            <div key={plan} className="liquid-glass rounded-[30px] p-5 text-center text-berry">
              <span className="inline-flex rounded-full bg-rose/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose">Future plan</span>
              <h3 className="mt-8 font-display text-3xl">{plan}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden gradient-rose py-24 text-white">
      <div className="absolute inset-0 animate-slow-pan bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.24),transparent_28rem),radial-gradient(circle_at_80%_70%,rgba(169,216,245,0.20),transparent_28rem)]" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-sm uppercase tracking-[0.28em] text-white/76">Begin Here</p>
        <h2 className="mt-4 font-display text-6xl leading-[0.9] md:text-8xl">READY TO BEGIN WITH ROSEBERY?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/78">
          Register your interest or apply as a childminder and become part of a community-led childcare model.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link to="/register-interest"><Button variant="secondary" size="lg" className="w-full sm:w-auto">Register Your Child</Button></Link>
          <Link to="/become-a-childminder"><Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10 hover:text-white sm:w-auto">Become a Childminder</Button></Link>
          <Link to="/contact"><Button variant="ghost" size="lg" className="w-full text-white hover:bg-white/12 sm:w-auto">Contact Us</Button></Link>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {['Liverpool Muslim Society', 'Facility-based hub', 'Parent enquiry support'].map((item) => (
            <div key={item} className="liquid-glass rounded-[28px] p-5 text-white">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
