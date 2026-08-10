import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ArrowLeft, Check, RotateCcw, Save, SlidersHorizontal, X } from 'lucide-react';
import { weatherIntegrationCase, CaseSection, CaseMedia } from '../data/weatherIntegrationCase';
import { notificationsCase } from '../data/notificationsCase';

// Set to true to restore the Design controls button and panel.
const SHOW_DESIGN_CONTROLS = false;
import { wallTabletCase } from '../data/wallTabletCase';
import { smartScenariosCase } from '../data/smartScenariosCase';

type DesignSettings = {
  heroTitle: number;
  heroLine: number;
  subtitle: number;
  subtitleLine: number;
  stageTitle: number;
  stageLine: number;
  sectionTitle: number;
  sectionLine: number;
  body: number;
  bodyLine: number;
  heroTitleBottom: number;
  stageTitleBottom: number;
  textWidth: number;
  mediaWidth: number;
  phoneMediaWidth: number;
  pageTop: number;
  headerBottom: number;
  introBottom: number;
  sectionGap: number;
  stageTop: number;
  titleBottom: number;
  paragraphGap: number;
  textToList: number;
  listGap: number;
  listNumberGap: number;
  listNumberTopOffset: number;
  mediaTop: number;
  mediaBottomGap: number;
  mediaGap: number;
  phoneMediaGap: number;
  buttonTopGap: number;
  buttonFont: number;
  buttonLine: number;
  buttonLetterSpacing: number;
  buttonPaddingX: number;
  buttonPaddingY: number;
  buttonRadius: number;
  nextCaseTitle: number;
  nextCaseLine: number;
  nextCaseLetterSpacing: number;
};

const DESIGN_STORAGE_KEY = "kate-case-design-settings-v3";
const LEGACY_DESIGN_STORAGE_KEY = "kate-case-design-settings-v2";

const defaultDesignSettings: DesignSettings = {
  heroTitle: 64,
  heroLine: 1.1,
  subtitle: 28,
  subtitleLine: 1.3,
  stageTitle: 80,
  stageLine: 1,
  sectionTitle: 38,
  sectionLine: 1.16,
  body: 18,
  bodyLine: 1.65,
  heroTitleBottom: 16,
  stageTitleBottom: 28,
  textWidth: 768,
  mediaWidth: 1280,
  phoneMediaWidth: 540,
  pageTop: 128,
  headerBottom: 48,
  introBottom: 128,
  sectionGap: 160,
  stageTop: 112,
  titleBottom: 20,
  paragraphGap: 24,
  textToList: 24,
  listGap: 16,
  listNumberGap: 2,
  listNumberTopOffset: 0,
  mediaTop: 56,
  mediaBottomGap: 132,
  mediaGap: 32,
  phoneMediaGap: 56,
  buttonTopGap: 32,
  buttonFont: 12,
  buttonLine: 1.2,
  buttonLetterSpacing: 0.18,
  buttonPaddingX: 28,
  buttonPaddingY: 13,
  buttonRadius: 0,
  nextCaseTitle: 64,
  nextCaseLine: 1.08,
  nextCaseLetterSpacing: -0.03,
};

const designPresets: Record<string, DesignSettings> = {
  Compact: {
    ...defaultDesignSettings,
    heroTitle: 56,
    subtitle: 24,
    stageTitle: 64,
    sectionTitle: 32,
    body: 17,
    bodyLine: 1.55,
    heroTitleBottom: 12,
    stageTitleBottom: 22,
    phoneMediaWidth: 460,
    pageTop: 112,
    introBottom: 96,
    sectionGap: 112,
    stageTop: 88,
    titleBottom: 16,
    paragraphGap: 18,
    textToList: 18,
    listGap: 12,
    listNumberGap: 2,
    listNumberTopOffset: 0,
    mediaTop: 40,
    mediaBottomGap: 96,
    mediaGap: 24,
    phoneMediaGap: 24,
    buttonTopGap: 24,
    buttonFont: 11,
    buttonPaddingX: 24,
    buttonPaddingY: 12,
    buttonRadius: 0,
  },
  Balanced: defaultDesignSettings,
  Airy: {
    ...defaultDesignSettings,
    heroTitle: 76,
    subtitle: 30,
    stageTitle: 92,
    sectionTitle: 42,
    body: 20,
    bodyLine: 1.75,
    heroTitleBottom: 22,
    stageTitleBottom: 36,
    textWidth: 820,
    phoneMediaWidth: 560,
    pageTop: 152,
    introBottom: 168,
    sectionGap: 208,
    stageTop: 144,
    titleBottom: 28,
    paragraphGap: 30,
    textToList: 32,
    listGap: 22,
    listNumberGap: 2,
    listNumberTopOffset: 0,
    mediaTop: 72,
    mediaBottomGap: 172,
    mediaGap: 44,
    phoneMediaGap: 44,
    buttonTopGap: 40,
    buttonFont: 13,
    buttonPaddingX: 34,
    buttonPaddingY: 15,
    buttonRadius: 0,
  },
};

const readStoredDesignSettings = () => {
  if (typeof window === "undefined") return defaultDesignSettings;

  try {
    const currentStored = window.localStorage.getItem(DESIGN_STORAGE_KEY);
    const legacyStored = window.localStorage.getItem(LEGACY_DESIGN_STORAGE_KEY);
    const stored = currentStored || legacyStored;
    if (!stored) return defaultDesignSettings;
    const parsed = JSON.parse(stored) as Partial<DesignSettings>;
    return {
      ...defaultDesignSettings,
      ...parsed,
      listNumberGap: currentStored ? parsed.listNumberGap ?? 2 : 2,
      buttonRadius: parsed.buttonRadius && parsed.buttonRadius > 64 ? 0 : parsed.buttonRadius ?? defaultDesignSettings.buttonRadius,
    } as DesignSettings;
  } catch {
    return defaultDesignSettings;
  }
};

const responsiveSize = (value: number, minRatio = 0.68, vwRatio = 13) =>
  `clamp(${Math.round(value * minRatio)}px, ${(value / vwRatio).toFixed(2)}vw, ${value}px)`;

const RangeControl = ({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = "px",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (value: number) => void;
}) => (
  <label className="block">
    <div className="mb-2 flex items-center justify-between gap-4 text-xs">
      <span className="text-white/75">{label}</span>
      <span className="rounded-full bg-white/10 px-2 py-1 font-medium text-white/80">
        {value}
        {suffix}
      </span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="h-1.5 w-full cursor-pointer accent-[#bada55]"
    />
  </label>
);

const ControlGroup = ({ title, children }: { title: string; children: ReactNode }) => (
  <details className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4" open>
    <summary className="cursor-pointer select-none text-sm font-medium text-white">
      {title}
    </summary>
    <div className="mt-4 space-y-4">{children}</div>
  </details>
);

const DesignControls = ({
  settings,
  onChange,
  onPreset,
  onReset,
  onSave,
  savedAt,
}: {
  settings: DesignSettings;
  onChange: (next: Partial<DesignSettings>) => void;
  onPreset: (preset: DesignSettings) => void;
  onReset: () => void;
  onSave: () => void;
  savedAt: Date | null;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[80] print:hidden">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-[#202020]/95 px-5 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl transition hover:border-[#bada55]/60 hover:text-[#bada55]"
          aria-label="Open design controls"
        >
          <SlidersHorizontal size={18} />
          Design controls
        </button>
      ) : (
        <aside className="w-[min(420px,calc(100vw-32px))] max-h-[78vh] overflow-y-auto rounded-3xl border border-white/15 bg-[#171717]/95 p-5 text-white shadow-2xl backdrop-blur-2xl">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-base font-medium">Design controls</p>
              <p className="mt-1 text-xs leading-5 text-white/50">
                Настраивай типографику и воздух страницы вживую. Значения сохраняются в этом браузере.
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-[#bada55]/80">
                <Check size={13} />
                {savedAt ? `Saved ${savedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Auto-save is on"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Close design controls"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-2">
            {Object.entries(designPresets).map(([name, preset]) => (
              <button
                key={name}
                type="button"
                onClick={() => onPreset(preset)}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/75 transition hover:border-[#bada55]/60 hover:text-[#bada55]"
              >
                {name}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            <ControlGroup title="Main typography">
              <RangeControl label="Hero title" value={settings.heroTitle} min={44} max={96} onChange={(heroTitle) => onChange({ heroTitle })} />
              <RangeControl label="Hero line-height" value={settings.heroLine} min={0.9} max={1.35} step={0.01} suffix="" onChange={(heroLine) => onChange({ heroLine })} />
              <RangeControl label="Subtitle" value={settings.subtitle} min={18} max={40} onChange={(subtitle) => onChange({ subtitle })} />
              <RangeControl label="Subtitle line-height" value={settings.subtitleLine} min={1.1} max={1.7} step={0.01} suffix="" onChange={(subtitleLine) => onChange({ subtitleLine })} />
              <RangeControl label="Body text" value={settings.body} min={15} max={24} onChange={(body) => onChange({ body })} />
              <RangeControl label="Body line-height" value={settings.bodyLine} min={1.35} max={2} step={0.01} suffix="" onChange={(bodyLine) => onChange({ bodyLine })} />
            </ControlGroup>

            <ControlGroup title="Headings">
              <RangeControl label="Section H2 size" value={settings.sectionTitle} min={26} max={56} onChange={(sectionTitle) => onChange({ sectionTitle })} />
              <RangeControl label="Section H2 line-height" value={settings.sectionLine} min={1} max={1.5} step={0.01} suffix="" onChange={(sectionLine) => onChange({ sectionLine })} />
              <RangeControl label="Section H2 → text/list" value={settings.titleBottom} min={8} max={64} onChange={(titleBottom) => onChange({ titleBottom })} />
              <RangeControl label="Stage H2 size" value={settings.stageTitle} min={40} max={112} onChange={(stageTitle) => onChange({ stageTitle })} />
              <RangeControl label="Stage H2 line-height" value={settings.stageLine} min={0.9} max={1.35} step={0.01} suffix="" onChange={(stageLine) => onChange({ stageLine })} />
              <RangeControl label="Previous block → Stage H2" value={settings.stageTop} min={0} max={180} onChange={(stageTop) => onChange({ stageTop })} />
              <RangeControl label="Stage H2 → text" value={settings.stageTitleBottom} min={8} max={80} onChange={(stageTitleBottom) => onChange({ stageTitleBottom })} />
            </ControlGroup>

            <ControlGroup title="Text rhythm">
              <RangeControl label="Hero title → subtitle" value={settings.heroTitleBottom} min={8} max={48} onChange={(heroTitleBottom) => onChange({ heroTitleBottom })} />
              <RangeControl label="Paragraph → paragraph" value={settings.paragraphGap} min={8} max={52} onChange={(paragraphGap) => onChange({ paragraphGap })} />
              <RangeControl label="Text → numbered list" value={settings.textToList} min={8} max={56} onChange={(textToList) => onChange({ textToList })} />
            </ControlGroup>

            <ControlGroup title="Numbered lists">
              <RangeControl label="List item vertical gap" value={settings.listGap} min={8} max={56} onChange={(listGap) => onChange({ listGap })} />
              <RangeControl label="Number → list text" value={settings.listNumberGap} min={2} max={48} onChange={(listNumberGap) => onChange({ listNumberGap })} />
              <RangeControl label="Number vertical offset" value={settings.listNumberTopOffset} min={-12} max={24} onChange={(listNumberTopOffset) => onChange({ listNumberTopOffset })} />
            </ControlGroup>

            <ControlGroup title="Content width">
              <RangeControl label="Text column" value={settings.textWidth} min={640} max={920} onChange={(textWidth) => onChange({ textWidth })} />
              <RangeControl label="Media container" value={settings.mediaWidth} min={980} max={1600} onChange={(mediaWidth) => onChange({ mediaWidth })} />
              <RangeControl label="Phone/video max width" value={settings.phoneMediaWidth} min={360} max={640} onChange={(phoneMediaWidth) => onChange({ phoneMediaWidth })} />
            </ControlGroup>

            <ControlGroup title="Vertical rhythm">
              <RangeControl label="Top offset" value={settings.pageTop} min={96} max={192} onChange={(pageTop) => onChange({ pageTop })} />
              <RangeControl label="Header → intro media" value={settings.headerBottom} min={24} max={96} onChange={(headerBottom) => onChange({ headerBottom })} />
              <RangeControl label="Intro media → content" value={settings.introBottom} min={48} max={220} onChange={(introBottom) => onChange({ introBottom })} />
              <RangeControl label="Between sections" value={settings.sectionGap} min={24} max={240} onChange={(sectionGap) => onChange({ sectionGap })} />
            </ControlGroup>

            <ControlGroup title="Media spacing">
              <RangeControl label="Text block → media" value={settings.mediaTop} min={8} max={112} onChange={(mediaTop) => onChange({ mediaTop })} />
              <RangeControl label="Media → next text" value={settings.mediaBottomGap} min={24} max={240} onChange={(mediaBottomGap) => onChange({ mediaBottomGap })} />
              <RangeControl label="Image/image gap" value={settings.mediaGap} min={12} max={72} onChange={(mediaGap) => onChange({ mediaGap })} />
              <RangeControl label="Video/video gap" value={settings.phoneMediaGap} min={16} max={96} onChange={(phoneMediaGap) => onChange({ phoneMediaGap })} />
            </ControlGroup>

            <ControlGroup title="Buttons">
              <RangeControl label="Text/list → button" value={settings.buttonTopGap} min={8} max={80} onChange={(buttonTopGap) => onChange({ buttonTopGap })} />
              <RangeControl label="Button & CV text size" value={settings.buttonFont} min={10} max={18} onChange={(buttonFont) => onChange({ buttonFont })} />
              <RangeControl label="Button & CV line-height" value={settings.buttonLine} min={0.9} max={2} step={0.01} suffix="" onChange={(buttonLine) => onChange({ buttonLine })} />
              <RangeControl label="Button & CV letter spacing" value={settings.buttonLetterSpacing} min={0} max={0.4} step={0.01} suffix="em" onChange={(buttonLetterSpacing) => onChange({ buttonLetterSpacing })} />
              <RangeControl label="Button padding X" value={settings.buttonPaddingX} min={16} max={56} onChange={(buttonPaddingX) => onChange({ buttonPaddingX })} />
              <RangeControl label="Button padding Y" value={settings.buttonPaddingY} min={8} max={26} onChange={(buttonPaddingY) => onChange({ buttonPaddingY })} />
              <RangeControl label="Button radius" value={settings.buttonRadius} min={0} max={64} onChange={(buttonRadius) => onChange({ buttonRadius })} />
            </ControlGroup>

            <ControlGroup title="Next case study">
              <RangeControl label="Title size" value={settings.nextCaseTitle} min={36} max={104} onChange={(nextCaseTitle) => onChange({ nextCaseTitle })} />
              <RangeControl label="Title line-height" value={settings.nextCaseLine} min={0.85} max={1.5} step={0.01} suffix="" onChange={(nextCaseLine) => onChange({ nextCaseLine })} />
              <RangeControl label="Title letter spacing" value={settings.nextCaseLetterSpacing} min={-0.08} max={0.12} step={0.01} suffix="em" onChange={(nextCaseLetterSpacing) => onChange({ nextCaseLetterSpacing })} />
            </ControlGroup>
          </div>

          <button
            type="button"
            onClick={onSave}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#bada55] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#d7ff69]"
          >
            <Save size={16} />
            Save settings
          </button>

          <button
            type="button"
            onClick={onReset}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
          >
            <RotateCcw size={16} />
            Reset to default
          </button>
        </aside>
      )}
    </div>
  );
};

const MediaGrid = ({
  images,
  layout = "full",
  settings,
}: {
  images: CaseMedia[];
  layout?: CaseSection["imageLayout"];
  settings: DesignSettings;
}) => {
  if (!images.length) return null;

  if (layout === "video-overlay" && images.length >= 2) {
    const leadingImages = images.slice(0, -2);
    const backgroundImage = images[images.length - 2];
    const overlayVideo = images[images.length - 1];

    return (
      <div
        className="px-6 mx-auto"
        style={{
          marginTop: settings.mediaTop,
          maxWidth: settings.mediaWidth,
        }}
      >
        <div className="flex flex-col" style={{ gap: settings.mediaGap }}>
          {leadingImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-sm object-cover"
              referrerPolicy="no-referrer"
            />
          ))}

          <div className="relative w-full overflow-hidden rounded-sm">
            <img
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              className="block w-full h-auto"
              referrerPolicy="no-referrer"
            />
            {overlayVideo.videoSrc && (
              <video
                className="absolute object-cover"
                style={{
                  left: "2.75%",
                  top: "18.8%",
                  width: "69.93%",
                  height: "74.45%",
                }}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={overlayVideo.src}
                aria-label={overlayVideo.alt}
              >
                <source src={overlayVideo.videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    );
  }

  const isPhoneGrid = layout === "phone-grid";
  const isTwoPhoneGroup = isPhoneGrid && images.length === 2;
  const isTextStack = layout === "text-stack";

  const gridClass =
    isPhoneGrid
      ? isTwoPhoneGroup
        ? "grid grid-cols-1 sm:grid-cols-2 items-start justify-center"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start"
      : isTextStack
        ? "flex flex-col"
      : layout === "grid"
        ? "grid grid-cols-1 md:grid-cols-2 items-start"
        : "flex flex-col";

  const mediaGap = isPhoneGrid ? settings.phoneMediaGap : settings.mediaGap;
  const wrapperMaxWidth = isTwoPhoneGroup
    ? settings.textWidth
    : isPhoneGrid
      ? settings.mediaWidth
      : isTextStack
        ? settings.textWidth
      : settings.mediaWidth;
  const phoneMaxWidth = isTwoPhoneGroup ? undefined : settings.phoneMediaWidth;

  return (
    <div
      className="px-6 mx-auto"
      style={{
        marginTop: settings.mediaTop,
        maxWidth: wrapperMaxWidth,
      }}
    >
      <div
        className={gridClass}
        style={{ gap: mediaGap }}
      >
        {images.map((image) => (
          image.videoSrc ? (
            <video
              key={image.videoSrc}
              className="w-full h-auto rounded-sm object-cover mx-auto"
              style={isPhoneGrid ? { maxWidth: phoneMaxWidth } : undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={image.src}
              aria-label={image.alt}
            >
              <source src={image.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-sm object-cover mx-auto"
              style={isPhoneGrid ? { maxWidth: phoneMaxWidth } : undefined}
              referrerPolicy="no-referrer"
            />
          )
        ))}
      </div>
    </div>
  );
};

const SectionButtons = ({ section, settings }: { section: CaseSection; settings: DesignSettings }) => {
  if (!section.buttons?.length) return null;

  return (
    <div
      className="flex w-full flex-col items-stretch"
      style={{
        gap: Math.max(10, settings.buttonPaddingY),
        marginTop: settings.buttonTopGap,
      }}
    >
      {section.buttons.map((button) => (
        <a
          key={`${button.label}-${button.href}`}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 border border-[#A3E635] bg-transparent font-bold uppercase text-[#A3E635] transition-all hover:scale-[1.01] hover:bg-[#A3E635]/10"
          style={{
            borderRadius: settings.buttonRadius,
            fontSize: settings.buttonFont,
            lineHeight: settings.buttonLine,
            letterSpacing: `${settings.buttonLetterSpacing}em`,
            padding: `${settings.buttonPaddingY}px ${settings.buttonPaddingX}px`,
          }}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
};

const DetailedSection = ({ section, settings }: { section: CaseSection; settings: DesignSettings }) => (
  <section style={section.stage ? { paddingTop: settings.stageTop } : undefined}>
    <div className="px-6 mx-auto" style={{ maxWidth: settings.textWidth }}>
      {section.showTitle !== false && (
        <h2
          className={
            section.stage
              ? "font-sans font-light tracking-tight text-white/95"
              : "font-sans font-light tracking-tight text-white/90"
          }
          style={{
            fontSize: section.stage
              ? responsiveSize(settings.stageTitle, 0.6, 13)
              : responsiveSize(settings.sectionTitle, 0.72, 14),
            lineHeight: section.stage ? settings.stageLine : settings.sectionLine,
            marginBottom: section.stage ? settings.stageTitleBottom : settings.titleBottom,
          }}
        >
          {section.title}
        </h2>
      )}

      {section.paragraphs?.map((paragraph, index) => {
        const isLastParagraph = index === (section.paragraphs?.length || 0) - 1;
        const nextGap = isLastParagraph
          ? section.orderedList
            ? settings.textToList
            : 0
          : settings.paragraphGap;

        return (
        <p
          key={paragraph}
          className="font-light text-[#b3b3b3]"
          style={{
            fontSize: settings.body,
            lineHeight: settings.bodyLine,
            marginBottom: nextGap,
          }}
        >
          {paragraph}
        </p>
        );
      })}

      {section.orderedList && (
        <ol
          className="font-light text-[#b3b3b3] mb-8"
          style={{
            fontSize: settings.body,
            lineHeight: settings.bodyLine,
            display: "grid",
            gap: settings.listGap,
          }}
        >
          {section.orderedList.map((item, i) => (
            <li
              key={item}
              className="grid grid-cols-[2rem_1fr]"
              style={{ columnGap: settings.listNumberGap }}
            >
              <span
                className="text-white/40"
                style={{ paddingTop: settings.listNumberTopOffset }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      )}

      <SectionButtons section={section} settings={settings} />
    </div>

    {section.images && <MediaGrid images={section.images} layout={section.imageLayout} settings={settings} />}
  </section>
);

export default function CaseStudy() {
  const [designSettings, setDesignSettings] = useState<DesignSettings>(readStoredDesignSettings);
  const [savedAt, setSavedAt] = useState<Date | null>(null);
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  const saveDesignSettings = (settings = designSettings) => {
    window.localStorage.setItem(DESIGN_STORAGE_KEY, JSON.stringify(settings));
    setSavedAt(new Date());
  };

  useEffect(() => {
    saveDesignSettings(designSettings);
  }, [designSettings]);

  useEffect(() => {
    document.documentElement.style.setProperty("--case-button-radius", `${designSettings.buttonRadius}px`);
    document.documentElement.style.setProperty("--case-button-font-size", `${designSettings.buttonFont}px`);
    document.documentElement.style.setProperty("--case-button-line-height", `${designSettings.buttonLine}`);
    document.documentElement.style.setProperty("--case-button-letter-spacing", `${designSettings.buttonLetterSpacing}em`);
  }, [designSettings.buttonRadius, designSettings.buttonFont, designSettings.buttonLine, designSettings.buttonLetterSpacing]);

  const updateDesignSettings = (next: Partial<DesignSettings>) => {
    setDesignSettings((current) => ({ ...current, ...next }));
  };

  const pageStyle = useMemo(
    () => ({
      paddingTop: designSettings.pageTop,
      paddingBottom: 160,
    }),
    [designSettings.pageTop]
  );

  if (!project) return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl">Project not found</h1>
    </div>
  );

  const detailedCase = project.id === "weather-integration"
    ? weatherIntegrationCase
    : project.id === "notifications"
      ? notificationsCase
      : project.id === "wall-tablet"
        ? wallTabletCase
      : project.id === "smart-scenarios"
        ? smartScenariosCase
      : null;
  const title = detailedCase?.title || project.title;
  const subtitle = detailedCase?.subtitle || project.subtitle;
  const titleLines = detailedCase?.titleLines;

  return (
    <main className="text-brand-text bg-[#181818] min-h-screen" style={pageStyle}>
      {SHOW_DESIGN_CONTROLS && detailedCase && (
        <DesignControls
          settings={designSettings}
          onChange={updateDesignSettings}
          onPreset={setDesignSettings}
          onReset={() => setDesignSettings(defaultDesignSettings)}
          onSave={() => saveDesignSettings()}
          savedAt={savedAt}
        />
      )}

      <div className="px-6 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-white transition-colors mb-12 group text-sm font-medium">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
        <header style={{ marginBottom: designSettings.headerBottom }}>
           <h1
             className="font-sans font-light tracking-tight text-white/95 max-w-5xl"
             style={{
               fontSize: responsiveSize(designSettings.heroTitle, 0.64, 13),
               lineHeight: designSettings.heroLine,
               marginBottom: designSettings.heroTitleBottom,
             }}
           >
             {titleLines ? (
               <>
                 {titleLines.map((line, index) => (
                   <span
                     key={line}
                     className={`block ${project.id === "notifications" && index === 1 ? "md:whitespace-nowrap text-[0.86em]" : ""}`}
                   >
                     {line}
                   </span>
                 ))}
               </>
             ) : title}
           </h1>
           {subtitle && (
             <p
               className="font-sans font-light text-[#a3a3a3] max-w-4xl"
               style={{
                 fontSize: responsiveSize(designSettings.subtitle, 0.72, 18),
                 lineHeight: designSettings.subtitleLine,
               }}
             >
               {subtitle}
             </p>
           )}
        </header>
      </div>

      {detailedCase?.introImages && (
        <div
          className="px-6 mx-auto"
          style={{
            marginBottom: designSettings.introBottom,
            maxWidth: designSettings.mediaWidth,
          }}
        >
          <div
            className={`grid grid-cols-1 items-start ${detailedCase.introImages.length > 1 ? "sm:grid-cols-3" : ""}`}
            style={{ gap: designSettings.phoneMediaGap }}
          >
            {detailedCase.introImages.map((image) => (
              image.videoSrc ? (
                <video
                  key={image.videoSrc}
                  className="w-full h-auto mx-auto rounded-sm object-cover"
                  style={detailedCase.introImages.length > 1 ? { maxWidth: designSettings.phoneMediaWidth } : undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={image.src}
                  aria-label={image.alt}
                >
                  <source src={image.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto mx-auto rounded-sm object-cover"
                  style={detailedCase.introImages.length > 1 ? { maxWidth: designSettings.phoneMediaWidth } : undefined}
                  referrerPolicy="no-referrer"
                />
              )
            ))}
          </div>
        </div>
      )}

      {!detailedCase && project.thumbnail && (
        <div className="px-6 max-w-7xl mx-auto mb-24">
           <img src={project.thumbnail} alt={project.title} className="w-full h-auto object-cover rounded-sm" referrerPolicy="no-referrer" />
        </div>
      )}

      {detailedCase ? (
        <div>
          {detailedCase.sections.map((section, index) => {
            const isLastSection = index === detailedCase.sections.length - 1;
            const nextGap = isLastSection
              ? 0
              : section.images?.length
                ? designSettings.mediaBottomGap
                : designSettings.sectionGap;

            return (
            <div key={section.title} style={{ marginBottom: nextGap }}>
              <DetailedSection section={section} settings={designSettings} />
            </div>
            );
          })}
        </div>
      ) : (
      <div className="space-y-24">
        
        {/* Intro Meta */}
        <div className="px-6 max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-3xl md:text-4xl font-sans font-light mb-3 tracking-tight text-white/90">About product</h2>
            <p className="text-lg leading-[1.5] font-light text-[#b3b3b3]">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-sans font-light mb-3 tracking-tight text-white/90">My role</h2>
            <p className="text-lg leading-[1.5] font-light text-[#b3b3b3]">
              {project.roles.join(', ')}. {project.roleSummary}
            </p>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-sans font-light mb-3 tracking-tight text-white/90">Business goals</h2>
            <ul className="text-lg leading-[1.5] font-light text-[#b3b3b3] space-y-2">
              {project.results.map((res, i) => (
                <li key={i}>{i + 1}. {res.label}{res.value ? `: ${res.value}` : ''}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Discovery Stage */}
        <section className="pt-12">
           <div className="px-6 max-w-3xl mx-auto">
             <h2 className="text-5xl md:text-[5rem] font-sans font-light mb-4 tracking-tight text-white/95 leading-none">Discovery stage</h2>
             <p className="text-lg leading-[1.5] font-light text-[#b3b3b3] mb-12">
               {project.problem}
             </p>
           </div>

           {project.visualizations[0] && (
             <div className="px-6 max-w-7xl mx-auto mb-16">
               <img src={project.visualizations[0]} alt="Discovery visualization" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
             </div>
           )}

           <div className="px-6 max-w-3xl mx-auto">
             <h3 className="text-3xl font-sans font-light mb-3 tracking-tight text-white/90">{project.discoveryTitle}</h3>
             <ol className="text-lg leading-[1.5] font-light text-[#b3b3b3] space-y-1">
               {project.discoveryPoints.map((point, i) => <li key={point}>{i + 1}. {point}</li>)}
             </ol>
           </div>
        </section>

        {/* Development Stage */}
        <section className="pt-12">
           <div className="px-6 max-w-3xl mx-auto">
             <h2 className="text-5xl md:text-[5rem] font-sans font-light mb-4 tracking-tight text-white/95 leading-none">Development stage</h2>
             <p className="text-lg leading-[1.5] font-light text-[#b3b3b3] mb-12">
               {project.solution}
             </p>
           </div>

           {project.visualizations[1] && (
             <div className="px-6 max-w-7xl mx-auto mb-16">
               <img src={project.visualizations[1]} alt="Development visualization" className="w-full h-auto rounded-sm object-cover" referrerPolicy="no-referrer" />
             </div>
           )}

           <div className="px-6 max-w-3xl mx-auto">
             <h3 className="text-3xl font-sans font-light mb-3 tracking-tight text-white/90">{project.developmentTitle}</h3>
             <ul className="text-lg leading-[1.5] font-light text-[#b3b3b3] list-none mb-12 space-y-2">
               {project.developmentPoints.map((point, i) => <li key={point}>{i + 1}. {point}</li>)}
             </ul>
           </div>
        </section>

         {/* Outcome */}
         <section className="pt-12 mb-24 px-6 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-sans font-light mb-3 tracking-tight text-white/90">Outcome & Takeaway</h2>
           <p className="text-2xl leading-[1.6] font-light text-[#e0e0e0] italic border-l-2 border-white/20 pl-6 py-2">
             "{project.conclusion}"
           </p>
        </section>
      </div>
      )}

      <div className="mx-auto w-full px-6" style={{ maxWidth: designSettings.mediaWidth }}>
        <section className="border-t border-white/10 pt-24 mt-32">
           <p className="text-sm text-brand-muted mb-8 tracking-widest uppercase font-bold">Next Case Study</p>
           <Link to={`/case/${projects[projects.findIndex(p => p.id === id) + 1]?.id || projects[0].id}`} className="group block w-full">
              <h2
                className="w-full font-sans font-light text-white group-hover:text-brand-accent transition-colors"
                style={{
                  fontSize: responsiveSize(designSettings.nextCaseTitle, 0.58, 13),
                  lineHeight: designSettings.nextCaseLine,
                  letterSpacing: `${designSettings.nextCaseLetterSpacing}em`,
                  overflowWrap: 'anywhere',
                }}
              >
                {projects[projects.findIndex(p => p.id === id) + 1]?.title || projects[0].title}
              </h2>
           </Link>
        </section>
      </div>
    </main>
  );
}
