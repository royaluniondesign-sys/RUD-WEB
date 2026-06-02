import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import BlogTracker from '@/components/BlogTracker'

function renderParagraph(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  if (parts.length === 1) return text
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        return m
          ? <Link key={i} href={m[2]} style={{ color: '#7B68EE', textDecoration: 'underline', textDecorationColor: 'rgba(123,104,238,0.4)', fontWeight: 500 }}>{m[1]}</Link>
          : <span key={i}>{part}</span>
      })}
    </>
  )
}

const POSTS: Record<string, {
  title: string; date: string; category: string; readTime: string;
  image: string; content: string; excerpt: string;
}> = {
  'rotulos-luminosos-barcelona-precio-tipos-instalacion': {
    title: 'Rótulos luminosos en Barcelona: tipos, precios y cómo elegir el correcto para tu negocio',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '7 min',
    image: '/services/neon-shop.jpg',
    excerpt: 'Neón LED, cajas de luz, letras corpóreas, vinilos. Todo lo que necesitas saber antes de pedir presupuesto para tu rótulo en Barcelona.',
    content: `Si tienes un local en Barcelona y estás pensando en un rótulo, la primera pregunta suele ser la misma: ¿cuánto cuesta? Pero antes de hablar de precio, hay que entender qué tipo de rótulo necesitas realmente — porque la diferencia entre un neón LED y una caja de luz no es solo estética, es funcional y presupuestaria.

Los rótulos luminosos se dividen en cuatro categorías principales: neón LED (la versión moderna del tubo de neón clásico), cajas de luz (estructura con frente iluminado, ideal para franquicias y comercios de alta rotación), letras corpóreas (volumétricas, con o sin iluminación, el estándar del retail premium) y vinilos de escaparate (la solución más económica para comunicar sin estructura).

El neón LED ha ganado terreno en Barcelona en los últimos tres años por razones obvias: consume un 80% menos que el neón de vidrio clásico, dura entre 50.000 y 100.000 horas, y permite cualquier forma o tipografía. El coste oscila entre €600 y €2.500 dependiendo del tamaño y complejidad del diseño. Un neón pequeño para mostrador de entre 40 y 60 cm puede estar en €400-800. Un rótulo de fachada de 2 metros puede llegar a €1.500-2.500 instalado.

Las letras corpóreas con iluminación lateral son el estándar para retail de moda, joyería y hostelería premium en Barcelona. El proceso incluye diseño, mecanizado CNC del volumen, acabado (lacado, espejado, cobre, negro mate) e instalación. Los precios varían enormemente: desde €800 para una palabra corta hasta €5.000 para una fachada completa con iluminación RGB.

Las cajas de luz siguen siendo la opción preferida para franquicias y negocios que necesitan alta visibilidad nocturna con mantenimiento mínimo. La estructura de aluminio con frente de metacrilato o policarbonato iluminado por LED es robusta, impermeable y fácil de actualizar gráficamente. Precios desde €400 para un formato pequeño hasta €3.000 para una caja de luz de gran formato con estructura vista.

Los vinilos de escaparate son otra categoría completamente distinta: no son rótulos luminosos pero son el complemento visual más usado en comercios de Barcelona. Permiten cambiar el mensaje estacional, delimitar el espacio visual del escaparate y comunicar promociones sin obra. El coste de un vinilo básico para un escaparate de 2 metros puede estar entre €150 y €400 con diseño e instalación incluidos.

Antes de pedir presupuesto, hay tres preguntas que definen casi todo el proceso: ¿Es para interior o exterior? (los materiales y la protección IP son completamente distintos), ¿necesitas iluminación o no? (multiplica el coste por 2-3x pero también el impacto visual), y ¿cuál es el sistema de sujeción disponible en tu local? (fachada de obra, cristal, o estructura metálica cambia completamente la instalación).

En RUD diseñamos y fabricamos [rótulos luminosos en Barcelona](/rotulos) con instalación incluida. El proceso es simple: visita técnica gratuita, propuesta con render en 48 horas, fabricación en 2-3 semanas e instalación. Si estás pensando en renovar la señalética de tu negocio en Barcelona, [consulta nuestros precios orientativos](/pricing) o empieza directamente con una visita técnica sin compromiso.`,
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
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '6 min',
    image: '/services/neon-interior.avif',
    excerpt: 'Todo lo que necesitas saber sobre el neón LED en Barcelona: precios reales, plazos de fabricación, tipos de instalación y qué negocios lo usan más.',
    content: `El neón LED es el rótulo que más se pide en Barcelona ahora mismo. Restaurantes, cafeterías, peluquerías, estudios de yoga, hoteles boutique — casi cualquier negocio que quiera presencia visual fuerte está apostando por él. En este artículo te explicamos cómo funciona, cuánto cuesta realmente y qué tienes que saber antes de hacer el pedido.

El neón LED funciona con tubos de silicona flexible que albergan una tira LED en su interior. A diferencia del tubo fluorescente de gas de los años 80, el LED consume un 80% menos de energía, dura entre 50.000 y 100.000 horas y no se rompe con vibraciones. El resultado visual es prácticamente idéntico pero con ventajas técnicas que hacen que sea la opción lógica para instalaciones comerciales.

¿Cuánto cuesta un neón LED en Barcelona? Los precios orientativos son: neón de mostrador (40-80 cm) entre 800 € y 1.400 €, neón de pared mediano (80-150 cm) entre 1.400 € y 2.200 €, neón de fachada o instalación grande (150 cm+) desde 2.200 € hasta 4.000 € o más según complejidad. Todos los precios incluyen diseño, fabricación e instalación.

El proceso desde que nos contactas hasta que el neón está en tu local es el siguiente: primero te mandamos un presupuesto con render en menos de 48 horas. Una vez aprobado, fabricación en 10-15 días hábiles. La instalación en sí suele llevar entre 2 y 4 horas dependiendo del soporte.

¿Para qué tipo de local funciona mejor el neón LED? En hostelería (restaurantes, bares, cafeterías) es el rey indiscutible — genera contenido orgánico en redes sociales sin inversión publicitaria. En retail de moda, cosmética y bienestar añade personalidad y diferencia del resto de tiendas del pasillo o la calle. En oficinas y estudios creativos refuerza la identidad de marca en entornos de trabajo.

En RUD fabricamos e instalamos [neón LED en Barcelona](/rotulos) con taller propio en Cerdanyola del Vallès. Visita técnica gratuita, render previo incluido, garantía de 2 años en todos los componentes. Si tienes medidas y una idea aproximada, podemos enviarte [presupuesto orientativo](/pricing) en el mismo día.`,
  },
  'letras-corporeas-barcelona-tipos-precios': {
    title: 'Letras corpóreas en Barcelona: tipos, materiales y precios reales',
    date: 'Mayo 2026', category: 'Señalética & Rótulos', readTime: '6 min',
    image: '/services/letras-corporeas.avif',
    excerpt: 'Aluminio, metacrilato, retroiluminación halo. Todo sobre las letras corpóreas en Barcelona: qué son, qué materiales existen y cuánto cuestan.',
    content: `Las letras corpóreas son el estándar del retail premium, la hostelería de nivel medio-alto y las sedes corporativas en Barcelona. Son letras en tres dimensiones que se instalan directamente sobre la fachada, una pared interior o un panel de fondo — y que comunican solidez, permanencia y cuidado por la imagen de marca.

Los materiales más habituales son el aluminio (el más duradero y resistente a la intemperie, ideal para exterior), el metacrilato (ligero, con muchas opciones de color y acabado, muy usado en interior), la madera (acabado natural y cálido, muy demandado en restauración y retail lifestyle) y el poliestireno de alta densidad (más económico, para interiores donde no hay impacto físico directo).

Precios orientativos en Barcelona: letras corpóreas básicas sin iluminación desde 2.500 €. Con retroiluminación halo (la luz sale por detrás de la letra creando un halo en la pared) desde 3.500 €. Con iluminación frontal LED desde 3.000 €. Los precios finales dependen de la cantidad de letras, el tamaño total de la instalación, el material elegido y la complejidad de la instalación en la fachada.

¿Cuándo elegir letras corpóreas frente a un rótulo luminoso tipo caja de luz? Las letras corpóreas quedan mejor en fachadas donde quieres que la arquitectura se vea — el espacio entre letra y letra permite que la pared sea parte del diseño. La caja de luz tiene más impacto de noche porque ilumina una superficie mayor. Muchos locales combinan los dos: letras corpóreas para la identidad principal y caja de luz para información secundaria o precios.

El proceso de fabricación en RUD: diseño vectorial adaptado a tu logotipo, mecanizado CNC de cada letra, acabado (lacado en color Pantone, efecto cepillado, espejo dorado o cromado, negro mate), y montaje con perfilería oculta sobre la fachada o pared. La instalación no deja marcas visibles en el soporte.

En Barcelona trabajamos en todos los barrios: Eixample, Gràcia, Sant Martí (22@), Sarrià-Sant Gervasi, Poble Nou y área metropolitana. Visita técnica gratuita, [presupuesto en 48 horas](/pricing), instalación con garantía. [Ver todos los tipos de rótulos que fabricamos →](/rotulos)`,
  },
  'vinilos-escaparate-barcelona-precio-instalacion': {
    title: 'Vinilos para escaparate en Barcelona: tipos, precios y cuándo usarlos',
    date: 'Abril 2026', category: 'Señalética & Rótulos', readTime: '5 min',
    image: '/services/vinilo-escaparate.avif',
    excerpt: 'Vinilos de corte, impresos, esmerilados, microperforados. Guía completa de vinilos para escaparates en Barcelona con precios reales y ejemplos.',
    content: `El vinilo de escaparate es la solución de señalética más versátil y económica que existe. Sin obra, sin permisos especiales para la mayoría de casos, y con un impacto visual inmediato. Es el primer rótulo que muchos negocios instalan en Barcelona y, bien hecho, puede durar años y competir visualmente con instalaciones mucho más costosas.

Existen varios tipos de vinilo para escaparate, cada uno con sus características. El vinilo de corte es el más básico: se corta en plotter según el diseño (textos, logos, siluetas) y se aplica directamente sobre el cristal. Sin fondo — el color del vinilo es el diseño. El más económico y rápido. El vinilo impreso permite reproducir fotografías, degradados, ilustraciones o cualquier elemento gráfico en alta resolución. Se puede imprimir con o sin blanco de base, y se lamina para protección UV. El vinilo esmerilado imita el cristal esmerilado y se usa para privacidad (zona baja del escaparate en clínicas, despachos o peluquerías) o como elemento decorativo con el logotipo recortado. El vinilo microperforado permite ver desde dentro hacia fuera con normalidad mientras que desde fuera se ve la imagen impresa — ideal para escaparates donde no se quiere reducir la luz natural.

¿Cuánto cuesta un vinilo de escaparate en Barcelona? Los precios orientativos son: vinilo de corte básico (logotipo + texto) desde 150 € hasta 400 € con instalación. Vinilo impreso para un escaparate de 2 metros desde 300 € hasta 800 €. Vinilo esmerilado con logotipo recortado desde 250 €. Vinilo microperforado de gran formato desde 500 €. Los precios incluyen diseño, impresión e instalación.

El plazo de entrega es el punto fuerte de los vinilos: en 48-72 horas desde la aprobación del arte final podemos tener el vinilo instalado. Para aperturas de local o campañas de temporada es la solución más ágil.

En RUD instalamos [vinilos de escaparate en Barcelona](/rotulos) para comercios, clínicas, despachos, hoteles y oficinas. Trabajamos tanto el diseño desde cero como la aplicación de artes que el cliente ya tiene. Visita técnica gratuita, [presupuesto el mismo día](/pricing) para proyectos estándar.`,
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
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = POSTS[slug]
  if (!p) notFound()

  const paragraphs = p.content.split('\n\n').filter(Boolean)

  return (
    <main>
      <BlogTracker slug={slug} title={p.title} />
      <Navbar />

      <section className="hero-gradient" style={{ paddingTop: 68 }}>
        <div className="container-custom" style={{ paddingTop: '3rem', paddingBottom: '2rem', maxWidth: 760 }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280', marginBottom: '1.5rem', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Blog
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#7B68EE' }}>{p.category}</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>·</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>{p.readTime} lectura</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>·</span>
            <span style={{ fontSize: 10, color: '#C4BFB8' }}>{p.date}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>{p.title}</h1>
          <p style={{ fontSize: '1rem', color: '#6B7280', lineHeight: 1.7 }}>{p.excerpt}</p>
        </div>
      </section>

      <div style={{ height: 'clamp(200px,40vw,420px)', overflow: 'hidden', position: 'relative' }}>
        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))' }} />
      </div>

      <section style={{ background: '#F7F5F1', paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="container-custom" style={{ maxWidth: 720 }}>
          <article style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {paragraphs.map((para, i) => (
              <p key={i} style={{ fontSize: '1rem', color: '#3D3D3D', lineHeight: 1.8 }}>{renderParagraph(para)}</p>
            ))}
          </article>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E2DDD7', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 6 }}>¿Quieres hablar de esto con nosotros?</p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.75rem 1.5rem', background: '#0A0908', color: '#fff', borderRadius: 9999, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Contactar → 
              </Link>
            </div>
            <Link href="/blog" style={{ fontSize: 13, color: '#6B7280', textDecoration: 'none' }}>
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
