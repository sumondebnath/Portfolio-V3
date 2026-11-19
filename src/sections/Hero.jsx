import Avatar from '../components/common/Avatar';
import Container from '../components/common/Container';
import Reveal from '../components/common/Reveal';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="pb-8 pt-16 md:pt-24"
    >
      <Container className="grid grid-cols-1 md:flex md:items-center md:justify-between md:gap-12">
        <div className="contents min-w-0 md:flex md:flex-col">
          <Reveal className="order-1">
            <p className="text-sm font-medium text-primary">{profile.greeting}</p>
          </Reveal>
          <Reveal className="order-3 min-w-0">
            <h1
              id="hero-title"
              className="mt-3 text-[2rem] font-bold leading-[1.1] tracking-[-0.03em] text-ink md:text-[3rem] lg:text-[3.5rem]"
            >
              {profile.name}
            </h1>
            <p className="mt-4 text-[15px] font-semibold text-primary">{profile.role}</p>
            <p className="mt-2 max-w-[34rem] text-sm leading-[1.7] text-muted">
              {profile.intro}
            </p>
          </Reveal>
        </div>
        <Reveal
          delay={120}
          className="order-2 mb-1 mt-4 shrink-0 justify-self-center md:order-none md:my-0"
        >
          <Avatar
            name={profile.name}
            image={profile.image}
            alt={`Portrait of ${profile.name}`}
            loading="eager"
            className="size-24 text-2xl md:size-28 md:text-[1.75rem]"
          />
        </Reveal>
      </Container>
    </section>
  );
}