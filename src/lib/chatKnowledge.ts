// Sales knowledge base for RUD Studio chat widget
// Pattern matching only — no LLM, no token cost

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
  text: 'Hola 👋 Soy Hermes, el agente de RUD Studio.\n\n¿En qué puedo ayudarte?',
  chips: ['¿Cuánto cuesta?', 'Ver servicios', 'Rótulos & señalética', 'IA & automatización'],
}

export const INTENTS: Intent[] = [
  // Precios
  {
    patterns: ['precio', 'cuánto', 'cuanto', 'cuesta', 'coste', 'presupuesto', 'tarifa', 'cobras', 'inversión', 'inversion', 'vale', 'euros'],
    response: `Rangos orientativos — cada proyecto varía según alcance:\n\n**Señalética & Rótulos**\n• Vinilo escaparate — desde 300 €\n• Neón LED personalizado — desde 1.800 €\n• Letras corpóreas — desde 2.500 €\n• Rótulo luminoso — desde 3.200 €\n\n**Proyectos digitales**\n• Branding completo — desde 6.000 €\n• Diseño web — desde 5.500 €\n• E-commerce — desde 8.500 €\n• Proyecto integral — desde 18.000 €\n\nPresupuesto personalizado en menos de 24h, sin compromiso.`,
    chips: ['Pedir presupuesto', 'Ver tiempos', 'Hablar con agente'],
  },

  // Branding
  {
    patterns: ['branding', 'logo', 'logotipo', 'identidad', 'marca', 'brand', 'visual', 'naming', 'tagline', 'guidelines'],
    response: `Nuestro **branding estratégico** incluye:\n\n• Identidad visual completa\n• Brand Guidelines en Figma\n• Todas las aplicaciones (papelería, packaging, señalética)\n\nDesde **6.000 €** orientativo · 6–10 semanas.`,
    chips: ['¿Cuánto cuesta?', 'Ver trabajos', 'Pedir presupuesto'],
  },

  // Web
  {
    patterns: ['web', 'página', 'pagina', 'website', 'landing', 'desarrollo', 'programación', 'programacion', 'lighthouse', 'seo', 'core web'],
    response: `Diseñamos y desarrollamos webs de alto rendimiento:\n\n• Diseño UI pixel-perfect\n• Desarrollo a medida (sin templates)\n• SEO técnico completo\n• **Lighthouse 95+ garantizado**\n\nDesde **5.500 €** orientativo · 8–12 semanas.`,
    chips: ['¿Cuánto cuesta?', 'E-commerce', 'Pedir presupuesto'],
  },

  // Rótulos — incluye led, cartel, carteles
  {
    patterns: ['rótulo', 'rotulo', 'neón', 'neon', 'luminoso', 'letras', 'corpóreas', 'corporeas', 'vinilo', 'escaparate', 'señalética', 'señaletica', 'señal', 'publicidad', 'fachada', 'instalación', 'instalacion', 'fabricación', 'fabricacion', 'cartel', 'carteles', 'led', 'iluminado', 'backlit'],
    response: `Fabricamos en **taller propio en Barcelona**:\n\n• Neón LED — desde 1.800 €\n• Rótulos luminosos — desde 3.200 €\n• Letras corpóreas — desde 2.500 €\n• Vinilos escaparate — desde 300 €\n• Señalética corporativa — consultar\n\n✅ Visita técnica gratuita · Presupuesto en 24h`,
    chips: ['Pedir presupuesto', 'Hablar con agente'],
  },

  // E-commerce
  {
    patterns: ['ecommerce', 'e-commerce', 'shopify', 'tienda', 'carrito', 'checkout', 'producto', 'venta', 'crm', 'erp'],
    response: `Construimos **e-commerce que convierten**:\n\n• Diseño UX orientado a venta\n• Checkout optimizado para conversión\n• Integraciones con tu sistema\n\nDesde **8.500 €** orientativo · 8–12 semanas.`,
    chips: ['¿Cuánto cuesta?', 'Diseño web', 'Pedir presupuesto'],
  },

  // IA & Automatización — sin detalles técnicos internos
  {
    patterns: ['ia', 'inteligencia', 'automatización', 'automatizacion', 'bot', 'robot', 'workflow', 'automatizar', 'agentes de ia', 'agente ia'],
    response: `Implementamos **agentes de IA** adaptados a tu negocio:\n\n• Atención al cliente 24/7\n• Automatización de flujos y CRM\n• Integración con tus herramientas\n\nDiagnóstico de procesos incluido en el primer contacto.`,
    chips: ['Pedir demo', '¿Cuánto cuesta?', 'Pedir presupuesto'],
  },

  // Proceso / tiempos
  {
    patterns: ['tiempo', 'plazo', 'cuándo', 'cuando', 'tarda', 'semanas', 'meses', 'proceso', 'cómo funciona', 'como funciona', 'pasos', 'etapas'],
    response: `Proceso directo:\n\n**1. Brief** — Llamada de 30 min sin compromiso\n**2. Propuesta** — Presupuesto en 3–5 días\n**3. Producción** — Con revisiones incluidas\n**4. Entrega** — Ficheros + documentación\n\nTiempos: Rótulos 2–4 sem · Web 8–12 sem · Branding 6–10 sem`,
    chips: ['Pedir presupuesto', 'Hablar con agente'],
  },

  // Ubicación
  {
    patterns: ['dónde', 'donde', 'barcelona', 'ubicación', 'ubicacion', 'oficina', 'taller', 'presencial', 'cerdanyola', 'remoto', 'españa', 'europa'],
    response: `Estamos en **Barcelona y Cerdanyola del Vallès**.\n\nProyectos digitales en remoto para toda España y Europa. Rótulos e instalaciones en Barcelona y área metropolitana.`,
    chips: ['Pedir presupuesto', 'Hablar con agente'],
  },

  // Portfolio
  {
    patterns: ['trabajo', 'proyecto', 'portfolio', 'ejemplo', 'caso', 'clientes', 'referencia', 'muestra'],
    response: `Puedes ver nuestros trabajos en **royaluniondesign.com/work**.\n\n¿Hay algún sector que te interese? Te puedo contar más sobre proyectos similares al tuyo.`,
    chips: ['Ver trabajos', 'Pedir presupuesto'],
  },

  // Contacto
  {
    patterns: ['contactar', 'contacto', 'empezar', 'comenzar', 'hablar', 'llamar', 'email', 'correo', 'whatsapp', 'reunión', 'reunion', 'llamada'],
    response: `Encantados de hablar:\n\n📧 **Email** — hello@royaluniondesign.com\n📋 **Formulario** — royaluniondesign.com/contact\n💬 **Telegram** — Chat directo con nuestros agentes\n\nPreferimos empezar con una **llamada de 30 min sin compromiso**.`,
    chips: ['Pedir presupuesto', 'Chat con Hermes', 'Chat con Aura'],
  },

  // Saludo
  {
    patterns: ['hola', 'buenas', 'hey', 'hi', 'hello', 'qué tal', 'que tal', 'buenos días', 'buenas tardes', 'buenas noches'],
    response: `¡Hola! Soy Hermes, el agente de RUD Studio 👋\n\nBranding, diseño web, rótulos luminosos y automatización IA en Barcelona.\n\n¿Qué proyecto tienes en mente?`,
    chips: ['¿Cuánto cuesta?', 'Ver servicios', 'Rótulos & señalética', 'IA & automatización'],
  },

  // Diferencial
  {
    patterns: ['por qué', 'porque', 'diferencia', 'diferencial', 'ventaja', 'mejor', 'especial', 'único', 'unico', 'destacáis', 'destacais'],
    response: `Lo que nos hace diferentes:\n\n• **Full-stack real** — branding + web + rótulos + IA bajo un mismo techo\n• **Taller propio** en Barcelona para señalética, sin depender de terceros\n• **Dirección creativa directa** — sin juniors\n• **Lighthouse 95+** garantizado en todos los proyectos web`,
    chips: ['Ver trabajos', 'Pedir presupuesto'],
  },

  // Ver servicios
  {
    patterns: ['ver servicios', 'servicios', 'qué hacéis', 'que haceis', 'qué ofrecéis', 'que ofreceis', 'oferta'],
    response: `Nuestros servicios principales:\n\n🪧 **Rótulos & Señalética** — Fabricación propia en BCN\n🎨 **Branding** — Identidad visual estratégica\n💻 **Diseño Web** — Alto rendimiento, sin templates\n🛒 **E-commerce** — Orientado a conversión\n🤖 **IA & Automatización** — Agentes a medida`,
    chips: ['¿Cuánto cuesta?', 'Rótulos & señalética', 'IA & automatización', 'Pedir presupuesto'],
  },
]

export const FALLBACK_RESPONSES = [
  `Buena pregunta. Para darte la mejor respuesta, ¿puedes contarme más sobre tu proyecto?`,
  `No he entendido del todo. ¿Me lo puedes reformular?\n\nO conecta directamente con uno de nuestros agentes en Telegram.`,
  `Eso lo puede responder mejor uno de nuestros especialistas. ¿Quieres que te conecte?`,
]

export const FUNNEL_MESSAGE: ChatMessage = {
  id: 'funnel',
  role: 'bot',
  text: 'Parece que tienes un proyecto claro 🎯\n\n¿Cómo prefieres continuar?',
  chips: ['Pedir presupuesto por email', 'Chat con Hermes', 'Chat con Aura'],
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
