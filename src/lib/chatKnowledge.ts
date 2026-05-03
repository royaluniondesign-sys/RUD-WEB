// ─── Sales knowledge base for RUD Studio chat widget ─────────────────────────
// Each intent has keyword patterns + a response. Matching is case-insensitive.
// ─────────────────────────────────────────────────────────────────────────────

export type ChatMessage = {
  id: string
  role: 'bot' | 'user'
  text: string
  chips?: string[]
}

export type Intent = {
  patterns: string[]
  response: string
  chips?: string[]
}

export const WELCOME_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'bot',
  text: 'Hola 👋 Soy Hermes, el agente de RUD Studio. ¿En qué puedo ayudarte hoy?',
  chips: ['¿Cuánto cuesta?', 'Ver servicios', 'Rótulos & señalética', 'IA & automatización'],
}

export const INTENTS: Intent[] = [
  // ── Precios ─────────────────────────────────────────────────────────────────
  {
    patterns: ['precio', 'cuánto', 'cuanto', 'cuesta', 'coste', 'presupuesto', 'tarifa', 'cobras', 'inversión', 'inversion', 'vale', 'euros'],
    response: `Orientativamente, estos son nuestros rangos:\n\n**Señalética & Rótulos**\n• Vinilo escaparate — desde 150 €\n• Neón LED personalizado — desde 800 €\n• Letras corpóreas (aluminio/metacrilato) — desde 1.200 €\n• Rótulo luminoso caja de luz — desde 1.500 €\n\n**Proyectos digitales**\n• Branding completo — desde 3.500 €\n• Diseño web & dev — desde 2.800 €\n• E-commerce Shopify — desde 4.500 €\n• Proyecto integral — desde 8.000 €\n\nTodos los presupuestos son sin compromiso y los preparamos en **menos de 24h**.`,
    chips: ['Pedir presupuesto', '¿Qué incluye?', 'Ver tiempos'],
  },

  // ── Branding ─────────────────────────────────────────────────────────────────
  {
    patterns: ['branding', 'logo', 'logotipo', 'identidad', 'marca', 'brand', 'visual', 'naming', 'tagline', 'guidelines'],
    response: `Nuestro **branding estratégico** va mucho más allá de un logo:\n\n• Auditoría de mercado y análisis competitivo\n• Workshops de posicionamiento y propuesta de valor\n• Sistema de identidad visual completo (logo, color, tipografía, iconografía)\n• Motion principles y micro-animaciones\n• Brand Guidelines extenso — PDF + Figma editable\n• Todas las aplicaciones: tarjetas, papelería, packaging, señalética\n\nTrabajamos directamente con el director creativo, **sin juniors**. Entrega en 6–10 semanas.`,
    chips: ['¿Cuánto cuesta?', 'Ver trabajos', 'Pedir presupuesto'],
  },

  // ── Web ──────────────────────────────────────────────────────────────────────
  {
    patterns: ['web', 'página', 'pagina', 'website', 'next', 'react', 'wordpress', 'landing', 'desarrollo', 'programación', 'lighthouse', 'seo', 'core web'],
    response: `Diseñamos y desarrollamos webs con **obsesión técnica**:\n\n• UX Research y arquitectura de información\n• Diseño UI pixel-perfect en Figma\n• Desarrollo Next.js / React (no WordPress)\n• SEO técnico completo: sitemap, schema.org, meta tags\n• **95+ en Lighthouse y Core Web Vitals en verde** desde el día uno\n• Google Analytics 4, Hotjar y tracking completo\n\nSin templates. Sin compromisos de performance. Desde **2.800 €**, entrega en 8–12 semanas.`,
    chips: ['¿Cuánto cuesta?', 'E-commerce Shopify', 'Pedir presupuesto'],
  },

  // ── Rótulos ──────────────────────────────────────────────────────────────────
  {
    patterns: ['rótulo', 'rotulo', 'neón', 'neon', 'luminoso', 'letras', 'corpóreas', 'corporeas', 'vinilo', 'escaparate', 'señalética', 'señaletica', 'señal', 'publicidad', 'fachada', 'instalación', 'instalacion', 'fabricación', 'fabricacion'],
    response: `Fabricamos e instalamos en **taller propio en Barcelona**:\n\n• **Neón LED & neón de vidrio** — cualquier tipografía o forma, desde 800 €\n• **Rótulos luminosos** (caja de luz, backlit LED) — desde 1.500 €\n• **Letras corpóreas** (aluminio, metacrilato, 3D retroiluminado) — desde 1.200 €\n• **Vinilos escaparate** (impresos, esmerilados, recortados) — desde 150 €\n• **Señalética interior** (wayfinding, directorios, accesos)\n• **Publicidad exterior** (lonas, banderolas, wrapping)\n\n✅ Visita técnica gratuita en BCN · Presupuesto en 24h · Instalación incluida`,
    chips: ['¿Cuánto cuesta?', 'Proceso de fabricación', 'Pedir presupuesto'],
  },

  // ── E-commerce ───────────────────────────────────────────────────────────────
  {
    patterns: ['ecommerce', 'e-commerce', 'shopify', 'tienda', 'online', 'carrito', 'checkout', 'producto', 'venta', 'crm', 'erp'],
    response: `Construimos **e-commerce que convierten**, no solo se ven bien:\n\n• Shopify Plus / WooCommerce avanzado\n• Arquitectura de producto y UX de catálogo\n• Checkout optimizado para conversión (CRO)\n• Integraciones ERP, PIM y pasarelas de pago\n• Email automation: carrito abandonado, post-compra, fidelización\n• Analytics e-commerce y dashboard de KPIs\n\nDesde **4.500 €**, entrega en 8–12 semanas.`,
    chips: ['¿Cuánto cuesta?', 'Diseño web estándar', 'Pedir presupuesto'],
  },

  // ── IA & Automatización ──────────────────────────────────────────────────────
  {
    patterns: ['ia', 'inteligencia', 'aura', 'hermes', 'agente', 'automatización', 'automatizacion', 'n8n', 'ollama', 'bot', 'robot', 'workflow', 'local', 'privado'],
    response: `Implementamos **agentes de IA autónomos** adaptados a tu negocio — los mismos que usamos en RUD:\n\n• **Aura** — análisis, generación de contenido y atención al cliente 24/7\n• **Hermes** — automatiza flujos, CRM, leads y reporting con n8n\n• **100% local con Ollama** — sin coste de API recurrente, sin que tus datos salgan de tu servidor\n• Voz clonada y avatar video para comunicación de marca\n• Integración con tus herramientas existentes (Notion, Slack, WhatsApp, email)\n\nDiagnóstico de procesos automatizables incluido en el primer contacto.`,
    chips: ['¿Cuánto cuesta?', 'Ver caso de uso', 'Pedir demo'],
  },

  // ── Proceso / tiempos ────────────────────────────────────────────────────────
  {
    patterns: ['tiempo', 'plazo', 'cuándo', 'cuando', 'tarda', 'semanas', 'meses', 'proceso', 'cómo funciona', 'como funciona', 'pasos', 'etapas'],
    response: `Nuestro proceso es directo:\n\n**1. Brief & diagnóstico** — Llamada de 30 min sin compromiso\n**2. Propuesta** — Presupuesto detallado en 3–5 días\n**3. Producción** — Con revisiones incluidas en cada fase\n**4. Entrega** — Ficheros finales + documentación\n\nTiempos orientativos:\n• Rótulos & señalética — 2–4 semanas\n• Branding completo — 6–10 semanas\n• Web — 8–12 semanas\n• E-commerce — 8–12 semanas\n• IA & automatización — 2–6 semanas`,
    chips: ['¿Cuánto cuesta?', 'Hablar ahora', 'Pedir presupuesto'],
  },

  // ── Ubicación ────────────────────────────────────────────────────────────────
  {
    patterns: ['dónde', 'donde', 'barcelona', 'ubicación', 'ubicacion', 'oficina', 'taller', 'presencial', 'cerdanyola', 'remoto', 'online', 'españa', 'europa'],
    response: `Estamos en **Barcelona y Cerdanyola del Vallès**.\n\nTrabajamos con clientes de toda España y proyectos europeos de forma remota. Para rótulos e instalaciones físicas, cubrimos Barcelona y área metropolitana.\n\nVisitas al taller disponibles con cita previa — escríbenos para coordinar.`,
    chips: ['Pedir presupuesto', 'Ver servicios', 'Hablar con agente'],
  },

  // ── Portfolio / trabajos ─────────────────────────────────────────────────────
  {
    patterns: ['trabajo', 'proyecto', 'portfolio', 'ejemplo', 'caso', 'clientes', 'referencia', 'muestra', 'ver', 'muéstrame'],
    response: `Puedes ver una selección de nuestros trabajos en **royaluniondesign.com/work**.\n\nEntre nuestros proyectos: identidades de marca, tiendas Shopify, webs de alto rendimiento, rótulos luminosos y sistemas de señalética corporativa.\n\n¿Hay algún sector específico que te interese? Te puedo contar más sobre proyectos similares al tuyo.`,
    chips: ['Ver trabajos', 'Branding', 'Web & E-commerce', 'Rótulos'],
  },

  // ── Contacto / inicio ────────────────────────────────────────────────────────
  {
    patterns: ['contactar', 'contacto', 'empezar', 'comenzar', 'hablar', 'llamar', 'email', 'correo', 'whatsapp', 'reunión', 'reunion', 'llamada'],
    response: `Encantados de hablar contigo. Tienes varias opciones:\n\n📧 **Email** — hello@royaluniondesign.com\n📋 **Formulario** — royaluniondesign.com/contact (respuesta en 24h)\n💬 **Chat directo** — Conéctate con Hermes o Aura en Telegram ahora mismo\n\nPreferimos empezar con una **llamada de 30 min sin compromiso** para entender bien tu proyecto.`,
    chips: ['Pedir presupuesto', 'Chat con Hermes', 'Chat con Aura'],
  },

  // ── Saludo ───────────────────────────────────────────────────────────────────
  {
    patterns: ['hola', 'buenas', 'hey', 'hi', 'hello', 'qué tal', 'que tal', 'buenos días', 'buenas tardes', 'buenas noches'],
    response: `¡Hola! Soy Hermes, el agente de ventas de RUD Studio 👋\n\nSomos una agencia creativa en Barcelona: branding, diseño web, rótulos luminosos y automatización IA.\n\n¿Cuéntame, qué proyecto tienes en mente?`,
    chips: ['¿Cuánto cuesta?', 'Ver servicios', 'Rótulos & señalética', 'IA & automatización'],
  },

  // ── Diferencial / por qué RUD ────────────────────────────────────────────────
  {
    patterns: ['por qué', 'porque', 'diferencia', 'diferencial', 'ventaja', 'mejor', 'especial', 'único', 'unico', 'destacáis', 'destacais'],
    response: `Lo que nos hace diferentes:\n\n**Full-stack real** — branding + web + rótulos + IA bajo un mismo techo. No subcontratamos.\n\n**Fabricación propia** — taller de rótulos en Barcelona. No dependemos de terceros para señalética.\n\n**IA integrada** — Aura & Hermes trabajan en todos nuestros proyectos. Entregas más rápidas, mismo precio.\n\n**Sin juniors** — dirección creativa directa en cada proyecto.\n\n**95+ Lighthouse garantizado** — en todos los proyectos web, sin excepciones.`,
    chips: ['Ver trabajos', '¿Cuánto cuesta?', 'Pedir presupuesto'],
  },
]

export const FALLBACK_RESPONSES = [
  `Interesante pregunta. Para darte la mejor respuesta, ¿puedes contarme un poco más sobre tu proyecto o empresa?`,
  `No he entendido del todo. ¿Me lo puedes reformular? O si prefieres, conecta directamente con uno de nuestros agentes en Telegram.`,
  `Eso lo puede responder mejor uno de nuestros especialistas. ¿Quieres que te conecte con Hermes o Aura ahora mismo?`,
]

export const FUNNEL_MESSAGE: ChatMessage = {
  id: 'funnel',
  role: 'bot',
  text: 'Parece que tienes un proyecto que encaja con nosotros 🎯\n\nPara darte una propuesta real necesito un par de datos más. ¿Cómo prefieres continuar?',
  chips: ['Pedir presupuesto por email', 'Chat con Hermes en Telegram', 'Chat con Aura en Telegram'],
}

export function matchIntent(input: string): Intent | null {
  const lower = input.toLowerCase()
  for (const intent of INTENTS) {
    if (intent.patterns.some(p => lower.includes(p))) return intent
  }
  return null
}

export function getFallback(): string {
  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)]
}
