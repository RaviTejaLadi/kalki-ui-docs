interface ColorValues {
  rgb: string;
  hsl: string;
  hex: string;
}

interface ColorShades {
  [shade: string]: ColorValues;
}

interface ColorMap {
  [color: string]: ColorShades;
}

export const tailwindColorMap: ColorMap = {
  slate: {
    '50': {
      rgb: 'rgb(248, 250, 252)',
      hsl: 'hsl(210, 40%, 98%)',
      hex: '#F8FAFC',
    },
    '100': {
      rgb: 'rgb(241, 245, 249)',
      hsl: 'hsl(210, 40%, 96%)',
      hex: '#F1F5F9',
    },
    '200': {
      rgb: 'rgb(226, 232, 240)',
      hsl: 'hsl(214, 32%, 91%)',
      hex: '#E2E8F0',
    },
    '300': {
      rgb: 'rgb(203, 213, 225)',
      hsl: 'hsl(213, 27%, 84%)',
      hex: '#CBD5E1',
    },
    '400': {
      rgb: 'rgb(148, 163, 184)',
      hsl: 'hsl(215, 20%, 65%)',
      hex: '#94A3B8',
    },
    '500': {
      rgb: 'rgb(100, 116, 139)',
      hsl: 'hsl(215, 16%, 47%)',
      hex: '#64748B',
    },
    '600': {
      rgb: 'rgb(71, 85, 105)',
      hsl: 'hsl(215, 19%, 35%)',
      hex: '#475569',
    },
    '700': {
      rgb: 'rgb(51, 65, 85)',
      hsl: 'hsl(215, 25%, 27%)',
      hex: '#334155',
    },
    '800': {
      rgb: 'rgb(30, 41, 59)',
      hsl: 'hsl(217, 33%, 17%)',
      hex: '#1E293B',
    },
    '900': {
      rgb: 'rgb(15, 23, 42)',
      hsl: 'hsl(222, 47%, 11%)',
      hex: '#0F172A',
    },
    '950': {
      rgb: 'rgb(2, 6, 23)',
      hsl: 'hsl(222, 84%, 5%)',
      hex: '#020617',
    },
  },
  gray: {
    '50': {
      rgb: 'rgb(249, 250, 251)',
      hsl: 'hsl(210, 20%, 98%)',
      hex: '#F9FAFB',
    },
    '100': {
      rgb: 'rgb(243, 244, 246)',
      hsl: 'hsl(220, 14%, 96%)',
      hex: '#F3F4F6',
    },
    '200': {
      rgb: 'rgb(229, 231, 235)',
      hsl: 'hsl(220, 13%, 91%)',
      hex: '#E5E7EB',
    },
    '300': {
      rgb: 'rgb(209, 213, 219)',
      hsl: 'hsl(216, 12%, 84%)',
      hex: '#D1D5DB',
    },
    '400': {
      rgb: 'rgb(156, 163, 175)',
      hsl: 'hsl(217, 11%, 65%)',
      hex: '#9CA3AF',
    },
    '500': {
      rgb: 'rgb(107, 114, 128)',
      hsl: 'hsl(220, 9%, 46%)',
      hex: '#6B7280',
    },
    '600': {
      rgb: 'rgb(75, 85, 99)',
      hsl: 'hsl(215, 14%, 34%)',
      hex: '#4B5563',
    },
    '700': {
      rgb: 'rgb(55, 65, 81)',
      hsl: 'hsl(217, 19%, 27%)',
      hex: '#374151',
    },
    '800': {
      rgb: 'rgb(31, 41, 55)',
      hsl: 'hsl(218, 28%, 17%)',
      hex: '#1F2937',
    },
    '900': {
      rgb: 'rgb(17, 24, 39)',
      hsl: 'hsl(221, 39%, 11%)',
      hex: '#111827',
    },
    '950': {
      rgb: 'rgb(3, 7, 18)',
      hsl: 'hsl(224, 71%, 4%)',
      hex: '#030712',
    },
  },
  zinc: {
    '50': {
      rgb: 'rgb(250, 250, 250)',
      hsl: 'hsl(0, 0%, 98%)',
      hex: '#FAFAFA',
    },
    '100': {
      rgb: 'rgb(244, 244, 245)',
      hsl: 'hsl(240, 5%, 96%)',
      hex: '#F4F4F5',
    },
    '200': {
      rgb: 'rgb(228, 228, 231)',
      hsl: 'hsl(240, 6%, 90%)',
      hex: '#E4E4E7',
    },
    '300': {
      rgb: 'rgb(212, 212, 216)',
      hsl: 'hsl(240, 5%, 84%)',
      hex: '#D4D4D8',
    },
    '400': {
      rgb: 'rgb(161, 161, 170)',
      hsl: 'hsl(240, 5%, 65%)',
      hex: '#A1A1AA',
    },
    '500': {
      rgb: 'rgb(113, 113, 122)',
      hsl: 'hsl(240, 4%, 46%)',
      hex: '#71717A',
    },
    '600': {
      rgb: 'rgb(82, 82, 91)',
      hsl: 'hsl(240, 5%, 34%)',
      hex: '#52525B',
    },
    '700': {
      rgb: 'rgb(63, 63, 70)',
      hsl: 'hsl(240, 5%, 26%)',
      hex: '#3F3F46',
    },
    '800': {
      rgb: 'rgb(39, 39, 42)',
      hsl: 'hsl(240, 4%, 16%)',
      hex: '#27272A',
    },
    '900': {
      rgb: 'rgb(24, 24, 27)',
      hsl: 'hsl(240, 6%, 10%)',
      hex: '#18181B',
    },
    '950': {
      rgb: 'rgb(9, 9, 11)',
      hsl: 'hsl(240, 10%, 4%)',
      hex: '#09090B',
    },
  },
  neutral: {
    '50': {
      rgb: 'rgb(250, 250, 250)',
      hsl: 'hsl(0, 0%, 98%)',
      hex: '#FAFAFA',
    },
    '100': {
      rgb: 'rgb(245, 245, 245)',
      hsl: 'hsl(0, 0%, 96%)',
      hex: '#F5F5F5',
    },
    '200': {
      rgb: 'rgb(229, 229, 229)',
      hsl: 'hsl(0, 0%, 90%)',
      hex: '#E5E5E5',
    },
    '300': {
      rgb: 'rgb(212, 212, 212)',
      hsl: 'hsl(0, 0%, 83%)',
      hex: '#D4D4D4',
    },
    '400': {
      rgb: 'rgb(163, 163, 163)',
      hsl: 'hsl(0, 0%, 64%)',
      hex: '#A3A3A3',
    },
    '500': {
      rgb: 'rgb(115, 115, 115)',
      hsl: 'hsl(0, 0%, 45%)',
      hex: '#737373',
    },
    '600': {
      rgb: 'rgb(82, 82, 82)',
      hsl: 'hsl(0, 0%, 32%)',
      hex: '#525252',
    },
    '700': {
      rgb: 'rgb(64, 64, 64)',
      hsl: 'hsl(0, 0%, 25%)',
      hex: '#404040',
    },
    '800': {
      rgb: 'rgb(38, 38, 38)',
      hsl: 'hsl(0, 0%, 15%)',
      hex: '#262626',
    },
    '900': {
      rgb: 'rgb(23, 23, 23)',
      hsl: 'hsl(0, 0%, 9%)',
      hex: '#171717',
    },
    '950': {
      rgb: 'rgb(10, 10, 10)',
      hsl: 'hsl(0, 0%, 4%)',
      hex: '#0A0A0A',
    },
  },
  stone: {
    '50': {
      rgb: 'rgb(250, 250, 249)',
      hsl: 'hsl(60, 9%, 98%)',
      hex: '#FAFAF9',
    },
    '100': {
      rgb: 'rgb(245, 245, 244)',
      hsl: 'hsl(60, 5%, 96%)',
      hex: '#F5F5F4',
    },
    '200': {
      rgb: 'rgb(231, 229, 228)',
      hsl: 'hsl(20, 6%, 90%)',
      hex: '#E7E5E4',
    },
    '300': {
      rgb: 'rgb(214, 211, 209)',
      hsl: 'hsl(24, 6%, 83%)',
      hex: '#D6D3D1',
    },
    '400': {
      rgb: 'rgb(168, 162, 158)',
      hsl: 'hsl(24, 5%, 64%)',
      hex: '#A8A29E',
    },
    '500': {
      rgb: 'rgb(120, 113, 108)',
      hsl: 'hsl(25, 5%, 45%)',
      hex: '#78716C',
    },
    '600': {
      rgb: 'rgb(87, 83, 78)',
      hsl: 'hsl(33, 5%, 32%)',
      hex: '#57534E',
    },
    '700': {
      rgb: 'rgb(68, 64, 60)',
      hsl: 'hsl(30, 6%, 25%)',
      hex: '#44403C',
    },
    '800': {
      rgb: 'rgb(41, 37, 36)',
      hsl: 'hsl(12, 6%, 15%)',
      hex: '#292524',
    },
    '900': {
      rgb: 'rgb(28, 25, 23)',
      hsl: 'hsl(24, 10%, 10%)',
      hex: '#1C1917',
    },
    '950': {
      rgb: 'rgb(12, 10, 9)',
      hsl: 'hsl(20, 14%, 4%)',
      hex: '#0C0A09',
    },
  },
  red: {
    '50': {
      rgb: 'rgb(254, 242, 242)',
      hsl: 'hsl(0, 86%, 97%)',
      hex: '#FEF2F2',
    },
    '100': {
      rgb: 'rgb(254, 226, 226)',
      hsl: 'hsl(0, 93%, 94%)',
      hex: '#FEE2E2',
    },
    '200': {
      rgb: 'rgb(254, 202, 202)',
      hsl: 'hsl(0, 96%, 89%)',
      hex: '#FECACA',
    },
    '300': {
      rgb: 'rgb(252, 165, 165)',
      hsl: 'hsl(0, 94%, 82%)',
      hex: '#FCA5A5',
    },
    '400': {
      rgb: 'rgb(248, 113, 113)',
      hsl: 'hsl(0, 91%, 71%)',
      hex: '#F87171',
    },
    '500': {
      rgb: 'rgb(239, 68, 68)',
      hsl: 'hsl(0, 84%, 60%)',
      hex: '#EF4444',
    },
    '600': {
      rgb: 'rgb(220, 38, 38)',
      hsl: 'hsl(0, 72%, 51%)',
      hex: '#DC2626',
    },
    '700': {
      rgb: 'rgb(185, 28, 28)',
      hsl: 'hsl(0, 74%, 42%)',
      hex: '#B91C1C',
    },
    '800': {
      rgb: 'rgb(153, 27, 27)',
      hsl: 'hsl(0, 70%, 35%)',
      hex: '#991B1B',
    },
    '900': {
      rgb: 'rgb(127, 29, 29)',
      hsl: 'hsl(0, 63%, 31%)',
      hex: '#7F1D1D',
    },
    '950': {
      rgb: 'rgb(69, 10, 10)',
      hsl: 'hsl(0, 75%, 15%)',
      hex: '#450A0A',
    },
  },
  orange: {
    '50': {
      rgb: 'rgb(255, 247, 237)',
      hsl: 'hsl(33, 100%, 96%)',
      hex: '#FFF7ED',
    },
    '100': {
      rgb: 'rgb(255, 237, 213)',
      hsl: 'hsl(34, 100%, 92%)',
      hex: '#FFEDD5',
    },
    '200': {
      rgb: 'rgb(254, 215, 170)',
      hsl: 'hsl(32, 98%, 83%)',
      hex: '#FED7AA',
    },
    '300': {
      rgb: 'rgb(253, 186, 116)',
      hsl: 'hsl(31, 97%, 72%)',
      hex: '#FDBA74',
    },
    '400': {
      rgb: 'rgb(251, 146, 60)',
      hsl: 'hsl(27, 96%, 61%)',
      hex: '#FB923C',
    },
    // Continuing the tailwindColorMap...

    '500': {
      rgb: 'rgb(249, 115, 22)',
      hsl: 'hsl(24, 95%, 53%)',
      hex: '#F97316',
    },
    '600': {
      rgb: 'rgb(234, 88, 12)',
      hsl: 'hsl(23, 90%, 48%)',
      hex: '#EA580C',
    },
    '700': {
      rgb: 'rgb(194, 65, 12)',
      hsl: 'hsl(21, 85%, 40%)',
      hex: '#C2410C',
    },
    '800': {
      rgb: 'rgb(154, 52, 18)',
      hsl: 'hsl(17, 80%, 34%)',
      hex: '#9A3412',
    },
    '900': {
      rgb: 'rgb(124, 45, 18)',
      hsl: 'hsl(15, 75%, 28%)',
      hex: '#7C2D12',
    },
    '950': {
      rgb: 'rgb(67, 20, 7)',
      hsl: 'hsl(14, 81%, 15%)',
      hex: '#431407',
    },
  },
  amber: {
    '50': {
      rgb: 'rgb(255, 251, 235)',
      hsl: 'hsl(48, 100%, 96%)',
      hex: '#FFFBEB',
    },
    '100': {
      rgb: 'rgb(254, 243, 199)',
      hsl: 'hsl(48, 96%, 89%)',
      hex: '#FEF3C7',
    },
    '200': {
      rgb: 'rgb(253, 230, 138)',
      hsl: 'hsl(48, 96%, 77%)',
      hex: '#FDE68A',
    },
    '300': {
      rgb: 'rgb(252, 211, 77)',
      hsl: 'hsl(46, 97%, 65%)',
      hex: '#FCD34D',
    },
    '400': {
      rgb: 'rgb(251, 191, 36)',
      hsl: 'hsl(43, 96%, 56%)',
      hex: '#FBBF24',
    },
    '500': {
      rgb: 'rgb(245, 158, 11)',
      hsl: 'hsl(38, 92%, 50%)',
      hex: '#F59E0B',
    },
    '600': {
      rgb: 'rgb(217, 119, 6)',
      hsl: 'hsl(32, 95%, 44%)',
      hex: '#D97706',
    },
    '700': {
      rgb: 'rgb(180, 83, 9)',
      hsl: 'hsl(26, 90%, 37%)',
      hex: '#B45309',
    },
    '800': {
      rgb: 'rgb(146, 64, 14)',
      hsl: 'hsl(23, 83%, 31%)',
      hex: '#92400E',
    },
    '900': {
      rgb: 'rgb(120, 53, 15)',
      hsl: 'hsl(21, 77%, 26%)',
      hex: '#78350F',
    },
    '950': {
      rgb: 'rgb(69, 26, 3)',
      hsl: 'hsl(20, 92%, 14%)',
      hex: '#451A03',
    },
  },
  yellow: {
    '50': {
      rgb: 'rgb(254, 252, 232)',
      hsl: 'hsl(55, 92%, 95%)',
      hex: '#FEFCE8',
    },
    '100': {
      rgb: 'rgb(254, 249, 195)',
      hsl: 'hsl(55, 97%, 88%)',
      hex: '#FEF9C3',
    },
    '200': {
      rgb: 'rgb(254, 240, 138)',
      hsl: 'hsl(53, 98%, 77%)',
      hex: '#FEF08A',
    },
    '300': {
      rgb: 'rgb(253, 224, 71)',
      hsl: 'hsl(50, 98%, 64%)',
      hex: '#FDE047',
    },
    '400': {
      rgb: 'rgb(250, 204, 21)',
      hsl: 'hsl(48, 96%, 53%)',
      hex: '#FACC15',
    },
    '500': {
      rgb: 'rgb(234, 179, 8)',
      hsl: 'hsl(45, 93%, 47%)',
      hex: '#EAB308',
    },
    '600': {
      rgb: 'rgb(202, 138, 4)',
      hsl: 'hsl(40, 96%, 40%)',
      hex: '#CA8A04',
    },
    '700': {
      rgb: 'rgb(161, 98, 7)',
      hsl: 'hsl(35, 92%, 33%)',
      hex: '#A16207',
    },
    '800': {
      rgb: 'rgb(133, 77, 14)',
      hsl: 'hsl(32, 81%, 29%)',
      hex: '#854D0E',
    },
    '900': {
      rgb: 'rgb(113, 63, 18)',
      hsl: 'hsl(28, 73%, 26%)',
      hex: '#713F12',
    },
    '950': {
      rgb: 'rgb(66, 32, 6)',
      hsl: 'hsl(26, 83%, 14%)',
      hex: '#422006',
    },
  },
  green: {
    '50': {
      rgb: 'rgb(240, 253, 244)',
      hsl: 'hsl(138, 76%, 97%)',
      hex: '#F0FDF4',
    },
    '100': {
      rgb: 'rgb(220, 252, 231)',
      hsl: 'hsl(141, 84%, 93%)',
      hex: '#DCFCE7',
    },
    '200': {
      rgb: 'rgb(187, 247, 208)',
      hsl: 'hsl(141, 79%, 85%)',
      hex: '#BBF7D0',
    },
    '300': {
      rgb: 'rgb(134, 239, 172)',
      hsl: 'hsl(142, 77%, 73%)',
      hex: '#86EF9C',
    },
    '400': {
      rgb: 'rgb(74, 222, 128)',
      hsl: 'hsl(142, 69%, 58%)',
      hex: '#4ADE80',
    },
    '500': {
      rgb: 'rgb(34, 197, 94)',
      hsl: 'hsl(142, 71%, 45%)',
      hex: '#22C55E',
    },
    '600': {
      rgb: 'rgb(22, 163, 74)',
      hsl: 'hsl(142, 76%, 36%)',
      hex: '#16A34A',
    },
    '700': {
      rgb: 'rgb(21, 128, 61)',
      hsl: 'hsl(142, 72%, 29%)',
      hex: '#15803D',
    },
    '800': {
      rgb: 'rgb(22, 101, 52)',
      hsl: 'hsl(142, 64%, 24%)',
      hex: '#166534',
    },
    '900': {
      rgb: 'rgb(20, 83, 45)',
      hsl: 'hsl(142, 61%, 20%)',
      hex: '#14532D',
    },
    '950': {
      rgb: 'rgb(5, 46, 22)',
      hsl: 'hsl(142, 80%, 10%)',
      hex: '#052E16',
    },
  },
  emerald: {
    '50': {
      rgb: 'rgb(236, 253, 245)',
      hsl: 'hsl(151, 81%, 96%)',
      hex: '#ECFDF5',
    },
    '100': {
      rgb: 'rgb(209, 250, 229)',
      hsl: 'hsl(149, 80%, 90%)',
      hex: '#D1FAE5',
    },
    '200': {
      rgb: 'rgb(167, 243, 208)',
      hsl: 'hsl(152, 76%, 80%)',
      hex: '#A7F3D0',
    },
    '300': {
      rgb: 'rgb(110, 231, 183)',
      hsl: 'hsl(156, 72%, 67%)',
      hex: '#6EE7B7',
    },
    '400': {
      rgb: 'rgb(52, 211, 153)',
      hsl: 'hsl(158, 64%, 52%)',
      hex: '#34D399',
    },
    '500': {
      rgb: 'rgb(16, 185, 129)',
      hsl: 'hsl(160, 84%, 39%)',
      hex: '#10B981',
    },
    '600': {
      rgb: 'rgb(5, 150, 105)',
      hsl: 'hsl(161, 94%, 30%)',
      hex: '#059669',
    },
    '700': {
      rgb: 'rgb(4, 120, 87)',
      hsl: 'hsl(162, 94%, 24%)',
      hex: '#047857',
    },
    '800': {
      rgb: 'rgb(6, 95, 70)',
      hsl: 'hsl(163, 88%, 20%)',
      hex: '#065F46',
    },
    '900': {
      rgb: 'rgb(6, 78, 59)',
      hsl: 'hsl(164, 86%, 16%)',
      hex: '#064E3B',
    },
    '950': {
      rgb: 'rgb(2, 44, 34)',
      hsl: 'hsl(165, 91%, 9%)',
      hex: '#022C22',
    },
  },
};

// Helper function to get color values from Tailwind class
export const getColorValues = (colorClass: string) => {
  const baseClass = colorClass.replace('bg-', '');
  const [color, shade] = baseClass.split('-');

  return (
    tailwindColorMap[color]?.[shade] ?? {
      rgb: 'rgb(255, 255, 255)',
      hsl: 'hsl(0, 0%, 100%)',
      hex: '#FFFFFF',
    }
  );
};
interface Color {
  name: string;
  shades: { value: number; color: string }[];
}
export const colors: Color[] = [
  {
    name: 'Slate',
    shades: [
      { value: 50, color: 'bg-slate-50' },
      { value: 100, color: 'bg-slate-100' },
      { value: 200, color: 'bg-slate-200' },
      { value: 300, color: 'bg-slate-300' },
      { value: 400, color: 'bg-slate-400' },
      { value: 500, color: 'bg-slate-500' },
      { value: 600, color: 'bg-slate-600' },
      { value: 700, color: 'bg-slate-700' },
      { value: 800, color: 'bg-slate-800' },
      { value: 900, color: 'bg-slate-900' },
      { value: 950, color: 'bg-slate-950' },
    ],
  },
  {
    name: 'Gray',
    shades: [
      { value: 50, color: 'bg-gray-50' },
      { value: 100, color: 'bg-gray-100' },
      { value: 200, color: 'bg-gray-200' },
      { value: 300, color: 'bg-gray-300' },
      { value: 400, color: 'bg-gray-400' },
      { value: 500, color: 'bg-gray-500' },
      { value: 600, color: 'bg-gray-600' },
      { value: 700, color: 'bg-gray-700' },
      { value: 800, color: 'bg-gray-800' },
      { value: 900, color: 'bg-gray-900' },
      { value: 950, color: 'bg-gray-950' },
    ],
  },
  {
    name: 'Zinc',
    shades: [
      { value: 50, color: 'bg-zinc-50' },
      { value: 100, color: 'bg-zinc-100' },
      { value: 200, color: 'bg-zinc-200' },
      { value: 300, color: 'bg-zinc-300' },
      { value: 400, color: 'bg-zinc-400' },
      { value: 500, color: 'bg-zinc-500' },
      { value: 600, color: 'bg-zinc-600' },
      { value: 700, color: 'bg-zinc-700' },
      { value: 800, color: 'bg-zinc-800' },
      { value: 900, color: 'bg-zinc-900' },
      { value: 950, color: 'bg-zinc-950' },
    ],
  },
  {
    name: 'Neutral',
    shades: [
      { value: 50, color: 'bg-neutral-50' },
      { value: 100, color: 'bg-neutral-100' },
      { value: 200, color: 'bg-neutral-200' },
      { value: 300, color: 'bg-neutral-300' },
      { value: 400, color: 'bg-neutral-400' },
      { value: 500, color: 'bg-neutral-500' },
      { value: 600, color: 'bg-neutral-600' },
      { value: 700, color: 'bg-neutral-700' },
      { value: 800, color: 'bg-neutral-800' },
      { value: 900, color: 'bg-neutral-900' },
      { value: 950, color: 'bg-neutral-950' },
    ],
  },
  {
    name: 'Stone',
    shades: [
      { value: 50, color: 'bg-stone-50' },
      { value: 100, color: 'bg-stone-100' },
      { value: 200, color: 'bg-stone-200' },
      { value: 300, color: 'bg-stone-300' },
      { value: 400, color: 'bg-stone-400' },
      { value: 500, color: 'bg-stone-500' },
      { value: 600, color: 'bg-stone-600' },
      { value: 700, color: 'bg-stone-700' },
      { value: 800, color: 'bg-stone-800' },
      { value: 900, color: 'bg-stone-900' },
      { value: 950, color: 'bg-stone-950' },
    ],
  },
  {
    name: 'Red',
    shades: [
      { value: 50, color: 'bg-red-50' },
      { value: 100, color: 'bg-red-100' },
      { value: 200, color: 'bg-red-200' },
      { value: 300, color: 'bg-red-300' },
      { value: 400, color: 'bg-red-400' },
      { value: 500, color: 'bg-red-500' },
      { value: 600, color: 'bg-red-600' },
      { value: 700, color: 'bg-red-700' },
      { value: 800, color: 'bg-red-800' },
      { value: 900, color: 'bg-red-900' },
      { value: 950, color: 'bg-red-950' },
    ],
  },
  {
    name: 'Orange',
    shades: [
      { value: 50, color: 'bg-orange-50' },
      { value: 100, color: 'bg-orange-100' },
      { value: 200, color: 'bg-orange-200' },
      { value: 300, color: 'bg-orange-300' },
      { value: 400, color: 'bg-orange-400' },
      { value: 500, color: 'bg-orange-500' },
      { value: 600, color: 'bg-orange-600' },
      { value: 700, color: 'bg-orange-700' },
      { value: 800, color: 'bg-orange-800' },
      { value: 900, color: 'bg-orange-900' },
      { value: 950, color: 'bg-orange-950' },
    ],
  },
  {
    name: 'Amber',
    shades: [
      { value: 50, color: 'bg-amber-50' },
      { value: 100, color: 'bg-amber-100' },
      { value: 200, color: 'bg-amber-200' },
      { value: 300, color: 'bg-amber-300' },
      { value: 400, color: 'bg-amber-400' },
      { value: 500, color: 'bg-amber-500' },
      { value: 600, color: 'bg-amber-600' },
      { value: 700, color: 'bg-amber-700' },
      { value: 800, color: 'bg-amber-800' },
      { value: 900, color: 'bg-amber-900' },
      { value: 950, color: 'bg-amber-950' },
    ],
  },
  {
    name: 'Yellow',
    shades: [
      { value: 50, color: 'bg-yellow-50' },
      { value: 100, color: 'bg-yellow-100' },
      { value: 200, color: 'bg-yellow-200' },
      { value: 300, color: 'bg-yellow-300' },
      { value: 400, color: 'bg-yellow-400' },
      { value: 500, color: 'bg-yellow-500' },
      { value: 600, color: 'bg-yellow-600' },
      { value: 700, color: 'bg-yellow-700' },
      { value: 800, color: 'bg-yellow-800' },
      { value: 900, color: 'bg-yellow-900' },
      { value: 950, color: 'bg-yellow-950' },
    ],
  },
  {
    name: 'Green',
    shades: [
      { value: 50, color: 'bg-green-50' },
      { value: 100, color: 'bg-green-100' },
      { value: 200, color: 'bg-green-200' },
      { value: 300, color: 'bg-green-300' },
      { value: 400, color: 'bg-green-400' },
      { value: 500, color: 'bg-green-500' },
      { value: 600, color: 'bg-green-600' },
      { value: 700, color: 'bg-green-700' },
      { value: 800, color: 'bg-green-800' },
      { value: 900, color: 'bg-green-900' },
      { value: 950, color: 'bg-green-950' },
    ],
  },
  {
    name: 'Teal',
    shades: [
      { value: 50, color: 'bg-teal-50' },
      { value: 100, color: 'bg-teal-100' },
      { value: 200, color: 'bg-teal-200' },
      { value: 300, color: 'bg-teal-300' },
      { value: 400, color: 'bg-teal-400' },
      { value: 500, color: 'bg-teal-500' },
      { value: 600, color: 'bg-teal-600' },
      { value: 700, color: 'bg-teal-700' },
      { value: 800, color: 'bg-teal-800' },
      { value: 900, color: 'bg-teal-900' },
      { value: 950, color: 'bg-teal-950' },
    ],
  },
  {
    name: 'Blue',
    shades: [
      { value: 50, color: 'bg-blue-50' },
      { value: 100, color: 'bg-blue-100' },
      { value: 200, color: 'bg-blue-200' },
      { value: 300, color: 'bg-blue-300' },
      { value: 400, color: 'bg-blue-400' },
      { value: 500, color: 'bg-blue-500' },
      { value: 600, color: 'bg-blue-600' },
      { value: 700, color: 'bg-blue-700' },
      { value: 800, color: 'bg-blue-800' },
      { value: 900, color: 'bg-blue-900' },
      { value: 950, color: 'bg-blue-950' },
    ],
  },
  {
    name: 'Indigo',
    shades: [
      { value: 50, color: 'bg-indigo-50' },
      { value: 100, color: 'bg-indigo-100' },
      { value: 200, color: 'bg-indigo-200' },
      { value: 300, color: 'bg-indigo-300' },
      { value: 400, color: 'bg-indigo-400' },
      { value: 500, color: 'bg-indigo-500' },
      { value: 600, color: 'bg-indigo-600' },
      { value: 700, color: 'bg-indigo-700' },
      { value: 800, color: 'bg-indigo-800' },
      { value: 900, color: 'bg-indigo-900' },
      { value: 950, color: 'bg-indigo-950' },
    ],
  },
  {
    name: 'Purple',
    shades: [
      { value: 50, color: 'bg-purple-50' },
      { value: 100, color: 'bg-purple-100' },
      { value: 200, color: 'bg-purple-200' },
      { value: 300, color: 'bg-purple-300' },
      { value: 400, color: 'bg-purple-400' },
      { value: 500, color: 'bg-purple-500' },
      { value: 600, color: 'bg-purple-600' },
      { value: 700, color: 'bg-purple-700' },
      { value: 800, color: 'bg-purple-800' },
      { value: 900, color: 'bg-purple-900' },
      { value: 950, color: 'bg-purple-950' },
    ],
  },
  {
    name: 'Pink',
    shades: [
      { value: 50, color: 'bg-pink-50' },
      { value: 100, color: 'bg-pink-100' },
      { value: 200, color: 'bg-pink-200' },
      { value: 300, color: 'bg-pink-300' },
      { value: 400, color: 'bg-pink-400' },
      { value: 500, color: 'bg-pink-500' },
      { value: 600, color: 'bg-pink-600' },
      { value: 700, color: 'bg-pink-700' },
      { value: 800, color: 'bg-pink-800' },
      { value: 900, color: 'bg-pink-900' },
      { value: 950, color: 'bg-pink-950' },
    ],
  },
  {
    name: 'Rose',
    shades: [
      { value: 50, color: 'bg-rose-50' },
      { value: 100, color: 'bg-rose-100' },
      { value: 200, color: 'bg-rose-200' },
      { value: 300, color: 'bg-rose-300' },
      { value: 400, color: 'bg-rose-400' },
      { value: 500, color: 'bg-rose-500' },
      { value: 600, color: 'bg-rose-600' },
      { value: 700, color: 'bg-rose-700' },
      { value: 800, color: 'bg-rose-800' },
      { value: 900, color: 'bg-rose-900' },
      { value: 950, color: 'bg-rose-950' },
    ],
  },
];
