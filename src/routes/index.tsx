import { createFileRoute } from "@tanstack/react-router";
import {
  AirVent,
  BedDouble,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Flower2,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  Refrigerator,
  ShieldCheck,
  Sparkles,
  Trees,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import cocinaAngulo from "@/assets/studio/cocina-angulo.webp.asset.json";
import cocinaPasillo from "@/assets/studio/cocina-pasillo.webp.asset.json";
import regadera from "@/assets/studio/regadera.webp.asset.json";
import pasilloTerraza from "@/assets/studio/pasillo-terraza.webp.asset.json";
import terrazaDescanso from "@/assets/studio/terraza-descanso.webp.asset.json";
import terrazaJardin from "@/assets/studio/terraza-jardin.webp.asset.json";
import terrazaSillas from "@/assets/studio/terraza-sillas.webp.asset.json";
import terrazaPanorama from "@/assets/studio/terraza-panorama.webp.asset.json";
import terrazaPortada from "@/assets/studio/terraza-portada.png.asset.json";
import habitacionEntrada from "@/assets/studio/habitacion-entrada.png.asset.json";
import habitacionCama from "@/assets/studio/habitacion-cama.png.asset.json";
import cocinaBarra from "@/assets/studio/cocina-barra.png.asset.json";
import cocinaFrontal from "@/assets/studio/cocina-frontal.png.asset.json";
import cocinaEquipada from "@/assets/studio/cocina-equipada.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jungle Studio El Pitillal | Estudio en renta" },
      {
        name: "description",
        content:
          "Estudio amueblado con terraza, cocina e internet en El Pitillal, Puerto Vallarta. Renta mensual de $7,000 MXN.",
      },
      { property: "og:title", content: "Jungle Studio El Pitillal" },
      {
        property: "og:description",
        content: "Un refugio bohemio amueblado con terraza en Puerto Vallarta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://jungle-studio-pv.lovable.app${terrazaPortada.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://jungle-studio-pv.lovable.app${terrazaPortada.url}` },
    ],
  }),
  component: Index,
});

const photos = [
  { src: terrazaPortada.url, alt: "Terraza techada entre plantas con área de descanso", shape: "wide" },
  { src: habitacionCama.url, alt: "Habitación amueblada con cama y espejo entre plantas", shape: "wide" },
  { src: terrazaSillas.url, alt: "Terraza con sillas artesanales de colores y vista a la montaña", shape: "wide" },
  { src: cocinaBarra.url, alt: "Cocina equipada con barra, frigobar y ventilador", shape: "tall" },
  { src: regadera.url, alt: "Regadera amplia con calentador eléctrico instantáneo", shape: "tall" },
  { src: terrazaDescanso.url, alt: "Área de lectura y descanso rodeada de plantas", shape: "tall" },
  { src: habitacionEntrada.url, alt: "Habitación luminosa con cama, mesa y vegetación", shape: "tall" },
  { src: cocinaEquipada.url, alt: "Cocina equipada con fregadero y parrilla", shape: "tall" },
  { src: terrazaPanorama.url, alt: "Terraza con sillas de colores y vista verde", shape: "tall" },
  { src: cocinaFrontal.url, alt: "Vista frontal de cocina con barra", shape: "tall" },
  { src: cocinaAngulo.url, alt: "Cocina con parrilla y amplias superficies", shape: "wide" },
  { src: pasilloTerraza.url, alt: "Acceso a la terraza por pasillo cubierto", shape: "tall" },
  { src: terrazaJardin.url, alt: "Jardín en terraza bajo techo", shape: "tall" },
  { src: cocinaPasillo.url, alt: "Área de cocina y acceso a habitación", shape: "tall" },
];

const amenities = [
  { icon: Droplets, title: "Todos los servicios incluidos", text: "Agua, gas e internet (excepto electricidad)" },
  { icon: Wifi, title: "Internet de alta velocidad", text: "Ideal para trabajar a distancia" },
  { icon: Flower2, title: "Áreas comunes", text: "Mantenimiento incluido" },
  { icon: AirVent, title: "Aire acondicionado", text: "Además de ventilador de techo" },
  { icon: Refrigerator, title: "Cocina equipada", text: "Parrilla, frigobar y servicio" },
  { icon: Trees, title: "Terraza privada", text: "Tu rincón verde al aire libre" },
  { icon: PawPrint, title: "Pet friendly", text: "Se acepta 1 mascota (perro o gato), sujeto a criterio y depósito adicional. Su dueño se hace 100% responsable de su limpieza y cuidado en todas las áreas." },
  { icon: Camera, title: "Cámara de seguridad", text: "En tu entrada, con acceso solo para ti" },
];

const whatsappLink = "https://wa.me/523222128950?text=Hola,%20me%20interesa%20el%20estudio%20en%20El%20Pitillal";

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (activePhoto === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "ArrowRight") setActivePhoto((activePhoto + 1) % photos.length);
      if (event.key === "ArrowLeft") setActivePhoto((activePhoto - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePhoto]);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedPhoto = activePhoto === null ? undefined : photos[activePhoto];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-40 border-b border-hero-line bg-hero-wash text-hero-foreground backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Jungle Studio, inicio">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-hero-line bg-hero-wash">
              <Trees className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 font-display text-lg leading-none">Jungle Studio <em className="block pt-1 font-body text-[10px] not-italic uppercase tracking-[0.24em] opacity-75">El Pitillal</em></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Navegación principal">
            <a href="#espacio" className="transition-opacity hover:opacity-65">El espacio</a>
            <a href="#galeria" className="transition-opacity hover:opacity-65">Galería</a>
            <a href="#detalles" className="transition-opacity hover:opacity-65">Detalles</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-hero-foreground px-5 py-2.5 text-hero-contrast transition-transform hover:-translate-y-0.5">Agendar visita</a>
          </nav>
          <button type="button" className="grid size-10 place-items-center rounded-full border border-hero-line md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="grid gap-1 border-t border-hero-line bg-hero-mobile px-5 py-4 md:hidden" aria-label="Navegación móvil">
            {([['espacio', 'El espacio'], ['galeria', 'Galería'], ['detalles', 'Detalles']] as const).map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="rounded-md px-4 py-3 text-left font-medium hover:bg-hero-wash">{label}</button>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-md px-4 py-3 text-left font-medium hover:bg-hero-wash">Agendar visita</a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] items-end overflow-hidden">
        <img src={terrazaPortada.url} alt="Terraza de Jungle Studio rodeada de vegetación" className="absolute inset-0 size-full object-cover object-center" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 text-hero-foreground sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em]">
            <MapPin className="size-4" /> El Pitillal · Puerto Vallarta
          </div>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-8xl">
            Tu estudio bohemio con <em className="font-normal text-hero-accent">terraza privada</em> en El Pitillal
          </h1>
          <div className="mt-7 flex max-w-3xl flex-col items-start gap-7 border-t border-hero-line pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-relaxed text-hero-muted sm:text-lg">Un espacio tranquilo, con mucha luz natural y áreas verdes, a minutos del centro de Puerto Vallarta.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5">
              Agendar visita <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="espacio" className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Un espacio con alma</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Un refugio bohemio y rústico con mucho encanto.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">Diseñado para quienes valoran la calma, la independencia y una conexión cotidiana con la naturaleza. Un estudio amueblado, luminoso y funcional para sentirte en casa desde el primer día.</p>
              <div className="mt-8 inline-flex items-baseline gap-2 border-b border-primary/30 pb-3">
                <span className="font-display text-4xl text-primary">$7,000</span>
                <span className="text-sm text-muted-foreground">MXN / mes</span>
              </div>
            </div>
            <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
              {[
                [BedDouble, "Descanso", "Cama matrimonial, clóset, aire acondicionado y ventilador de techo."],
                [Refrigerator, "Cocina", "Parrilla, frigobar y servicio completo para cuatro personas."],
                [Droplets, "Baño dividido", "WC y lavamanos separados de la regadera con calentador eléctrico instantáneo."],
                [Trees, "Vida exterior", "Terraza techada con áreas verdes y espacios para leer o descansar."],
              ].map(([Icon, title, text]) => {
                const FeatureIcon = Icon as typeof BedDouble;
                return <article key={title as string} className="bg-background p-7 sm:p-8"><FeatureIcon className="size-6 text-primary" /><h3 className="mt-8 font-display text-2xl">{title as string}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text as string}</p></article>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="galeria" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="eyebrow">Conócelo por dentro</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Cada rincón, <em className="font-normal text-primary">a tu ritmo.</em></h2></div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Explora las áreas interiores y la terraza. Toca cualquier foto para verla completa.</p>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-2 sm:auto-rows-[280px] sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <button key={photo.src} type="button" onClick={() => setActivePhoto(index)} className={`group relative overflow-hidden rounded-sm bg-muted ${index === 0 ? "col-span-2 row-span-2" : photo.shape === "wide" ? "col-span-2" : ""}`} aria-label={`Ampliar foto: ${photo.alt}`}>
                <img src={photo.src} alt={photo.alt} loading={index > 3 ? "lazy" : "eager"} className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute inset-0 bg-gallery-hover opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-gallery-control text-gallery-control-foreground opacity-0 transition-opacity group-hover:opacity-100"><Sparkles className="size-4" /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-soft">Todo lo esencial</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Comodidad sin complicaciones.</h2></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-primary-line bg-primary-line sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon: Icon, title, text }) => <article key={title} className="bg-primary p-6 sm:p-7"><Icon className="size-6 text-primary-soft" /><h3 className="mt-6 font-semibold">{title}</h3><p className="mt-1 text-sm text-primary-muted">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="detalles" className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid overflow-hidden rounded-md border border-border bg-background lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between bg-secondary p-8 sm:p-12">
              <div><p className="eyebrow">Renta mensual</p><p className="mt-5 font-display text-6xl text-primary sm:text-7xl">$7,000</p><p className="mt-2 text-sm text-muted-foreground">pesos mexicanos al mes</p></div>
              <div className="mt-12 border-t border-border pt-6"><p className="text-sm font-semibold">Todos los servicios incluidos (excepto electricidad)</p><ul className="mt-2 list-disc pl-4 text-sm leading-6 text-muted-foreground"><li>Agua</li><li>Gas</li><li>Internet de alta velocidad</li><li>Mantenimiento de áreas comunes</li></ul></div>
            </div>
            <div className="p-8 sm:p-12">
              <p className="eyebrow">Requisitos de arrendamiento</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl">Claro desde el principio.</h2>
              <ul className="mt-8 grid gap-5">
                 {["2 meses de depósito en garantía, por tratarse de un espacio amueblado.", "1 mes de renta adelantada.", "Comprobante de ingresos.", "Referencias personales o laborales.", "Máximo 2 personas.", "Contrato mínimo de 6 meses."].map((item) => <li key={item} className="flex gap-4 border-b border-border pb-5 text-sm leading-6"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3.5" /></span>{item}</li>)}
              </ul>
              <div className="mt-7 flex gap-3 rounded-md bg-muted p-4 text-xs leading-5 text-muted-foreground"><ShieldCheck className="size-5 shrink-0 text-primary" />La dirección exacta se comparte únicamente al confirmar una visita.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 text-hero-foreground sm:py-32">
        <img src={terrazaSillas.url} alt="Vista desde la terraza de Jungle Studio en El Pitillal" loading="lazy" className="absolute inset-0 -z-20 size-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-location-overlay" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <MapPin className="size-7 text-hero-accent" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-hero-muted">Ubicación</p>
          <h2 className="mt-4 max-w-2xl font-display text-5xl sm:text-6xl">El Pitillal, Puerto Vallarta</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted">Vive en un barrio auténtico, seguro y bien conectado. A solo 3 calles encontrarás el mercado local de alimentos frescos y el mercado de mariscos. También hay centros comerciales, hospitales y escuelas cercanas. A 4 cuadras tienes acceso al río, ideal para caminar o relajarte, y justo al lado del edificio hay un gimnasio. Todo lo que necesitas está a la mano.</p>
        </div>
      </section>

      <section id="contacto" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
          <div><p className="eyebrow">Ven a conocerlo</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">¿Te imaginas viviendo aquí?</h2><p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">Interesados enviar mensaje para agendar cita. No se comparte la dirección exacta por seguridad.</p></div>
          <div className="grid gap-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"><MessageCircle className="size-4" /> Contactar por WhatsApp</a>
            <p className="text-sm text-muted-foreground">Te responderé por WhatsApp para agendar una visita.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><span className="font-display text-lg text-foreground">Jungle Studio El Pitillal</span><span>Un rincón verde en Puerto Vallarta.</span></div>
      </footer>

      {activePhoto !== null && selectedPhoto && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-lightbox p-3 sm:p-8" role="dialog" aria-modal="true" aria-label="Visor de fotografías" onClick={() => setActivePhoto(null)}>
          <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="max-h-[88vh] max-w-full rounded-sm object-contain shadow-photo" onClick={(event) => event.stopPropagation()} />
          <button type="button" onClick={() => setActivePhoto(null)} className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-gallery-control text-gallery-control-foreground" aria-label="Cerrar fotografía"><X className="size-5" /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setActivePhoto((activePhoto - 1 + photos.length) % photos.length); }} className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-gallery-control text-gallery-control-foreground sm:left-7" aria-label="Fotografía anterior"><ChevronLeft className="size-6" /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setActivePhoto((activePhoto + 1) % photos.length); }} className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-gallery-control text-gallery-control-foreground sm:right-7" aria-label="Fotografía siguiente"><ChevronRight className="size-6" /></button>
          <span className="absolute bottom-4 rounded-full bg-gallery-control px-4 py-2 text-xs text-gallery-control-foreground">{activePhoto + 1} / {photos.length}</span>
        </div>
      )}
    </main>
  );
}