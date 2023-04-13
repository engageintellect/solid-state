import { mergeProps } from "solid-js";

interface HeroProps {
  hero: {
    name: string;
  };
}

const Hero = (props: HeroProps) => {
  return (
    <div class="">
      <div class="">
        <h3>{props.hero.name}</h3>
      </div>
    </div>
  );
};

export default Hero;
