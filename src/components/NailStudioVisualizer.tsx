import React from 'react';
import { Sparkles, Palette, Check, ArrowRight, RotateCcw, Eye } from 'lucide-react';
import { COLOR_PALETTE } from '../data/salonData';
import { NailShape, PolishFinish, ColorSwatch } from '../types';

interface NailStudioVisualizerProps {
  onBookCustomLook: (customLook: {
    shape: NailShape;
    color: string;
    finish: PolishFinish;
    accentArt: string;
  }) => void;
}

const SKIN_TONES = [
  { id: 'alabaster', name: 'Alabaster Ivory', hex: '#faece4' },
  { id: 'fair-warm', name: 'Petal Cream', hex: '#f0d3c3' },
  { id: 'golden-honey', name: 'Golden Honey', hex: '#d9a987' },
  { id: 'rich-bronze', name: 'Espresso Bronze', hex: '#8a593f' }
];

const NAIL_SHAPES: { id: NailShape; name: string; desc: string; radiusClass: string }[] = [
  { id: 'almond', name: 'Almond', desc: 'Slender, tapered with soft rounded tip', radiusClass: 'rounded-t-[28px]' },
  { id: 'oval', name: 'Oval', desc: 'Classic graceful curve matching cuticle', radiusClass: 'rounded-t-[24px]' },
  { id: 'square', name: 'Square', desc: 'Clean straight edge with sharp corners', radiusClass: 'rounded-t-[4px]' },
  { id: 'squoval', name: 'Squoval', desc: 'Straight flat edge with softened corners', radiusClass: 'rounded-t-[10px]' },
  { id: 'coffin', name: 'Coffin / Ballerina', desc: 'Tapered sides with flat squared tip', radiusClass: 'rounded-t-[6px] [clip-path:polygon(15%_0%,85%_0%,100%_100%,0%_100%)]' },
  { id: 'stiletto', name: 'Stiletto', desc: 'Dramatic point for sculpted extensions', radiusClass: 'rounded-t-[34px] [clip-path:polygon(50%_0%,100%_100%,0%_100%)]' }
];

const FINISHES: { id: PolishFinish; name: string; effect: string }[] = [
  { id: 'glossy', name: 'High-Gloss Gel', effect: 'Glass-like reflective luster' },
  { id: 'matte', name: 'Velvet Matte', effect: 'Silky non-reflective cashmere' },
  { id: 'chrome', name: 'Hailey Glazed Chrome', effect: 'Iridescent pearl aura' },
  { id: 'jelly', name: 'Sheer Jelly Glass', effect: 'Translucent glass tint' },
  { id: 'glitter', name: 'Micro-Pearl Shimmer', effect: 'Subtle twinkling stardust' }
];

const ACCENT_ARTS = [
  { id: 'none', name: 'Pure Monotone' },
  { id: 'french', name: 'Micro-French Tips' },
  { id: 'cacao-line', name: 'Cacao Geometric Line' },
  { id: 'gold-foil', name: 'Rose Gold Foil Accent' }
];

export const NailStudioVisualizer: React.FC<NailStudioVisualizerProps> = ({ onBookCustomLook }) => {
  const [skinTone, setSkinTone] = React.useState(SKIN_TONES[1]);
  const [selectedShape, setSelectedShape] = React.useState<NailShape>('almond');
  const [selectedColor, setSelectedColor] = React.useState<ColorSwatch>(COLOR_PALETTE[0]);
  const [selectedFinish, setSelectedFinish] = React.useState<PolishFinish>('chrome');
  const [accentArt, setAccentArt] = React.useState('french');
  const [nailLength, setNailLength] = React.useState<'short' | 'medium' | 'long'>('medium');

  const currentShapeObj = NAIL_SHAPES.find(s => s.id === selectedShape) || NAIL_SHAPES[0];

  const handleReset = () => {
    setSkinTone(SKIN_TONES[1]);
    setSelectedShape('almond');
    setSelectedColor(COLOR_PALETTE[0]);
    setSelectedFinish('chrome');
    setAccentArt('french');
    setNailLength('medium');
  };

  const handleBookLook = () => {
    onBookCustomLook({
      shape: selectedShape,
      color: selectedColor.name,
      finish: selectedFinish,
      accentArt: ACCENT_ARTS.find(a => a.id === accentArt)?.name || 'Pure Monotone'
    });
  };

  // Height based on length
  const nailHeightClass = {
    short: 'h-16',
    medium: 'h-24',
    long: 'h-32'
  }[nailLength];

  return (
    <section id="visualizer" className="py-20 md:py-28 bg-[#faf9f6] border-y border-[#d0c3c7]/30 px-5 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3 bg-[#ffd7ce]/70 text-[#7a5b54] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Atelier
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#755750] mb-4">
            Virtual Nail Studio &amp; Palette
          </h2>
          <p className="text-base text-[#4d4447] max-w-2xl mx-auto font-normal">
            Preview our signature shapes, finishes, and bespoke polishes on hand silhouettes before your visit.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Canvas: Live Virtual Hand Simulation */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 ambient-shadow border border-[#d0c3c7]/30 flex flex-col items-center justify-between relative overflow-hidden">
            {/* Top Toolbar */}
            <div className="w-full flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#755750]">
                  Skin Tone:
                </span>
                <div className="flex gap-1.5">
                  {SKIN_TONES.map(tone => (
                    <button
                      key={tone.id}
                      onClick={() => setSkinTone(tone)}
                      className={`w-6 h-6 rounded-full border-2 transition-transform ${
                        skinTone.id === tone.id ? 'border-[#755750] scale-110 shadow-xs' : 'border-white/80'
                      }`}
                      style={{ backgroundColor: tone.hex }}
                      title={tone.name}
                      aria-label={tone.name}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-[#4d4447] hover:text-[#755750] flex items-center gap-1 transition-colors"
                title="Reset to default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Hand Silhouette & Nails Simulation */}
            <div className="w-full py-8 flex flex-col items-center justify-center relative min-h-[360px]">
              {/* Diffused backdrop glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 blur-2xl transition-colors duration-500"
                style={{ backgroundColor: selectedColor.hex }}
              />

              {/* Hand Visual Area */}
              <div
                className="relative p-6 sm:p-8 rounded-3xl transition-colors duration-500 shadow-inner flex items-end justify-center gap-3 sm:gap-5 border border-white/60"
                style={{ backgroundColor: skinTone.hex }}
              >
                {/* 4 Fingers simulation: Index, Middle, Ring, Pinky */}
                {[
                  { finger: 'Index', width: 'w-10 sm:w-12', offset: 'translate-y-2' },
                  { finger: 'Middle', width: 'w-11 sm:w-13', offset: 'translate-y-0' },
                  { finger: 'Ring', width: 'w-10 sm:w-12', offset: 'translate-y-2' },
                  { finger: 'Pinky', width: 'w-8 sm:w-10', offset: 'translate-y-5' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col items-center ${item.offset} transition-transform duration-300`}
                  >
                    {/* The Nail Tip */}
                    <div
                      className={`relative ${item.width} ${nailHeightClass} ${currentShapeObj.radiusClass} shadow-md overflow-hidden transition-all duration-300`}
                      style={{
                        backgroundColor: selectedColor.hex,
                        backgroundImage: selectedFinish === 'chrome'
                          ? `linear-gradient(135deg, ${selectedColor.hex} 0%, #ffffff88 45%, ${selectedColor.hex} 70%, #ecd6c088 100%)`
                          : selectedFinish === 'glitter'
                          ? `radial-gradient(circle, #ffffff99 10%, transparent 20%), radial-gradient(circle, #ffe3eb88 15%, transparent 30%)`
                          : undefined,
                        opacity: selectedFinish === 'jelly' ? 0.85 : 1
                      }}
                    >
                      {/* Gloss or Matte Reflection Highlights */}
                      {selectedFinish !== 'matte' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent w-full h-full transform -skew-x-12 opacity-80 pointer-events-none" />
                      )}

                      {selectedFinish === 'chrome' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-200/40 to-white/60 pointer-events-none animate-pulse" />
                      )}

                      {/* Accent Art Overlays */}
                      {accentArt === 'french' && (
                        <div className="absolute top-0 left-0 right-0 h-3 bg-white/90 rounded-t-[14px] shadow-xs" />
                      )}

                      {accentArt === 'cacao-line' && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-[1.5px] h-full bg-[#755750] rotate-12" />
                          <div className="w-2 h-2 rounded-full border border-[#755750] absolute top-1/3" />
                        </div>
                      )}

                      {accentArt === 'gold-foil' && (
                        <div className="absolute bottom-2 right-1.5 w-3.5 h-3.5 bg-gradient-to-tr from-amber-400 to-rose-300 rounded-sm rotate-45 opacity-90 shadow-xs" />
                      )}

                      {/* Cuticle Base Shadow */}
                      <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Finger Base */}
                    <div
                      className={`${item.width} h-16 sm:h-20 rounded-b-xl opacity-95 mt-[-2px]`}
                      style={{ backgroundColor: skinTone.hex, filter: 'brightness(0.96)' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Spec Sheet Footer inside Canvas */}
            <div className="w-full bg-[#faf9f6] rounded-2xl p-4 mt-6 border border-[#d0c3c7]/20 flex flex-wrap justify-between items-center gap-3">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-[#755750]">
                  {selectedColor.name} • {currentShapeObj.name} ({nailLength})
                </p>
                <p className="text-[11px] text-[#4d4447]">
                  {FINISHES.find(f => f.id === selectedFinish)?.name} • {ACCENT_ARTS.find(a => a.id === accentArt)?.name}
                </p>
              </div>

              <button
                id="btn-book-custom-look"
                onClick={handleBookLook}
                className="bg-[#755750] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#805062] transition-colors btn-polished inline-flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Book This Look</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Controls: Customization Selectors */}
          <div className="lg:col-span-6 space-y-7">
            {/* 1. Color Palette Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#755750] flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#805062]" />
                  1. Curated Polish Shade
                </label>
                <span className="text-xs font-semibold text-[#805062]">{selectedColor.name}</span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
                {COLOR_PALETTE.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`group flex flex-col items-center p-2 rounded-xl border transition-all ${
                      selectedColor.id === color.id
                        ? 'border-[#755750] bg-white shadow-sm ring-2 ring-[#755750]/20'
                        : 'border-[#d0c3c7]/30 bg-[#faf9f6] hover:bg-white'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full shadow-inner relative flex items-center justify-center"
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor.id === color.id && (
                        <Check
                          className={`w-3.5 h-3.5 ${
                            color.id === 'alabaster-milk' || color.id === 'sheer-petal'
                              ? 'text-[#755750]'
                              : 'text-white'
                          }`}
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-[#4d4447] mt-1 text-center font-medium truncate w-full">
                      {color.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-[#4d4447]/80 mt-2 italic">{selectedColor.description}</p>
            </div>

            {/* 2. Shape Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#755750]">
                  2. Silhouette / Nail Shape
                </label>
                <span className="text-xs font-semibold text-[#805062]">{currentShapeObj.name}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {NAIL_SHAPES.map(shape => (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      selectedShape === shape.id
                        ? 'border-[#755750] bg-white shadow-sm ring-1 ring-[#755750]'
                        : 'border-[#d0c3c7]/30 bg-[#faf9f6] hover:bg-white'
                    }`}
                  >
                    <p className="text-xs font-bold text-[#755750]">{shape.name}</p>
                    <p className="text-[11px] text-[#4d4447] line-clamp-1">{shape.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Length & Finish Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Length */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#755750] block mb-2">
                  3. Extension Length
                </label>
                <div className="flex gap-2">
                  {(['short', 'medium', 'long'] as const).map(len => (
                    <button
                      key={len}
                      onClick={() => setNailLength(len)}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold capitalize border transition-all ${
                        nailLength === len
                          ? 'bg-[#755750] text-white border-[#755750]'
                          : 'bg-[#faf9f6] text-[#4d4447] border-[#d0c3c7]/30 hover:bg-white'
                      }`}
                    >
                      {len}
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#755750] block mb-2">
                  4. Topcoat &amp; Finish
                </label>
                <select
                  value={selectedFinish}
                  onChange={e => setSelectedFinish(e.target.value as PolishFinish)}
                  className="w-full bg-[#faf9f6] border border-[#d0c3c7]/40 rounded-lg py-2 px-3 text-xs font-medium text-[#755750] focus:ring-1 focus:ring-[#755750] focus:outline-none"
                >
                  {FINISHES.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.effect})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Art Accent Overlay */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#755750] block mb-2">
                5. Minimalist Art Inlay
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ACCENT_ARTS.map(art => (
                  <button
                    key={art.id}
                    onClick={() => setAccentArt(art.id)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      accentArt === art.id
                        ? 'bg-[#ffe3eb] text-[#805062] border-[#805062] font-semibold'
                        : 'bg-[#faf9f6] text-[#4d4447] border-[#d0c3c7]/30 hover:bg-white'
                    }`}
                  >
                    {art.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
