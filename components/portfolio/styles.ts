import clsx from 'clsx';

export const glass = (base?: string) => clsx(
  'backdrop-blur-xl bg-white/5 border border-white/10',
  base
);

export const pill = () => clsx(
  'px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20'
);

export const glow = (color: string) => clsx(
  `bg-gradient-to-r ${color}`,
  'p-[1px] rounded-xl',
  'hover:shadow-lg transition-all duration-300'
);

export const cardHover = () => clsx(
  'hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20',
  'transition-all duration-300 ease-out'
);