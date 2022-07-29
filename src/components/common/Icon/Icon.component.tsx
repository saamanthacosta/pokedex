import { IconType, Props } from "./Icon.props";
import {
  BugIcon,
  DarkIcon,
  DragonIcon,
  ElectricIcon,
  FightingIcon,
  FireIcon,
  FlyingIcon,
  GhostIcon,
  GrassIcon,
  GroundIcon,
  IceIcon,
  LightIcon,
  PoisonIcon,
  PsychicIcon,
  RockIcon,
  WaterIcon,
} from "./Icon.style";

const Icon = (props: Props) => {
  const { type, ...rest } = props;

  const iconTypes: IconType = {
    Fire: <FireIcon {...rest} />,
    Flying: <FlyingIcon {...rest} />,
    Ice: <IceIcon {...rest} />,
    Psychic: <PsychicIcon {...rest} />,
    Water: <WaterIcon {...rest} />,
    Ground: <GroundIcon {...rest} />,
    Rock: <RockIcon {...rest} />,
    Electric: <ElectricIcon {...rest} />,
    Grass: <GrassIcon {...rest} />,
    Poison: <PoisonIcon {...rest} />,
    Bug: <BugIcon {...rest} />,
    Fighting: <FightingIcon {...rest} />,
    Dragon: <DragonIcon {...rest} />,
    Ghost: <GhostIcon {...rest} />,
    Dark: <DarkIcon {...rest} />,
    Light: <LightIcon {...rest} />,
  };

  return iconTypes[type];
};

export default Icon;
