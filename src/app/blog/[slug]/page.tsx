import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import BlogTracker from '@/components/BlogTracker'

function renderParagraph(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (link) return <Link key={i} href={link[2]} style={{ color: '#BF4E30', textDecoration: 'underline', textDecorationColor: 'rgba(191,78,48,0.4)', fontWeight: 500 }}>{link[1]}</Link>
        if (bold) return <strong key={i}>{bold[1]}</strong>
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

const POSTS: Record<string, {
  title: string; date: string; category: string; readTime: string;
  image: string; content: string; excerpt: string;
  faqs?: Array<{ q: string; a: string }>;
}> = {
  'rotulos-luminosos-barcelona-precio-tipos-instalacion': {
    title: 'Rótulos luminosos en Barcelona: tipos, precios y cómo elegir el correcto para tu negocio',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '12 min',
    image: '/services/neon-shop.jpg',
    excerpt: 'Neón LED, cajas de luz, letras corpóreas, vinilos. Todo lo que necesitas saber antes de pedir presupuesto para tu rótulo en Barcelona.',
    content: `Si tienes un local en Barcelona y estás pensando en un rótulo, la primera pregunta suele ser la misma: ¿cuánto cuesta? Pero antes de hablar de precio, hay que entender qué tipo de rótulo necesitas realmente — porque la diferencia entre un neón LED y una caja de luz no es solo estética, es funcional y presupuestaria.

**Los 4 tipos de rótulos luminosos en Barcelona**

Los rótulos luminosos se dividen en cuatro categorías principales: neón LED, cajas de luz, letras corpóreas y vinilos iluminados. Cada uno tiene su caso de uso óptimo, su rango de precios y sus condicionantes técnicos de instalación.

**Neón LED: el rey de los rótulos en 2026**

El neón LED ha ganado terreno en Barcelona en los últimos tres años por razones obvias: consume un 80% menos que el neón de vidrio clásico, dura entre 50.000 y 100.000 horas, y permite cualquier forma o tipografía. Los precios orientativos son: neón de mostrador (40-80 cm) desde 800 €, neón de pared mediano (80-150 cm) entre 1.400 € y 2.200 €, neón de fachada desde 2.200 €. Todos los precios incluyen diseño, fabricación e instalación.

El neón LED es especialmente eficaz en hostelería — restaurantes, bares y cafeterías de Barcelona que instalan un neón en pared generan contenido orgánico en redes sociales sin invertir en publicidad. El local se convierte en escenario fotográfico.

**Letras corpóreas: el estándar del retail premium**

Las letras corpóreas son el estándar para retail de moda, joyería, hoteles boutique y sedes corporativas en Barcelona. Son letras tridimensionales que se instalan directamente sobre la fachada o pared interior, con o sin iluminación posterior (halo) o frontal. Los materiales más usados son el aluminio cepillado o lacado, el metacrilato translúcido para iluminación interior y la madera para proyectos de restauración lifestyle.

Precios orientativos: letras corpóreas sin iluminación desde 2.500 €, con retroiluminación halo desde 3.500 €. El precio final depende del número de letras, el tamaño total, el material y la complejidad de la instalación en fachada. En Barcelona, la normativa del Ayuntamiento puede requerir licencia para instalaciones en fachadas de ciertos barrios — especialmente en el Eixample y zonas protegidas.

**Cajas de luz: visibilidad 24h con mantenimiento mínimo**

Las cajas de luz siguen siendo la opción preferida para franquicias y negocios que necesitan alta visibilidad nocturna con mantenimiento mínimo. La estructura de aluminio con frente de metacrilato o policarbonato iluminado por LED es robusta, impermeable y fácil de actualizar gráficamente — cambias el vinilo del frente sin tocar la estructura. Precios desde 800 € para un formato pequeño hasta 3.500 € para una caja de luz de gran formato con estructura vista.

**Vinilos de escaparate: la solución más rápida y económica**

Los vinilos de escaparate no son rótulos luminosos pero son el complemento visual más usado en comercios de Barcelona. Permiten cambiar el mensaje estacional, delimitar el espacio visual del escaparate y comunicar promociones sin obra ni permisos. El plazo de instalación es de 48-72 horas. Precios: vinilo de corte básico (logo + texto) desde 150 €, vinilo impreso desde 300 €, vinilo esmerilado desde 250 €.

**¿Qué rótulo necesita tu negocio?**

La elección depende de tres factores: el tipo de negocio y el sector, el espacio disponible (interior o exterior, tipo de fachada) y el presupuesto.

Para hostelería y restauración: neón LED en interior o letras corpóreas en fachada. Para retail de moda y premium: letras corpóreas con halo. Para negocios que necesitan actualizar mensajes frecuentemente: caja de luz. Para aperturas rápidas o presupuestos ajustados: vinilo de escaparate como primera fase.

**Normativa de rótulos en Barcelona**

En Barcelona, los rótulos en fachada están regulados por la Ordenança sobre l'ús de les façanes i dels espais visibles des de la via pública. Las restricciones principales afectan a la altura máxima de los rótulos, la proporción respecto a la fachada, el uso de colores y materiales en zonas de protección patrimonial, y la iluminación en horario nocturno.

Los barrios con más restricciones son el Gòtic, el Born, Gràcia y zonas catalogadas del Eixample. No obstante, en la mayoría de casos los rótulos de hasta 0,90 m de altura y que no superen el 10% de la superficie de la fachada pueden instalarse sin licencia de obra mayor. Para cualquier duda, realizamos consulta previa gratuita con los técnicos del Ayuntamiento.

**El proceso de instalación en RUD**

El proceso completo dura entre 2 y 4 semanas desde el primer contacto hasta el rótulo instalado. Paso 1: contacto con fotos del espacio y medidas aproximadas — respondemos en menos de 2 horas. Paso 2: propuesta con render 3D en menos de 48 horas, sin compromiso. Paso 3: aprobación y fabricación en taller propio en Cerdanyola del Vallès (10-15 días hábiles). Paso 4: instalación por nuestro equipo en el horario que mejor te vaya.

Tenemos taller propio lo que nos permite controlar la calidad de cada pieza y cumplir plazos sin depender de terceros. Todos los rótulos incluyen 2 años de garantía en componentes y acabados.

En RUD diseñamos y fabricamos [rótulos luminosos en Barcelona](/rotulos) con instalación incluida. Si estás pensando en renovar la señalética de tu negocio, [consulta nuestros precios](/pricing) o [pide presupuesto gratuito](/contact?servicio=rotulos) — tendrás render y precio en menos de 48 horas.`,
    faqs: [
      { q: '¿Cuánto cuesta un rótulo luminoso en Barcelona?', a: 'El precio depende del tipo: una caja de luz parte de 800 €, las letras corpóreas desde 2.500 €, el neón LED desde 800 € (mostrador) hasta más de 2.200 € (fachada). Todos los precios incluyen diseño, fabricación e instalación en Barcelona.' },
      { q: '¿Cuánto tarda en fabricarse un rótulo luminoso?', a: 'Los vinilos de escaparate están listos en 48-72 horas. Cajas de luz y letras corpóreas entre 5 y 10 días hábiles. El neón LED tiene un plazo de hasta 15 días por su proceso de fabricación personalizado.' },
      { q: '¿Qué tipo de rótulo luminoso es mejor para un restaurante o bar?', a: 'Para hostelería el neón LED en interior es la opción más popular en 2026: genera contenido orgánico en redes sociales y es económico en consumo (hasta 80% menos que neón de vidrio). Para fachada, las letras corpóreas con retroiluminación halo ofrecen la mayor presencia visual.' },
      { q: '¿Necesito licencia para poner un rótulo en Barcelona?', a: 'Depende del barrio y el tamaño. Rótulos de hasta 0,90 m de altura que no superen el 10% de la superficie de fachada generalmente no requieren licencia de obra mayor. En zonas protegidas como el Gòtic, Born o partes del Eixample las restricciones son más estrictas. Hacemos consulta previa gratuita con el Ayuntamiento.' },
      { q: '¿Ofrecéis garantía en los rótulos?', a: 'Sí. Todos los rótulos fabricados en nuestro taller incluyen 2 años de garantía en componentes y acabados. Taller propio en Cerdanyola del Vallès, lo que nos permite resolver incidencias en menos de 24 horas sin depender de terceros.' },
    ],
  },
  'aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st': {
    title: 'AURA: El Agente IA Autónomo que Lidera la Operación de RUD Studio desde Telegram',
    date: 'Abril 2026', category: 'IA & Tecnología', readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85',
    excerpt: 'AURA no es un chatbot; es el cerebro operativo de nuestra agencia creativa en Barcelona. Descubre cómo gestionamos proyectos y tecnología en tiempo real desde una app de mensajería.',
    content: `En el saturado ecosistema tecnológico actual, las agencias creativas se enfrentan a un reto constante: la fragmentación operativa. Gestionar el diseño, el desarrollo web, los despliegues de infraestructura y la comunicación con los clientes suele requerir un laberinto de herramientas inconexas. En RUD Studio, nuestra agencia con sede en Barcelona, decidimos romper este ciclo. No buscamos una herramienta más; construimos un compañero. Así nació AURA, el agente de IA autónomo que ha redefinido nuestra forma de operar y entregar valor.

AURA no es un simple bot de respuestas preconfiguradas ni una interfaz visual cargada de botones innecesarios. Es una entidad inteligente integrada directamente en Telegram, lo que nos permite gestionar toda la agencia desde la palma de la mano. Al utilizar el protocolo de mensajería como sistema operativo, eliminamos la fricción de las plataformas de gestión de proyectos tradicionales y permitimos que la acción técnica ocurra en el mismo lugar donde fluyen las ideas. La simplicidad de un mensaje de texto se convierte en el disparador de procesos complejos de ingeniería.

La arquitectura de AURA es lo que llamamos un sistema de orquestación multi-cerebro. Gracias a la implementación de tecnología de vanguardia y el uso del Model Context Protocol (MCP), AURA tiene la capacidad de interactuar con el mundo real. Puede leer y escribir archivos en nuestros servidores, gestionar repositorios de Git de forma autónoma, enviar correos electrónicos a través de APIs profesionales y ejecutar procesos en terminales remotas. Todo esto sucede bajo una capa de lenguaje natural: si podemos explicarlo en un mensaje, AURA puede ejecutarlo de manera precisa.

Uno de los pilares de AURA es su memoria persistente y su capacidad de razonamiento contextual. A diferencia de otros sistemas de IA que olvidan la conversación en cuanto cierras la pestaña, AURA mantiene un registro evolutivo de nuestras preferencias, los estados de los proyectos y las necesidades específicas de cada cliente de RUD Studio. Esta memoria le permite tomar decisiones informadas, como proponer mejoras en el código de un sitio web basándose en despliegues previos o redactar comunicaciones que mantienen la voz de marca de la agencia de manera impecable y profesional.

Para las startups y empresas que confían en nosotros para su branding y presencia digital, AURA representa una garantía de agilidad. Mientras el equipo creativo se enfoca en la estética y la estrategia de marca, AURA se encarga de la fontanería tecnológica. Desde la configuración de registros DNS hasta la automatización de flujos de trabajo en n8n, el agente asegura que la infraestructura sea tan sólida como el diseño que entregamos. Esta simbiosis entre creatividad humana e inteligencia operativa es lo que nos permite entregar proyectos en tiempos récord sin sacrificar la calidad técnica.

La proactividad es el verdadero diferenciador de AURA. Gracias a sus ciclos internos de revisión, el agente no espera a ser consultado. Monitoriza activamente la salud de nuestras aplicaciones, supervisa los logs de errores y puede iniciar procesos de auto-reparación si detecta una anomalía en el código o en el servidor. Esta capacidad de autogestión significa que problemas que tradicionalmente detendrían la producción durante horas son detectados y mitigados por AURA en cuestión de segundos, a menudo antes de que el equipo humano tenga que intervenir.

En RUD Studio entendemos que el futuro de la consultoría tecnológica no reside en vender horas de trabajo manual, sino en ofrecer sistemas inteligentes que escalen con el negocio. AURA es nuestro caso de estudio más exitoso. Hemos transformado una agencia creativa tradicional en una entidad impulsada por IA, reduciendo los tiempos de respuesta administrativa en un sesenta por ciento y permitiendo que nuestra energía se vuelque totalmente en la innovación visual y la experiencia de usuario.

Barcelona siempre ha sido un faro de diseño y vanguardia en Europa. Con AURA, estamos llevando esa herencia al territorio de la inteligencia artificial aplicada. No estamos ante un experimento técnico, sino ante una realidad operativa que ya está gestionando proyectos reales para clientes de diversos sectores. La IA autónoma ha dejado de ser una promesa de ciencia ficción para convertirse en el núcleo de RUD Studio, permitiéndonos ser más rápidos, más precisos y mucho más creativos.

El mensaje para las empresas que buscan un socio estratégico es claro: la tecnología debe trabajar para el negocio, no al revés. En RUD Studio, lideramos con el ejemplo. Si buscas una agencia que entienda la intersección exacta entre el diseño de alto nivel y la autonomía tecnológica, estamos listos para la conversación. El futuro de tu marca es inteligente, es eficiente y empieza con un mensaje en Telegram. El mañana de la gestión creativa ya está aquí, y se llama AURA.`,
  },
  'ia-local-vs-nube-agencias-creativas': {
    title: 'IA local vs. nube: por qué las agencias creativas deberían reconsiderar dónde corre su IA',
    date: 'Marzo 2026', category: 'IA & Tecnología', readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85',
    excerpt: 'Llevamos un año corriendo modelos 100% locales en RUD con Ollama y aquí está lo que aprendimos.',
    content: `Las grandes plataformas de IA cobran por token, almacenan tus datos y pueden cambiar sus condiciones mañana. En RUD llevamos más de un año operando con modelos 100% locales — Qwen3:14b, Llama4, DeepSeek — a través de Ollama, y el resultado ha sido mejor de lo esperado en tres frentes: calidad comparable a GPT-4 en la mayoría de tareas creativas, coste operativo €0 al mes, y privacidad total de los datos de nuestros clientes.

El razonamiento es simple: si eres una agencia creativa, tus activos más valiosos son los briefings, estrategias y contenido de tus clientes. Subirlos a una API de terceros, aunque sea con las mejores políticas de privacidad, introduce un riesgo innecesario cuando la alternativa local funciona igual de bien.

La infraestructura que usamos en RUD corre sobre un MacBook Air M4 con Ollama, n8n self-hosted para los workflows de automatización, y Qdrant como base de datos vectorial. El coste de setup fue el tiempo de configuración — el coste operativo mensual es €0.

¿Cuándo sigue teniendo sentido la nube? Para tareas que requieren context windows masivos (100k+ tokens), para razonamiento matemático complejo, o para clientes que necesitan las últimas capacidades de GPT-4o o Claude Opus. Pero para el 80% del trabajo de una agencia creativa — copy, análisis de marca, generación de assets, automatizaciones — un modelo local bien configurado lo resuelve perfectamente.`,
  },
  'branding-ecommerce-shopify-barcelona': {
    title: 'E-commerce en Shopify: los 6 errores de branding que destruyen la conversión',
    date: 'Febrero 2026', category: 'E-commerce', readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=85',
    excerpt: 'Los patrones de error que más cuestan ventas en tiendas Shopify españolas.',
    content: `Hemos auditado decenas de tiendas Shopify en España y el patrón se repite con una regularidad que ya no sorprende. Los seis errores más comunes que destruyen conversión son todos problemas de branding mal aplicado al e-commerce.

Primero: logos que no funcionan a 32px. La mayoría de logos se diseñan para impresión o presentaciones, no para el favicon y el header mobile. Un logo que es hermoso en A4 puede ser ilegible en la barra de navegación del móvil — que es donde el 70% de tus clientes lo ven primero.

Segundo: paletas de color sin contraste accesible. El WCAG 2.1 exige un ratio de contraste mínimo de 4.5:1 para texto normal. La mayoría de tiendas Shopify fallan esto — y Google lo penaliza en SEO además de excluir usuarios con deficiencias visuales.

Tercero: tipografía que destroza la legibilidad en mobile. Fuentes decorativas que se ven bien en desktop se vuelven ilegibles a 14px en un iPhone. La regla: nunca fuentes decorativas para texto de más de 20 palabras en mobile.

Cuarto: inconsistencia entre el packaging y la web. El cliente compra online, recibe el paquete físico — y si no hay coherencia visual, la percepción de marca se fragmenta.

Quinto: CTAs con el mismo peso visual que el resto del contenido. El botón de compra debe ser lo más visible de la página. Si compite visualmente con el header, el footer y los banners promocionales, pierde.

Sexto: brand voice inconsistente. El copy del producto, los emails automáticos, las notificaciones de Shopify — todo debe sonar como la misma persona hablando. La mayoría de tiendas mezclan tonos porque distintas personas escribieron distintas partes sin guidelines.

En RUD Studio combinamos [branding estratégico y desarrollo web](/services) para garantizar coherencia en todos los puntos de contacto de tu tienda. [Consulta nuestros precios de branding y e-commerce →](/pricing)`,
  },
  'identidad-visual-vs-logo-diferencia': {
    title: 'No compraste un logo. Compraste un activo estratégico (o no)',
    date: 'Enero 2026', category: 'Branding', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=85',
    excerpt: 'La diferencia funcional entre un logo y una identidad visual completa.',
    content: `La confusión más cara del ecosistema empresarial español: creer que un logo es una identidad visual. Un logo es un símbolo. Una identidad es un sistema. La diferencia no es estética — es funcional y estratégica.

Una identidad visual funciona en todos los puntos de contacto: el logo en el header web, el mismo logo bordado en una camiseta, el mismo sistema de color en un roll-up de feria, la misma tipografía en el packaging, el mismo tono visual en los Stories de Instagram. Esto no pasa por accidente — pasa porque hay un sistema diseñado para funcionar en todos esos contextos.

El coste real de no tener un sistema: cada vez que necesitas aplicar tu marca a un nuevo contexto, alguien tiene que tomar decisiones ad-hoc. ¿Qué color de fondo uso aquí? ¿Esta tipografía funciona en este tamaño? ¿El logo cabe en este espacio cuadrado? Sin sistema, cada una de estas preguntas se resuelve de forma inconsistente, y la marca se fragmenta visualmente hasta que se vuelve irreconocible.

Lo que incluye una identidad visual completa: el símbolo y sus variantes (positivo, negativo, favicon, monocromático), el sistema de color con especificaciones para pantalla e impresión, el sistema tipográfico con jerarquías definidas, los patterns y elementos de apoyo, las guidelines de uso y las aplicaciones principales (papelería, web, social, packaging).

Una identidad bien construida debería durar entre 8 y 15 años antes de necesitar una revisión mayor. Un logo sin sistema suele necesitar rebrand en 2-3 años cuando la empresa crece y las inconsistencias se vuelven insostenibles.`,
  },
  'nextjs-vs-wordpress-2026': {
    title: 'Next.js vs. WordPress en 2026: cuándo usar cada uno (y cuándo no)',
    date: 'Enero 2026', category: 'Desarrollo Web', readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85',
    excerpt: 'Nuestra respuesta honesta después de construir proyectos en ambas plataformas.',
    content: `Después de años construyendo proyectos en Next.js y WordPress, nuestra respuesta honesta es: depende del cliente y del proyecto, no de la moda tecnológica del momento.

Next.js gana claramente en: performance (Core Web Vitals consistentemente más altos), SEO técnico (Server-Side Rendering nativo, metadatos dinámicos sin plugins), escalabilidad (de una landing a una aplicación web sin cambiar stack), y seguridad (superficie de ataque mínima comparada con WordPress).

WordPress gana en: autonomía del cliente para gestionar contenido sin desarrollador, ecosistema maduro de plugins para funcionalidades específicas, curva de aprendizaje mínima para el equipo del cliente, y coste de mantenimiento más predecible a largo plazo si el cliente tiene un webmaster.

El error que vemos repetidamente: elegir por preferencia tecnológica del desarrollador en lugar de por las necesidades reales del proyecto.

Para una landing page de una startup que no va a cambiar contenido frecuentemente → Next.js. Para una empresa con un equipo de marketing que publica 20 artículos al mes y gestiona eventos → WordPress o headless CMS con Next.js como frontend. Para un e-commerce → Shopify directamente, ninguno de los dos.

Lo que nunca hacemos: recomendar WordPress cuando el cliente no va a tener a nadie que lo mantenga. Un WordPress desactualizado es uno de los vectores de ataque más comunes en la web. Si nadie va a actualizar los plugins y el core regularmente, Next.js + contenido estático es siempre la opción más segura.

¿Tienes dudas sobre qué plataforma elegir para tu proyecto? En RUD Studio desarrollamos webs en Next.js y tiendas en Shopify. [Conoce nuestros servicios de diseño web →](/services)`,
  },
  'estrategia-marca-startups-barcelona': {
    title: 'Por qué las startups de Barcelona gastan en diseño antes de tener estrategia de marca',
    date: 'Diciembre 2025', category: 'Estrategia', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85',
    excerpt: 'El error más caro del ecosistema startup y cómo evitarlo.',
    content: `Es el error más caro del ecosistema startup barcelonés: invertir en una web bonita antes de saber exactamente a quién le hablas, qué problema resuelves, y por qué deberían elegirte a ti en lugar de a la alternativa obvia.

Hemos visto startups gastar €15.000 en identidad y web, y rebrandear 18 meses después porque el mercado objetivo cambió, el posicionamiento no funcionó, o simplemente porque nadie en el equipo había pensado en serio quién era el cliente ideal.

La estrategia de marca no es un documento aburrido que se archiva. Es la respuesta a cuatro preguntas: ¿A quién le hablas exactamente (no "pymes", sino "fundadores de pymes de entre 5 y 15 empleados en el sector servicios que no tienen equipo de marketing")? ¿Qué problema específico resuelves? ¿Por qué eres la mejor opción para ese problema? ¿Cómo quieres que se sientan cuando interactúan con tu marca?

Sin respuestas sólidas a estas cuatro preguntas, cualquier decisión de diseño es arbitraria. El color que eliges, el tono de voz que usas, las imágenes que muestras — todo esto debería derivar de la estrategia, no de lo que le gusta al fundador o de lo que está de moda en Behance.

El proceso que seguimos en RUD: primero una sesión de brand strategy de 3-4 horas donde trabajamos estas preguntas con el cliente, luego definimos el posicionamiento y los mensajes clave, y solo después abrimos Figma. El tiempo invertido en estrategia siempre se recupera en menos iteraciones de diseño y en una identidad que funciona porque está construida sobre una base real.

Si tu startup está en Barcelona y quieres construir la marca bien desde el principio, [conoce nuestros servicios de branding](/services) o [revisa nuestros precios orientativos](/pricing).`,
  },
  'neon-led-barcelona-precio-instalacion': {
    title: 'Neón LED en Barcelona: precio, instalación y cómo elegir el tuyo',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '10 min',
    image: '/services/neon-interior.avif',
    excerpt: 'Todo lo que necesitas saber sobre el neón LED en Barcelona: precios reales, plazos de fabricación, tipos de instalación y qué negocios lo usan más.',
    content: `El neón LED es el rótulo que más se pide en Barcelona ahora mismo. Restaurantes, cafeterías, peluquerías, estudios de yoga, hoteles boutique — casi cualquier negocio que quiera presencia visual fuerte está apostando por él. En este artículo te explicamos cómo funciona, cuánto cuesta realmente y qué tienes que saber antes de hacer el pedido.

**Cómo funciona el neón LED**

El neón LED funciona con tubos de silicona flexible que albergan una tira LED en su interior. A diferencia del tubo fluorescente de gas de los años 80, el LED consume un 80% menos de energía, dura entre 50.000 y 100.000 horas y no se rompe con vibraciones. El resultado visual es prácticamente idéntico pero con ventajas técnicas que hacen que sea la opción lógica para instalaciones comerciales.

Existen dos variantes: neón sobre base transparente de acrílico (la más habitual, permite ver el fondo) y neón sobre base sólida (opaca, más estructurada). La primera es la preferida para instalaciones sobre pared donde quieres que el material de fondo sea parte del diseño. La segunda es mejor para instalaciones en escaparate o fachada donde necesitas que el rótulo sea independiente del soporte.

**Precios del neón LED en Barcelona (2026)**

Los precios reales de mercado para neón LED en Barcelona son: neón de mostrador (40-80 cm) entre 800 € y 1.400 €, neón de pared mediano (80-150 cm) entre 1.400 € y 2.200 €, neón de fachada o instalación grande (150 cm+) desde 2.200 € hasta 4.500 € o más según complejidad.

Todos los precios incluyen diseño, render 3D previo para aprobación, fabricación, transformador y cable, base de montaje y mano de obra de instalación. El precio varía principalmente por tres factores: el tamaño total del neón (longitud del tubo), la complejidad del diseño (tipografías estándar vs. formas personalizadas complejas) y si la instalación requiere trabajos en altura o estructuras especiales.

El transformador tiene un consumo eléctrico de aproximadamente 1W por cada 30 cm de tubo. Un neón de 1 metro consume unos 3-4W — prácticamente insignificante en la factura eléctrica.

**Colores disponibles**

Los colores estándar más pedidos son blanco cálido (el más fotografiable), blanco frío, rojo, azul, verde, amarillo y rosa. También existe la opción RGB con mando a distancia que permite cambiar de color — especialmente útil para discotecas, bares de copas y eventos. El precio del RGB es un 30-40% superior al neón de color fijo.

**Para qué negocios funciona mejor el neón LED en Barcelona**

En hostelería (restaurantes, bares, cafeterías) es el rey indiscutible. Un neón en la pared genera contenido orgánico en redes sociales: los clientes fotografían el local y lo publican sin que nadie se lo pida. Es publicidad gratuita con cada cliente satisfecho. Los locales que instalan neón en el [Poblenou](/rotulos/poblenou-barcelona), el [Eixample](/rotulos/eixample-barcelona) o [Gràcia](/rotulos/gracia-barcelona) reportan un aumento notable en el tagged content de Instagram.

En retail de moda, cosmética y bienestar el neón añade personalidad y diferencia el local del resto de tiendas de la misma calle. En estudios de yoga, fitness y wellness el neón con una frase motivacional o el nombre del estudio es ya un estándar visual del sector. En hoteles boutique y apartamentos con encanto es el detalle que aparece en todas las fotos de los huéspedes.

**Plazo de fabricación e instalación**

El proceso completo dura entre 2 y 3 semanas desde el primer contacto. Los primeros 2 días: visita técnica (presencial o por fotos) y propuesta con render 3D. A los 10-15 días hábiles: fabricación completada en nuestro taller. En 1-2 días más: instalación en tu local, 2 a 4 horas de trabajo.

La garantía es de 2 años en todos los componentes — transformador, tubo y base. Pasado ese periodo, el mantenimiento más habitual es la sustitución del transformador (coste aproximado: 80-120 €), ya que el tubo LED raramente falla antes de los 10 años.

**Normativa para neón LED en Barcelona**

Para instalar un neón LED en el interior de un local no se necesita ningún permiso especial — es una instalación eléctrica como cualquier otra luminaria. Para instalaciones en escaparate o fachada, aplica la normativa municipal de rótulos. En la mayoría de casos, un neón que no supera el 10% de la superficie de la fachada y está a menos de 0,90 m de altura puede instalarse sin licencia de obra mayor. Los barrios con restricciones más estrictas son el Gòtic, Born y ciertas zonas del Eixample catalogadas.

Consulta siempre con tu instalador antes de iniciar el proceso — en RUD hacemos la consulta previa con el Ayuntamiento sin coste adicional para nuestros clientes.

En RUD fabricamos e instalamos [neón LED en Barcelona](/rotulos/neon-led-barcelona) con taller propio en Cerdanyola del Vallès. Visita técnica gratuita, render previo incluido en el presupuesto, garantía de 2 años. Si tienes medidas y una idea aproximada, [pide presupuesto ahora](/contact?servicio=neon) y te enviamos render y precio en menos de 48 horas.`,
  },
  'letras-corporeas-barcelona-tipos-precios': {
    title: 'Letras corpóreas en Barcelona: tipos, materiales y precios reales',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '10 min',
    image: '/services/letras-corporeas.avif',
    excerpt: 'Aluminio, metacrilato, retroiluminación halo. Todo sobre las letras corpóreas en Barcelona: qué son, qué materiales existen y cuánto cuestan.',
    content: `Las letras corpóreas son el estándar del retail premium, la hostelería de nivel medio-alto y las sedes corporativas en Barcelona. Son letras en tres dimensiones que se instalan directamente sobre la fachada, una pared interior o un panel de fondo — y que comunican solidez, permanencia y cuidado por la imagen de marca. A diferencia del neón LED o la caja de luz, las letras corpóreas funcionan igual de bien de día que de noche, con o sin iluminación.

**Tipos de letras corpóreas en Barcelona**

Las letras corpóreas se clasifican principalmente por su material y por el tipo de iluminación. En cuanto al material: aluminio (el más duradero y resistente a la intemperie, ideal para exterior, con acabados lacado, cepillado, espejo o bruto), metacrilato (ligero, translúcido u opaco, muchas opciones de color, el preferido para proyectos de interior con iluminación), madera (natural o lacada, muy demandada en restauración, cafeterías de especialidad y retail lifestyle), acero inoxidable (acabado espejo o cepillado, presencia máxima, especialmente en joyería y moda premium), y poliestireno de alta densidad (el más económico, para interiores sin impacto físico directo y eventos).

En cuanto a la iluminación: sin iluminación (las letras dependen de la luz ambiente del espacio), con retroiluminación halo (la luz LED sale por detrás de la letra creando un halo luminoso en la pared — el acabado más elegante y fotográfico), con iluminación frontal (los LEDs están en la cara visible de la letra, mayor brillo y visibilidad nocturna), y con iluminación interior translúcida (el cuerpo de metacrilato translúcido se ilumina desde dentro, especialmente vistoso en techo o con fondo oscuro).

**Precios de letras corpóreas en Barcelona (2026)**

Precios orientativos por tipo de instalación: letras corpóreas sin iluminación en aluminio lacado, instalación estándar de fachada, desde 2.500 € para proyectos de hasta 5 letras. Con retroiluminación halo en aluminio o metacrilato desde 3.500 €. Con iluminación frontal LED desde 3.000 €. Proyectos en acero inoxidable con espejo o efecto cobre desde 4.000 €.

El precio final depende de: número de letras y caracteres, tamaño total de la instalación (alto de letra × ancho total), material y acabado, tipo de iluminación, y complejidad de la instalación (fachada de ladrillo vs. cristal vs. estructura metálica tienen coste de instalación diferente).

Una instalación completa de letras corpóreas para una tienda del Eixample (nombre del negocio en aluminio cepillado con halo, letras de 30 cm de altura, 3 metros de ancho total) puede estar en un rango de 4.000 € a 6.000 € con instalación incluida.

**Letras corpóreas vs. caja de luz vs. neón: ¿cuándo elegir cada una?**

Las letras corpóreas quedan mejor en fachadas donde quieres que la arquitectura sea visible — el espacio entre letra y letra permite que el material de la fachada sea parte del diseño. Son la opción más elegante para negocios premium que quieren proyectar solidez y permanencia.

La caja de luz tiene más impacto de noche porque ilumina una superficie mayor y el backlit crea más brillo desde la calle. Es la preferida para franquicias y negocios donde la visibilidad nocturna y la uniformidad de marca son prioritarias.

El neón LED es el más fotogénico y el que mejor funciona en interior. Genera más contenido en redes sociales y es más versátil en formas. Su punto débil frente a las letras corpóreas es la percepción de solidez — el neón comunica creatividad y personalidad mientras que las letras corpóreas comunican institución y permanencia.

**Proceso de fabricación y plazos**

El proceso completo en RUD dura entre 3 y 5 semanas. Semana 1: visita técnica, toma de medidas de la fachada y propuesta con render fotorrealista de cómo quedará el rótulo instalado. Semana 2-3: aprobación del presupuesto y fabricación en nuestro taller de Cerdanyola del Vallès — mecanizado CNC de cada letra, acabado y control de calidad. Semana 4-5: instalación por nuestro equipo especializado con fijación oculta que no deja marcas visibles en el soporte.

Todos los proyectos incluyen consulta sobre normativa municipal y, cuando es necesario, gestionamos la solicitud de licencia de actividad ante el Ayuntamiento de Barcelona.

**¿Necesito licencia para instalar letras corpóreas en Barcelona?**

Depende de la ubicación y las dimensiones. Para instalaciones en interior no se necesita licencia. Para instalaciones en fachada, la normativa del Ayuntamiento de Barcelona establece que los rótulos que no superen el 10% de la superficie de la fachada y tengan menos de 0,90 m de altura pueden instalarse sin licencia de obra mayor en la mayoría de zonas. En el Eixample, Gràcia y zonas de protección patrimonial las restricciones son más estrictas.

En RUD realizamos sin coste adicional la consulta previa con los técnicos municipales para todos nuestros proyectos en Barcelona.

En Barcelona trabajamos en todos los barrios: [Eixample](/rotulos/eixample-barcelona), [Gràcia](/rotulos/gracia-barcelona), [Poblenou](/rotulos/poblenou-barcelona), [Sarrià](/rotulos/sarria-barcelona), Sants y área metropolitana. Visita técnica gratuita, [presupuesto con render en 48 horas](/contact?servicio=letras), garantía 2 años. [Ver todos los tipos de rótulos →](/rotulos)`,
  },
  'vinilos-escaparate-barcelona-precio-instalacion': {
    title: 'Vinilos para escaparate en Barcelona: tipos, precios y cuándo usarlos',
    date: 'Abril 2026', category: 'Señalética & Rótulos', readTime: '9 min',
    image: '/services/vinilo-escaparate.avif',
    excerpt: 'Vinilos de corte, impresos, esmerilados, microperforados. Guía completa de vinilos para escaparates en Barcelona con precios reales y ejemplos.',
    content: `El vinilo de escaparate es la solución de señalética más versátil y económica que existe para negocios en Barcelona. Sin obra, sin permisos especiales en la mayoría de casos, y con un impacto visual inmediato. Es el primer rótulo que muchos negocios instalan y, bien hecho, puede durar años y competir visualmente con instalaciones mucho más costosas.

**Tipos de vinilos para escaparate**

Existen cinco tipos principales de vinilo para escaparate, cada uno con su caso de uso óptimo.

El vinilo de corte es el más básico y económico: se corta en plotter según el diseño (textos, logos, siluetas geométricas) y se aplica directamente sobre el cristal. No tiene fondo — el color del vinilo es el diseño, y el cristal actúa como fondo. Ideal para comunicar el nombre del negocio, horarios, o un claim conciso. Duración aproximada: 5-7 años en exterior con buena exposición solar.

El vinilo impreso permite reproducir fotografías, degradados, ilustraciones o cualquier elemento gráfico complejo en alta resolución. Se imprime en plotter de gran formato, se lamina para protección UV y aplicación sobre cristal, y puede aplicarse con o sin blanco de base (el blanco de base mejora la opacidad y la viveza del color). Es la opción para campañas de temporada, promociones visuales y branding de alto impacto.

El vinilo esmerilado imita el cristal esmerilado y se usa principalmente para privacidad (zona baja del escaparate en clínicas, despachos, centros de estética) o como elemento decorativo sofisticado con el logotipo recortado. Da un acabado premium y discreto muy demandado en negocios de servicios.

El vinilo microperforado tiene perforaciones microscópicas que permiten ver desde dentro hacia fuera con total normalidad mientras que desde fuera se ve la imagen impresa. Ideal para escaparates donde no se quiere reducir la entrada de luz natural. Muy usado en agencias inmobiliarias, oficinas y tiendas que necesitan privacidad sin oscurecer el espacio.

El vinilo translúcido se usa en cajas de luz y escaparates retroiluminados — permite que la luz pase a través de él creando un efecto de panel luminoso. Es el material estándar para las cajas de luz de gran formato.

**Precios de vinilos para escaparate en Barcelona (2026)**

Los precios reales del mercado en Barcelona son: vinilo de corte básico (logotipo + texto, escaparate de hasta 2 metros) desde 150 € hasta 400 € con diseño e instalación. Vinilo impreso para un escaparate de 2 metros desde 300 € hasta 800 € dependiendo de la complejidad gráfica. Vinilo esmerilado con logotipo recortado para escaparate estándar desde 250 €. Vinilo microperforado de gran formato (cristalera de más de 3 metros) desde 500 €.

Los precios incluyen siempre diseño gráfico del arte final, impresión, laminado de protección, y mano de obra de instalación. En proyectos donde el cliente ya tiene el arte final en alta resolución, el precio baja entre un 15% y un 25%.

**¿Cuánto dura un vinilo de escaparate?**

La durabilidad depende principalmente de la exposición solar y la calidad del material. Los vinilos de calidad premium (Avery, Oracal, 3M) con laminado UV duran entre 5 y 7 años en fachadas con exposición directa al sol. En interior o con orientación norte, pueden durar 8-10 años sin problemas. Los vinilos de corte sin laminado para aplicaciones interiores tienen una vida útil de 3-5 años.

La retirada del vinilo es limpia con los materiales correctos — no daña el cristal ni deja residuos permanentes si se hace con calor y los disolventes adecuados.

**Plazo de instalación**

El plazo de entrega es el punto fuerte de los vinilos frente a cualquier otro tipo de rótulo. Desde la aprobación del arte final: vinilo de corte en 24-48 horas, vinilo impreso en 48-72 horas. Para aperturas de local urgentes, en muchos casos podemos instalar en el mismo día si nos confirman antes de las 11:00.

**¿Se necesita licencia para instalar un vinilo de escaparate en Barcelona?**

Para la mayoría de vinilos de escaparate en Barcelona no se necesita licencia especial. El vinilo se considera un elemento gráfico temporal no estructural. Sin embargo, si el vinilo cubre más del 50% del cristal del escaparate en negocios en planta baja de edificios catalogados o en zonas de protección especial, puede requerirse comunicación previa al Ayuntamiento. En caso de duda, lo consultamos antes de presupuestar.

**Casos de uso habituales en Barcelona**

Los vinilos de escaparate en Barcelona se usan habitualmente en: tiendas de moda y complementos (cambios estacionales de campaña), clínicas dentales y centros de estética (privacidad y branding simultáneo), restaurantes y cafeterías (menú, horarios y personalidad en cristal), agencias inmobiliarias (cartelería de pisos en venta/alquiler a gran formato), estudios de pilates, yoga y fitness (wrap de cristalera con frases motivacionales), y oficinas y coworkings (señalética de planta, zonificación por cristal esmerilado).

En RUD instalamos [vinilos de escaparate en Barcelona](/rotulos/vinilos-escaparate-barcelona) para comercios, clínicas, despachos, hoteles y oficinas en todos los barrios: [Eixample](/rotulos/eixample-barcelona), [Gràcia](/rotulos/gracia-barcelona), [Poblenou](/rotulos/poblenou-barcelona) y área metropolitana. Trabajamos el diseño desde cero o aplicamos artes que el cliente ya tiene. [Pide presupuesto ahora](/contact?servicio=vinilos) — respuesta en menos de 2 horas.`,
  },
  'automatizacion-marketing-agencias-n8n': {
    title: 'Cómo automatizamos el 60% de nuestros workflows de marketing con n8n (y €0 de coste)',
    date: 'Noviembre 2025', category: 'Automatización', readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=85',
    excerpt: 'Nuestro stack actual de automatización y los workflows que más tiempo ahorran.',
    content: `n8n self-hosted más modelos locales de IA es la combinación que más ha cambiado cómo trabajamos en RUD. El resultado: aproximadamente el 60% de los workflows de marketing que antes hacíamos manualmente ahora corren solos, a cualquier hora, sin coste adicional.

Los workflows que más tiempo ahorran, en orden de impacto:

Reportes automáticos de cliente: cada semana, n8n recoge datos de Google Analytics, Meta Ads y Shopify, los procesa con un modelo local, y genera un informe resumido que se envía automáticamente al cliente. Lo que antes tomaba 2 horas por cliente ahora toma 0 horas.

Gestión de leads: cuando llega un formulario de contacto, AURA analiza el brief, clasifica el tipo de proyecto, estima el presupuesto aproximado, y prepara un borrador de respuesta personalizada. Respondemos en menos de una hora a cualquier consulta, incluso fuera de horario.

Publicaciones en redes: el calendario editorial se planifica una vez al mes, y n8n se encarga de publicar en el momento óptimo, adaptar el copy para cada plataforma y trackear el rendimiento.

Seguimiento de proyectos: notificaciones automáticas cuando un proyecto lleva más de 48 horas sin actividad, recordatorios de revisiones pendientes, y alertas cuando se aproxima una fecha de entrega.

La inversión para montar este stack: unas 40 horas de configuración inicial repartidas en dos semanas. El ahorro estimado: entre 15 y 20 horas semanales de trabajo manual. La amortización fue en el primer mes.

¿Interesado en automatizar tu agencia o negocio? En RUD desarrollamos agentes IA y workflows de automatización. [Ver servicios de automatización IA →](/services)`,
  },
  'cajas-de-luz-barcelona-precio-tipos': {
    title: 'Cajas de luz en Barcelona: tipos, formatos y precios reales en 2026',
    date: 'Junio 2026', category: 'Señalética & Rótulos', readTime: '5 min',
    image: '/RUDTRABAJOSROTULOS/photo-1698500103054-8a00e4c4131c.avif',
    excerpt: 'La caja de luz sigue siendo el rótulo más instalado en comercios de Barcelona. Guía completa de formatos, materiales y precios para 2026.',
    content: `La caja de luz es el rótulo luminoso más instalado en comercios, franquicias y hostelería de Barcelona. Su combinación de alta visibilidad nocturna, durabilidad y fácil mantenimiento la convierten en la opción predeterminada para negocios que necesitan impacto visual sin complicaciones técnicas.

Una caja de luz es básicamente una estructura de aluminio con un frente iluminado — fabricado en metacrilato o policarbonato — que difunde la luz de los LEDs interiores de forma uniforme. El resultado es una superficie luminosa continua con el logo o texto del negocio, perfectamente visible tanto de día como de noche.

Existen dos grandes familias: la caja de luz con frente de vinilo impreso (más económica, el gráfico se imprime en vinilo adhesivo sobre el frente translúcido) y la caja de luz con frente fresado (más premium, el logo se freása directamente sobre el frente dejando pasar la luz solo por el diseño). La segunda opción da un acabado más limpio y profesional, similar al de las letras corpóreas.

Los precios orientativos en Barcelona para 2026: caja de luz simple con vinilo impreso, formato pequeño (hasta 100×60 cm), desde 600 € instalada. Formato mediano (hasta 200×100 cm) entre 900 € y 1.600 €. Caja de luz con frente fresado premium, desde 1.200 € para formato pequeño. Cajas de doble cara (visibles desde los dos lados, habitual en marquesinas y banderolas) añaden aproximadamente un 40% al precio.

¿Cuándo elegir caja de luz frente a otras opciones? La caja de luz es ideal cuando necesitas máxima visibilidad nocturna con superficie iluminada amplia, cuando el local cambia el gráfico frecuentemente (basta cambiar el vinilo), o cuando el presupuesto no permite letras corpóreas con retroiluminación. Es la opción estándar para franquicias porque permite aplicar el manual de marca con precisión y economía de escala.

En RUD fabricamos e instalamos [cajas de luz en Barcelona](/rotulos/cajas-de-luz-barcelona) para todo tipo de comercios. Visita técnica gratuita, presupuesto con render en 48 horas, instalación con garantía de 2 años. [Pide presupuesto sin compromiso →](/pricing)`,
  },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = POSTS[slug]
  if (!p) return { title: 'Artículo no encontrado · RUD Blog' }
  return {
    title: `${p.title} · RUD Studio Barcelona`,
    description: p.excerpt,
    alternates: { canonical: `https://royaluniondesign.com/blog/${slug}` },
    openGraph: { title: p.title, description: p.excerpt, images: [{ url: p.image }] },
    other: p.faqs ? {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }),
    } : {},
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = POSTS[slug]
  if (!p) notFound()

  const paragraphs = p.content.split('\n\n').filter(Boolean)

  return (
    <main style={{ background: 'var(--bg)' }}>
      <BlogTracker slug={slug} title={p.title} />
      <Navbar light />

      {/* Hero */}
      <section style={{ background: 'var(--bg)', paddingTop: 68, paddingBottom: 'clamp(3rem,6vw,5rem)' }}>
        <div className="container-custom" style={{ paddingTop: 'clamp(3rem,7vw,5rem)' }}>
          <nav style={{ marginBottom: '2rem' }}>
            <Link href="/blog" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← BLOG
            </Link>
          </nav>
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            {p.category} · {p.readTime} LECTURA · {p.date}
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(3rem,8vw,9rem)', lineHeight: 0.85, color: 'var(--fg)', marginBottom: '2rem', maxWidth: '18ch' }}>
            {p.title.toUpperCase()}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '60ch' }}>{p.excerpt}</p>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ height: 'clamp(220px,40vw,480px)', overflow: 'hidden', position: 'relative' }}>
        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Content */}
      <section style={{ background: 'var(--bg)', paddingTop: 'clamp(3rem,6vw,5rem)', paddingBottom: 'clamp(4rem,8vw,7rem)' }}>
        <div className="container-custom" style={{ maxWidth: 720 }}>
          <article style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {paragraphs.map((para, i) => {
              const heading = para.match(/^\*\*(.+)\*\*$/)
              if (heading) return (
                <h2 key={i} style={{ fontSize: 'clamp(1.05rem,2vw,1.25rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--fg)', marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  {heading[1]}
                </h2>
              )
              return <p key={i} style={{ fontSize: '1rem', color: 'var(--fg)', lineHeight: 1.8 }}>{renderParagraph(para)}</p>
            })}
          </article>

          {p.faqs && (
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: 'clamp(1.1rem,2vw,1.3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem', color: 'var(--fg)' }}>Preguntas frecuentes</h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {p.faqs.map(({ q, a }, i) => (
                  <div key={i} style={{ padding: '1.5rem 0', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg)', marginBottom: 10 }}>{q}</p>
                    <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <Link href="/blog" className="mono-label" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              ← VOLVER AL BLOG
            </Link>
            <Link href="/contact" className="mono-label" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: 2, textDecoration: 'none' }}>
              CONTACTAR →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--warm)', paddingBlock: 'clamp(4rem,10vw,8rem)' }}>
        <div className="container-custom">
          <p className="mono-label" style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>¿Necesitas rótulos o branding?</p>
          <h2 className="display" style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.85, color: 'var(--fg)', marginBottom: '0.5rem' }}>
            ¿NECESITAS
          </h2>
          <h2 className="display" style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.85, color: 'var(--border)', marginBottom: '3rem' }}>
            RÓTULOS?
          </h2>
          <Link href="/contact" className="mono-label" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--fg)', paddingBottom: 3, textDecoration: 'none' }}>
            PIDE PRESUPUESTO →
          </Link>
        </div>
      </section>
    </main>
  )
}
