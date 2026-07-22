export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 bg-background px-6 py-24 text-foreground">
      <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
        Design system check
      </p>
      <h1 className="max-w-2xl text-center font-display text-5xl leading-tight tracking-tight">
        Where Ancient Wisdom Meets Future Innovation
      </h1>
      <p className="max-w-xl text-center font-sans text-lg leading-relaxed text-muted-foreground">
        Educating Minds. Nurturing Character. Building a Sustainable Future.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="rounded-button bg-primary px-6 py-3 text-sm font-medium text-on-primary">
          Primary
        </button>
        <button className="rounded-button bg-accent px-6 py-3 text-sm font-medium text-on-accent">
          Accent
        </button>
        <button className="rounded-button bg-secondary px-6 py-3 text-sm font-medium text-on-secondary">
          Secondary
        </button>
        <button className="rounded-button bg-whatsapp px-6 py-3 text-sm font-medium text-on-whatsapp">
          WhatsApp
        </button>
      </div>
      <div className="rounded-card border border-border bg-surface-raised p-6">
        <p className="text-sm text-muted-foreground">Surface card on background</p>
      </div>
    </div>
  );
}
